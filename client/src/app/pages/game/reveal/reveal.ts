import { Component, inject, signal } from '@angular/core';
import { GameService } from '../../../services/game-service';
import { SharedModule } from '../../../../shared.module';

@Component({
  selector: 'app-game',
  imports: [SharedModule],
  templateUrl: './reveal.html',
  styles: ``,
})
export class Reveal {
  store = inject(GameService);
  isWordVisible = signal(false);

  next() {
    this.isWordVisible.set(false);
    this.store.nextReveal();
  }
}
