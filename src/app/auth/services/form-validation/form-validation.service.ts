import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { 

  } 

  checkArePasswordsTheSame(password: string, repeatPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[repeatPassword];

      if(!passwordControl || !confirmPasswordControl){
        return null;
      }

      if(confirmPasswordControl.errors && !confirmPasswordControl.errors?.['passwordMismatch']){
        return null;
      }

      if(passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({passwordMismatch: true})
      }
    }
  }
}
