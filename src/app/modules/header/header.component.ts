import { Component, Input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { User } from '../user/user.interface';
import { AuthService } from '../../core/guards/auth.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { color } from 'highcharts';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MenuModule,
    ToastModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() isLoggedIn: boolean = false;
  user: User = {};

  itemsLogout= [
    {
      label: 'Account',
      icon: 'pi pi-user',
      command: () => {
        this.onAccountCLick();
      }
    },
    {
      label: 'Help',
      icon: 'pi pi-question-circle',
      command: () => {
        this. onHelpCLick();
      }
    },
    {
      label: 'Login',
      icon: 'pi pi-sign-out',
      command: () => {
        this. onLoginCLick();
      }
    },
    {
      label: 'Register',
      icon: 'pi pi-lock-open',
      command: () => {
        this. onRegisterCLick();
      }
    },
  ];
  itemsLogin= [
    {
      label: 'Account',
      icon: 'pi pi-user',
      command: () => {
        this.onAccountCLick();
      }
    },
    {
      label: 'Help',
      icon: 'pi pi-question-circle',
      command: () => {
        this. onHelpCLick();
      }
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => {
        this.onLogoutCLick();
      }
    },
  ];
  
  constructor(private router: Router, private authService: AuthService) {
    effect(() => {
      if (this.authService.loggedIn()) {
        this.isLoggedIn = this.authService.loggedIn().status;
        this.user = authService.loggedIn().user;
      }
    });
  }
  onHelpCLick() {
    this.router.navigate(['app/help']);
  }
  onLoginCLick() {
    this.router.navigate(['app/login']);
  }
  onLogoutCLick() {
    this.authService.login(null, null);
    this.router.navigate(['app/login']);
  }

  onRegisterCLick() {
    this.router.navigate(['app/register']);
  }

  onAccountCLick() {
    this.router.navigate(['app/user-profile']);
  }
  getInitials() {
    return `${this.user?.firstName?.substring(
      0,
      1
    )} ${this.user?.lastName?.substring(0, 1)}`;
  }
}
