import { Component, inject } from '@angular/core';
import { GameService } from '../../../services/game-service';
import { SharedModule } from '../../../../shared.module';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-play',
  imports: [SharedModule, TagModule],
  templateUrl: './play.html',
  styles: ``,
})
export class Play {
  store = inject(GameService);
  aliveCount = () => this.store.players().filter(p => p.isAlive).length;
}
