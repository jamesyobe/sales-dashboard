import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';


import { AuthService } from '../../core/guards/auth.service';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    imports: [FormsModule, CommonModule, ReactiveFormsModule]
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  isLoggedIn = false;
  validLoginInfo = false;
  loginForm: FormGroup;


  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    effect(() =>{
      if(this.authService.loggedIn()){
        this.isLoggedIn = this.authService.loggedIn().status;
      }
    })
  }

  login() {
    // Perform authentication logic (replace with your actual authentication mechanism)
    if (this.authService.login(this.loginForm.value.username, this.loginForm.value.password)) {
      // If authentication is successful, navigate to the home page or desired route
      const navigationExtras: NavigationExtras = {
        queryParams: {
          isLoggedIn: true,
        }
      }
      this.validLoginInfo = false;
      this.router.navigate(['app/dashboard'], navigationExtras);
    } else {
      // If authentication fails, display an error or handle accordingly
      this.validLoginInfo = true;
    }
  }

  onRegisterClick(){
    this.router.navigate(['app/register']);
  }
}
