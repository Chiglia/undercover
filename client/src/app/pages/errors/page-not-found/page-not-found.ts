import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-page-not-found',
  imports: [SharedModule, RouterLink, TranslocoDirective],
  templateUrl: './page-not-found.html',
  styles: ``,
})
export class PageNotFound {
  generateHexId(): string {
    return Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
  }
}
