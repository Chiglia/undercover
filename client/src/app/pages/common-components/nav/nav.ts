import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  imports: [SharedModule, MenubarModule],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  items: MenuItem[] = [
    { label: 'Gioca', icon: 'pi pi-play', routerLink: '/game/setup' },
    { label: 'Regole', icon: 'pi pi-book', routerLink: '/' },
    { label: 'Impostazioni', icon: 'pi pi-cog', routerLink: '/settings' }
  ];
}
