export type Role = 'CIVILIAN' | 'UNDERCOVER' | 'MR_WHITE';

export type GamePhase = 'SETUP' | 'REVEAL' | 'PLAY' | 'RESULTS';

export interface Player {
    id: string;
    name: string;
    role?: Role;
    word?: string;
    isAlive: boolean;
}

export interface GameState {
    players: Player[];
    phase: GamePhase;
    civilianWord: string;
    undercoverWord: string;
    currentPlayerIndex: number;
}