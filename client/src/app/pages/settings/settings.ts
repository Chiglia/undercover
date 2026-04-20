import { Component, inject } from '@angular/core';
import { ActiveGameBanner } from "../common-components/active-game-banner/active-game-banner";
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-settings',
  imports: [ActiveGameBanner, TranslocoModule],
  templateUrl: './settings.html',
  styles: ``,
})
export class Settings {
  private languageService = inject(LanguageService);

  availableLangs = [
    { code: 'it', label: 'Italiano' },
    { code: 'en', label: 'English' }
  ];

  get currentLang() {
    return this.languageService.currentLang;
  }

  changeLang(code: string) {
    this.languageService.setLanguage(code);
  }
}
