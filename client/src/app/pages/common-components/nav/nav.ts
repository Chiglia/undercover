import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { MenubarModule } from 'primeng/menubar';
import { TranslocoModule } from '@jsverse/transloco';
@Component({
  selector: 'app-nav',
  imports: [SharedModule, MenubarModule, TranslocoModule],
  templateUrl: './nav.html',
})
export class Nav {
  readonly menuConfig = [
    { label: 'nav.play', icon: 'pi pi-play', routerLink: '/game/setup' },
    { label: 'nav.rules', icon: 'pi pi-book', routerLink: '/' },
    { label: 'nav.settings', icon: 'pi pi-cog', routerLink: '/settings' }
  ];
}
