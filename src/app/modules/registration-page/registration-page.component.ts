import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
// import { LocalStorageService } from 'src/app/core/guards/local-storage.service';
import { User } from '../user/user.interface';
import { LocalStorageService } from '../../core/guards/local-storage.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,InputTextModule,ButtonModule],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required])
  },  { validators: [this.matchingFieldsValidator('password', 'confirmPassword'), this.matchingFieldsValidator('email', 'confirmEmail')] });
    
  get f(){
    return this.form.controls;
  }
    
  submit(){
    // this.localStorageService.clear()
    const key = `${this.form.value.username}${this.form.value.password}`
    this.localStorageService.setItem(key, JSON.stringify(this.form.value as User));
    this.router.navigate(['app/login']);
   }

  matchingFieldsValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const controlToCompare = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);
  
      if (!controlToCompare || !matchingControl) {
        console.error('Form controls can not be found in the form group.');
        return { controlNotFound: true };
      }
  
      if (matchingControl.errors && !matchingControl.errors['matchingFields']) {
        // return if another validator has already found an error on the matchingControl
        return null;
      }
  
      // Set or clear the matching error
      if (controlToCompare.value !== matchingControl.value) {
        matchingControl.setErrors({ matchingFields: true });
      } else {
        const errors = matchingControl.errors;
        if (errors) {
          delete errors['matchingFields'];
          matchingControl.setErrors(Object.keys(errors).length ? errors : null);
        }
      }
  
      return null;
    };
  }
}
