import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language-service';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule],
  template: `
  <p-menubar [model]="items" class="sticky top-0 z-50 shadow-sm" />
    <main class="container mx-auto p-4 max-w-2xl">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class App {
  private langService = inject(LanguageService);
  items: MenuItem[] = [
    { label: 'Gioca', icon: 'pi pi-play', routerLink: '/game/setup' },
    { label: 'Regole', icon: 'pi pi-book', routerLink: '/' },
    { label: 'Impostazioni', icon: 'pi pi-cog', routerLink: '/settings' }
  ];
}
