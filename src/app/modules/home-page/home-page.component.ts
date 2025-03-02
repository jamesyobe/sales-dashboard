import { Component, OnInit } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({

    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule, MainComponent],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    
})
export class HomePageComponent implements OnInit{
     isLoggedIn: boolean = false;
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // Subscribe to the queryParams Observable
        this.route.queryParams.subscribe(params => {
          // Retrieve the userId parameter from the URL
          this.isLoggedIn = params['isLoggedIn'];
          
          // You can now use this.userId in your component
          console.log('isLoggedIn:', this.isLoggedIn);
        });
      }
}
