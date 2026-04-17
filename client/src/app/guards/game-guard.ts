import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GameService } from '../services/game-service';

export const gameGuard: CanActivateFn = (route) => {
  const service = inject(GameService);
  const router = inject(Router);

  const currentPhase = service.currentPhase().toLowerCase();
  const targetPath = route.routeConfig?.path || '';

  if (targetPath !== currentPhase) {
    return router.createUrlTree([`/${currentPhase}`]);
  }

  return true;
};
