import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { GameService } from '../../../services/game-service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-active-game-banner',
  imports: [SharedModule, TranslocoModule],
  templateUrl: './active-game-banner.html',
  styles: ``,
})
export class ActiveGameBanner {
  service = inject(GameService);
}
