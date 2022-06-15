import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './auth/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.loginService.checkIsUserAuthorized();
  }
  
  constructor(private readonly loginService: LoginService){
    
  }
}
