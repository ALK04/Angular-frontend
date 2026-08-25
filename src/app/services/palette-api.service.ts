import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColorPalette } from '../features/composer/data/palettes';

interface ApiPalette {
  id: string;
  name: string;
  brandDefault: string;
  brandDark: string;
  surface: string;
  pageBg: string;
  ink: string;
  createdAt: string;
}

interface CreatePaletteDto {
  name: string;
  brandDefault: string;
  brandDark: string;
  surface: string;
  pageBg: string;
  ink: string;
}

const API = 'http://localhost:5173';

function toColorPalette(p: ApiPalette): ColorPalette & { apiId: string } {
  return {
    id: `custom-${p.id}`,
    apiId: p.id,
    name: p.name,
    description: 'Palette personnalisée',
    brand: { default: p.brandDefault, dark: p.brandDark },
    surface: p.surface,
    pageBg: p.pageBg,
    ink: p.ink,
  };
}

@Injectable({ providedIn: 'root' })
export class PaletteApiService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<(ColorPalette & { apiId: string })[]> {
    return this.http
      .get<ApiPalette[]>(`${API}/palettes`)
      .pipe(map(list => list.map(toColorPalette)));
  }

  create(dto: CreatePaletteDto): Observable<ColorPalette & { apiId: string }> {
    return this.http
      .post<ApiPalette>(`${API}/palettes`, dto)
      .pipe(map(toColorPalette));
  }

  delete(apiId: string): Observable<void> {
    return this.http.delete<void>(`${API}/palettes/${apiId}`);
  }
}
