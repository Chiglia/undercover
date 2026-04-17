import { Component, inject } from '@angular/core';
import { ActiveGameBanner } from "../common-components/active-game-banner/active-game-banner";
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-settings',
  imports: [ActiveGameBanner, TranslocoModule],
  templateUrl: './settings.html',
  styles: ``,
})
export class Settings {
  private translocoService = inject(TranslocoService);

  availableLangs = [
    { code: 'it', label: 'Italiano' },
    { code: 'en', label: 'English' }
  ];

  get currentLang() {
    return this.translocoService.getActiveLang();
  }

  changeLang(code: string) {
    this.translocoService.setActiveLang(code);
    // Opzionale: salva la preferenza nel localStorage
    localStorage.setItem('preferred_lang', code);
  }
}
