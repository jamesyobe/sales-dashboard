import { AfterViewInit, Component } from '@angular/core';

import L, * as Leaflet from 'leaflet';

import { shopLocations } from './shops.helpers';
@Component({
    selector: 'app-shops',
    standalone: true,
    templateUrl: './shops.component.html',
    styleUrl: './shops.component.css',
    imports: []
})
export class ShopsComponent implements AfterViewInit {
  private map: any;
  
  
  
    ngAfterViewInit(): void {
      this.initMap();
    }
    private initMap(): void {
      this.map = L.map('shops-map', {
        center: [ 6.5244, 3.3792], // Centered around Nigeria
        zoom: 3
      });
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
  
      // Add multiple markers with unique icons
      shopLocations.forEach(location => {
        const customIcon = L.icon({
          iconUrl: location.iconUrl,  // Load icon dynamically from array
          iconSize: [32, 32],
          iconAnchor: [16, 32]
        });
  
        L.marker([location.lat, location.lng], { icon: customIcon })
          .bindPopup(`<b>${location.name}</b>`)
          .addTo(this.map);
      });
    }
    
  }