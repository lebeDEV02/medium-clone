import { FormValidationService } from '../services/form-validation/form-validation.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  userDataControl = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    passwordRepeat: ['', Validators.required]
  },
  {
    validator: this.formValidationService.checkArePasswordsTheSame('password', 'passwordRepeat')
  })

  constructor(private formBuilder: FormBuilder, private readonly alertService: TuiAlertService, private readonly formValidationService: FormValidationService) { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
