import { Component, effect } from '@angular/core';
import { User } from '../user/user.interface';

import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/guards/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user:User = {};
  faPerson = faPerson;
  constructor( private authService: AuthService) {
    effect(() =>{
      if(this.authService.loggedIn()){
               this.user = authService.loggedIn().user;
               console.log(this.user)
      }
    })
   }
}
