import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { GameService } from '../../../services/game-service';

@Component({
  selector: 'app-results',
  imports: [SharedModule],
  templateUrl: './results.html',
  styles: ``,
})
export class Results {
  store = inject(GameService);
}
