import { LoginService } from './../../auth/services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {


  public isUserLoggedIn;

  constructor(private readonly loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.checkIsUserAuthorized();
    this.loginService.isUserLoggedIn.subscribe(response => {this.isUserLoggedIn = response})
  }

}
