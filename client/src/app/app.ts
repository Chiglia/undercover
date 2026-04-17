import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language-service';
import { Nav } from "./pages/common-components/nav/nav";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  template: `
    <div class="h-svh w-full bg-slate-950 flex flex-col overflow-hidden selection:bg-primary-500 selection:text-slate-950">

      <app-nav class="shrink-0 z-50"></app-nav>

      <main class="flex-1 relative overflow-hidden">
         <router-outlet />
      </main>

    </div>
  `,
  styles: [],
})
export class App {
  private langService = inject(LanguageService);
}
