import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  userDataControl = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private readonly loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.loginService.login(this.userDataControl.value.login, this.userDataControl.value.password);
  }
}
