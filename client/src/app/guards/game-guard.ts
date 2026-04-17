import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GameService } from '../services/game-service';

export const gameGuard: CanActivateFn = (route, state) => {
  const service = inject(GameService);
  const router = inject(Router);

  const currentPhase = service.currentPhase().toLowerCase();

  const targetSegment = state.url.split('/').pop()?.toLowerCase();

  if (targetSegment !== currentPhase) {
    return router.createUrlTree(['/game', currentPhase]);
  }

  return true;
};
