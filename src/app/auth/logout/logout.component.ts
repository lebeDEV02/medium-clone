import { LoginService } from './../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(private readonly loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.loginService.logout();
  }
}
