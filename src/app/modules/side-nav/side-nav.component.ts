import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {faDashboard, faLocation, faShop, faBox, faMoneyBill,faChartBar, faContactBook, faHand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  faDashboard= faDashboard;
  faLocation = faLocation;
  faShop= faShop;
  faBox =faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar
  faContactBook = faContactBook;
  faHand =faHand;
  @Input() isLoggedIn = false;
  constructor(private router: Router) {}
  onNavigateClick(route:string){
    this.router.navigate([`app/${route}`]);
  }
}
