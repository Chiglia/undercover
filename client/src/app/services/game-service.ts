import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { GameState, Role } from '../models/game.model';
import { Router } from '@angular/router';

const STORAGE_KEY = 'undercover_game_state';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private router = inject(Router);

  private state = signal<GameState>(this.loadFromStorage());

  players = computed(() => this.state().players);
  currentPhase = computed(() => this.state().phase);
  currentPlayer = computed(() => this.state().players[this.state().currentPlayerIndex]);

  isGameOver = computed(() => {
    const alive = this.state().players.filter(p => p.isAlive);
    const intruders = alive.filter(p => p.role !== 'CIVILIAN').length;
    return (intruders === 0 || alive.length <= 2) && this.players().length > 0;
  });

  winners = computed(() => {
    const alive = this.state().players.filter(p => p.isAlive);
    return alive.some(p => p.role !== 'CIVILIAN') ? 'INTRUDERS' : 'CIVILIANS';
  });

  constructor() {
    effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state())));
  }

  private loadFromStorage(): GameState {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      players: [],
      phase: 'SETUP',
      civilianWord: '',
      undercoverWord: '',
      currentPlayerIndex: 0
    };
  }

  updatePlayers(names: string[]) {
    this.state.update(s => ({
      ...s,
      players: names.map(name => ({ id: crypto.randomUUID(), name, isAlive: true }))
    }));
  }

  startGame(cWord: string, uWord: string, undercover: number, mrWhite: number) {
    const players = this.state().players.map(p => ({ ...p, isAlive: true }));
    const roles: Role[] = [
      ...Array(undercover).fill('UNDERCOVER'),
      ...Array(mrWhite).fill('MR_WHITE'),
      ...Array(players.length - undercover - mrWhite).fill('CIVILIAN')
    ].sort(() => Math.random() - 0.5);

    players.forEach((p, i) => {
      p.role = roles[i];
      p.word = p.role === 'MR_WHITE' ? '???' : (p.role === 'CIVILIAN' ? cWord : uWord);
    });

    this.state.update(s => ({ ...s, players, civilianWord: cWord, undercoverWord: uWord, currentPlayerIndex: 0, phase: 'REVEAL' }));
    this.router.navigate(['/game/reveal']);
  }

  nextReveal() {
    const nextIndex = this.state().currentPlayerIndex + 1;
    if (nextIndex < this.state().players.length) {
      this.state.update(s => ({ ...s, currentPlayerIndex: nextIndex }));
    } else {
      this.state.update(s => ({ ...s, phase: 'PLAY' }));
      this.router.navigate(['/game/play']);
    }
  }

  eliminatePlayer(id: string) {
    this.state.update(s => ({
      ...s,
      players: s.players.map(p => p.id === id ? { ...p, isAlive: false } : p)
    }));

    if (this.isGameOver()) {
      this.state.update(s => ({ ...s, phase: 'RESULTS' }));
      this.router.navigate(['/game/results']);
    }
  }

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    this.state.set({ players: [], phase: 'SETUP', civilianWord: '', undercoverWord: '', currentPlayerIndex: 0 });
    this.router.navigate(['/game/setup']);
  }
}