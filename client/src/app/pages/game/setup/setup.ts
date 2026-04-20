import { Component, inject, signal } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { GameService } from '../../../services/game-service';

@Component({
  selector: 'app-setup',
  imports: [SharedModule],
  templateUrl: './setup.html',
  styles: ``,
})
export class Setup {
  private store = inject(GameService);
  private words = signal<{ civil: string, undercover: string }[]>([]);
  newName = signal('');
  names = signal<string[]>([]);

  constructor() {
    this.store.getWords().subscribe(data => this.words.set(data));
  }

  add() {
    const name = this.newName().trim();
    if (name && !this.names().includes(name)) {
      this.names.update(n => [...n, name]);
      this.newName.set('');
    }
  }

  remove(i: number) {
    this.names.update(n => n.filter((_, idx) => idx !== i));
  }
  start() {
    const availableWords = this.words();
    if (this.names().length >= 3 && availableWords.length > 0) {
      const pair = availableWords[Math.floor(Math.random() * availableWords.length)];
      this.store.startGame(pair.civil, pair.undercover, this.names());
    }
  }
}
