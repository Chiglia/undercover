import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { GameService } from '../../../services/game-service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-results',
  imports: [SharedModule, TranslocoModule],
  templateUrl: './results.html',
  styles: ``,
})
export class Results {
  protected store = inject(GameService);

  getCurrentTime(): string {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  }
}
