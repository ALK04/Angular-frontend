import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { buildProject } from '../../generator/build-project';
import { downloadProject } from '../../generator/zip';

/** Une ligne de l'arborescence affichée à l'écran. */
interface TreeLine {
  depth: number;
  label: string;
  isFile: boolean;
  isLast: boolean;
}

interface TreeNode {
  name: string;
  children: Map<string, TreeNode>;
}

@Component({
  selector: 'app-generate-step',
  imports: [ComposerTopbar, StepPill],
  templateUrl: './generate-step.html',
  styleUrl: './generate-step.css',
})
export class GenerateStep implements OnInit {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);

  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('generer'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('generer') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Générer`;
  }

  ngOnInit(): void {
    // L'utilisateur peut atterrir ici sans être passé par « Config. site ».
    this.store.initPages();
    this.store.initNavLinks();
  }

  /** Le projet complet, recalculé dès qu'un choix change. */
  protected readonly project = computed(() => buildProject({
    projectName: this.store.projectName(),
    pages: this.store.pages(),
    navLinks: this.store.navLinks(),
    palette: this.store.palette(),
  }));

  protected readonly fileCount = computed(() => Object.keys(this.project().files).length);

  protected readonly contentPages = computed(() => this.store.pages().filter(p => !p.isLayout));

  protected readonly sectionCount = computed(() =>
    this.contentPages().reduce((total, page) => total + page.sections.length, 0),
  );

  protected readonly tree = computed(() => toTreeLines(Object.keys(this.project().files)));

  protected readonly downloading = signal(false);
  protected readonly error = signal<string | null>(null);

  protected onNameInput(event: Event): void {
    this.store.projectName.set((event.target as HTMLInputElement).value);
  }

  protected async download(): Promise<void> {
    if (this.downloading()) return;
    this.downloading.set(true);
    this.error.set(null);
    try {
      await downloadProject(this.project());
    } catch {
      this.error.set("Le ZIP n'a pas pu être créé. Réessayez.");
    } finally {
      this.downloading.set(false);
    }
  }

  protected back(): void {
    this.router.navigate(['/composer/pages']);
  }
}

/** Transforme une liste de chemins en lignes d'arborescence prêtes à afficher. */
function toTreeLines(paths: string[]): TreeLine[] {
  const root: TreeNode = { name: '', children: new Map() };

  for (const path of paths.slice().sort()) {
    let node = root;
    for (const segment of path.split('/')) {
      let child = node.children.get(segment);
      if (!child) {
        child = { name: segment, children: new Map() };
        node.children.set(segment, child);
      }
      node = child;
    }
  }

  const lines: TreeLine[] = [];
  const walk = (node: TreeNode, depth: number): void => {
    // Dossiers d'abord, puis fichiers, chacun par ordre alphabétique.
    const children = [...node.children.values()].sort((a, b) => {
      const aIsDir = a.children.size > 0;
      const bIsDir = b.children.size > 0;
      if (aIsDir !== bIsDir) return aIsDir ? -1 : 1;
      return a.name.localeCompare(b.name);
    });

    children.forEach((child, index) => {
      const isFile = child.children.size === 0;
      lines.push({
        depth,
        label: isFile ? child.name : `${child.name}/`,
        isFile,
        isLast: index === children.length - 1,
      });
      if (!isFile) walk(child, depth + 1);
    });
  };

  walk(root, 0);
  return lines;
}
