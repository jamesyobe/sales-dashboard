import { Component } from '@angular/core';
import { TrackingService } from './tracking.service';
import { NgIf } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-tracking',
  imports: [NgIf,TimelineModule,CardModule,ButtonModule],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent {
/**
 *
 */
constructor(protected trackingService:TrackingService) {

  
}
}
