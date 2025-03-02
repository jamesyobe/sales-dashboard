import { Component, computed, Signal } from '@angular/core';
import { AuthService } from './core/guards/auth.service';
import { HeaderComponent } from "./modules/header/header.component";
import { SideNavComponent } from './modules/side-nav/side-nav.component';
import { TopWidgetsComponent } from './modules/top-widgets/top-widgets.component';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, HighchartsChartModule, HeaderComponent, SideNavComponent, TopWidgetsComponent]
})
export class AppComponent {
title = 'sales-dashboard-app';
isLoggedIn = false;
$isLoggedIn: Signal<boolean> = computed(() => this.authService.loggedIn().status);
constructor(public authService: AuthService){

}
}
