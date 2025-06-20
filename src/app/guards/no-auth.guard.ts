import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private firebaseService: FirebaseService,
    private utilsService: UtilsService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    //verifica se tem usuário autenticado
    return this.firebaseService.getAuthState().pipe(
      map((auth) => {
        if (!auth) {
          return true;
        } else {
          //se nao existir usuário autenticado
          this.utilsService.routerLink('/tabs/home');
          return false;
        }
      })
    );
  }
}
