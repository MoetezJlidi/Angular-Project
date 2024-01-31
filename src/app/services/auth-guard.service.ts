import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Assurez-vous d'importer le service AuthService

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuthenticated()) {
        return true; // L'utilisateur est authentifié, permet la navigation
      } else {
        this.router.navigate(['/auth']); // Redirige l'utilisateur vers la page d'authentification
        return false; // Bloque la navigation
      }
    }
}
