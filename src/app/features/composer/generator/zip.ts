import JSZip from 'jszip';
import { GeneratedProject } from './build-project';

/**
 * Assemble le projet en archive ZIP et déclenche le téléchargement.
 *
 * Les dossiers ne sont jamais créés explicitement : JSZip les déduit des « / »
 * présents dans les chemins de fichiers.
 */
export async function downloadProject(project: GeneratedProject): Promise<void> {
  const zip = new JSZip();
  const root = zip.folder(project.rootDir);
  if (!root) throw new Error('Impossible de créer le dossier racine de l’archive.');

  for (const [path, content] of Object.entries(project.files)) {
    root.file(path, content);
  }

  const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${project.rootDir}.zip`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
