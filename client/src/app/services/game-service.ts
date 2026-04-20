import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { GamePhase, GameState, Player, Role } from '../models/game.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const STORAGE_KEY = 'undercover_game_state';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private router = inject(Router);
  private http = inject(HttpClient);

  private state = signal<GameState>(this.loadFromStorage());

  players = computed(() => this.state().players);
  currentPhase = computed(() => this.state().phase);
  currentPlayer = computed(() => this.state().players[this.state().currentPlayerIndex]);

  isGameOver = computed(() => {
    const alive = this.state().players.filter(p => p.isAlive);
    const intruders = alive.filter(p => p.role !== 'CIVILIAN').length;
    return (intruders === 0 || alive.length <= 2) && this.players().length > 0;
  });

  hasActiveGame = computed(() => {
    const phase = this.state().phase;
    return phase !== 'SETUP' && phase !== 'RESULTS';
  });

  winners = computed(() => {
    const alive = this.state().players.filter(p => p.isAlive);
    const intruders = alive.filter(p => p.role !== 'CIVILIAN');

    if (intruders.length === 0) return 'CIVILIANS';
    if (alive.some(p => p.role === 'MR_WHITE')) return 'MR_WHITE';

    return 'UNDERCOVER';
  });

  constructor() {
    effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state())));
  }

  getWords() {
    return this.http.get<{ civil: string, undercover: string }[]>('words.json');
  }

  getResumeRoute(): string {
    return `/game/${this.state().phase.toLowerCase()}`;
  }

  goToPhase(phase: GamePhase) {
    this.state.update(s => ({ ...s, phase }));
    this.router.navigate(['/game', phase.toLowerCase()]);
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

  private calculateRoles(total: number): Role[] {
    const mrWhite = total >= 3 ? 1 : 0;
    const undercover = total >= 5 ? Math.floor((total - 1) / 3) : 0;
    const civilians = total - mrWhite - undercover;

    return [
      ...Array(undercover).fill('UNDERCOVER'),
      ...Array(mrWhite).fill('MR_WHITE'),
      ...Array(civilians).fill('CIVILIAN')
    ].sort(() => Math.random() - 0.5);
  }

  startGame(cWord: string, uWord: string, names: string[]) {
    const uniqueNames = [...new Set(names)];
    if (uniqueNames.length < 3) return;

    const roles = this.calculateRoles(uniqueNames.length);
    const players: Player[] = uniqueNames.map((name, i) => ({
      id: crypto.randomUUID(),
      name: name.trim(),
      isAlive: true,
      role: roles[i],
      word: roles[i] === 'MR_WHITE' ? 'MR_WHITE' : (roles[i] === 'CIVILIAN' ? cWord : uWord)
    }));

    this.state.update(s => ({
      ...s,
      players,
      civilianWord: cWord,
      undercoverWord: uWord,
      currentPlayerIndex: 0,
      phase: 'REVEAL'
    }));
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
    this.router.navigate(['/']);
  }
}