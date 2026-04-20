import { inject, Injectable } from '@angular/core';
import { getBrowserLang, TranslocoService } from '@jsverse/transloco';
import { PrimeNG } from 'primeng/config';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translocoService = inject(TranslocoService);
  private primeng = inject(PrimeNG);
  private readonly LANG_KEY = 'user-lang';
  private readonly availableLangs = ['it', 'en'];

  constructor() {
    this.setLanguage(this.determineLanguage());
  }

  private determineLanguage(): string {
    const saved = localStorage.getItem(this.LANG_KEY);
    const browser = getBrowserLang() || '';
    return (saved && this.availableLangs.includes(saved)) ? saved :
      (this.availableLangs.includes(browser) ? browser : 'it');
  }

  setLanguage(lang: string) {
    if (!this.availableLangs.includes(lang)) return;

    localStorage.setItem(this.LANG_KEY, lang);
    this.translocoService.setActiveLang(lang);
    document.documentElement.lang = lang;

    this.translocoService.selectTranslation(lang).pipe(take(1)).subscribe(labels => {
      if (labels['primeng']) this.primeng.setTranslation(labels['primeng']);
    });
  }

  get currentLang() {
    return this.translocoService.getActiveLang();
  }
}