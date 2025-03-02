import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBoxes, faLocation, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  constructor(private router: Router) { }
  faLocation = faLocation;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faShop = faShop
  generatedProductSold: number = 1233;
  generatedRevenue: number = 1233 * 12.98;
  ngOnInit(): void {
    setInterval(() => {
      const numberOfItems = Math.floor(Math.random() * 100) + 1;
      this.generatedProductSold += numberOfItems;
      this.generatedRevenue += numberOfItems * 12.98
    }, 5000); // 10 seconds (10000 milliseconds)
  }
  OnNavigateClick(path: string) {
    this.router.navigate([`app/${path}`]);
  }
}
