import {ActivatedRoute, CanActivateChildFn, ParamMap, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CasinoClientService} from "../../features/casino/services/casino-client-service";
import {catchError, map, of} from "rxjs";

export const casinoTicketGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const casinoService = inject(CasinoClientService);

  let casinoId: number = +childRoute.paramMap.get("casinoId")!;
  return casinoService.hasTicket(casinoId).pipe(
    map(() => {
      return true;
    }),
    catchError((error) => {
      router.navigate(['/casino', casinoId]);
      return of(false);
    })
  );
};
