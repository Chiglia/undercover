import { Component, inject, signal } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { GameService } from '../../services/game-service';

@Component({
  selector: 'app-setup',
  imports: [SharedModule],
  templateUrl: './setup.html',
  styles: ``,
})
export class Setup {
  store = inject(GameService);
  newName = signal('');
  names = signal<string[]>([]);
  cWord = signal('Pizza');
  uWord = signal('Focaccia');

  add() { if (this.newName()) { this.names.update(n => [...n, this.newName()]); this.newName.set(''); } }
  remove(i: number) { this.names.update(n => n.filter((_, idx) => idx !== i)); }
  start() {
    this.store.updatePlayers(this.names());
    this.store.startGame(this.cWord(), this.uWord(), 1, 1);
  }
}
