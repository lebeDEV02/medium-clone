import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Login submit success!!');
  }
}
