import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CatalogueModuleStat {
  id: string;
  name: string;
  variantCount: number;
}

export interface CatalogueFamilyStat {
  /** Lettre repère de la famille (A → F). */
  code: string;
  name: string;
  variantCount: number;
  modules: CatalogueModuleStat[];
}

export interface CatalogueStats {
  /** Nombre total de composants (toutes variantes confondues). */
  totalVariants: number;
  /** Nombre de types de modules (hero, tarifs, footer…). */
  moduleCount: number;
  familyCount: number;
  updatedAt: string | null;
  families: CatalogueFamilyStat[];
}

const API = 'http://localhost:5173';

/** Chiffres du catalogue, servis par la table `catalogue_modules`. */
@Injectable({ providedIn: 'root' })
export class CatalogueApiService {
  private readonly http = inject(HttpClient);

  getStats(): Observable<CatalogueStats> {
    return this.http.get<CatalogueStats>(`${API}/catalogue/stats`);
  }
}
