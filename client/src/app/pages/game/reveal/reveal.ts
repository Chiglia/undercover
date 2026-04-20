import { Component, inject, signal } from '@angular/core';
import { GameService } from '../../../services/game-service';
import { SharedModule } from '../../../../shared.module';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-game',
  imports: [SharedModule, TranslocoModule],
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
