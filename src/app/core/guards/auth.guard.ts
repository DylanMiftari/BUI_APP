import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { DataUserService } from '../services/data-user.service';
import { catchError, combineLatest, filter, map, of, take, timeout } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(DataUserService);
  const router = inject(Router);

  return combineLatest([
    userService.user$,
    userService.loading$
  ]).pipe(
    filter(([user, loading]) => !loading),
    take(1),
    timeout(10000),
    map(([user, loading]) => {
      if(user !== null) {
        return true;
      } else {
        router.navigate(["/login"]);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(["/login"]);
      return of(false);
    })
  );

};

export const authGuardChild: CanActivateChildFn = (route, state) => {
  // On réutilise la même logique que authGuard
  return authGuard(route, state);
};