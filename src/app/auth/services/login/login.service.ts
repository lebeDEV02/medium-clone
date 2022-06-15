import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService{

  public isUserLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly httpService: HttpClient,
    private readonly router: Router
  ) {}

  login(login: string, password: string) {
    let didUserFind: Array<string>;
    this.httpService
      .get('http://localhost:3000/usersCredentials')
      .subscribe((res) => {
        didUserFind = Object.values(res).filter(
          (user) => user['username'] === login && user['password'] === password
        );

        if (didUserFind.length) {
          localStorage.setItem('login-credential', Date.now().toString());
          this.router.navigate(['/']);
          this.isUserLoggedIn.next(true);
        }
      });
  }



  checkIsUserAuthorized():boolean{

    if(localStorage.getItem('login-credential')){
      this.isUserLoggedIn.next(true)
    }

    if (this.isUserLoggedIn.value) {
      return true;
    }

    return false;
  }

  logout(): void{
    localStorage.removeItem('login-credential')
    this.router.navigate(['/'])
    this.isUserLoggedIn.next(false);
  }
}
