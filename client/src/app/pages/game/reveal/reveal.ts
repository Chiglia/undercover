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
  hasSeenWord = signal(false);

  handleReveal() {
    if (!this.isWordVisible()) {
      this.isWordVisible.set(true);
    } else {
      this.isWordVisible.set(false);
      this.hasSeenWord.set(true);
    }
  }

  next() {
    this.hasSeenWord.set(false);
    this.isWordVisible.set(false);
    this.store.nextReveal();
  }
}
