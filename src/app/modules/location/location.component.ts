import { AfterViewInit, Component } from '@angular/core';

import L, * as Leaflet from 'leaflet';
import { locations } from './location.helpers';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent implements AfterViewInit {

  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }
  private initMap(): void {
    if (this.map) {
      this.map.remove(); // Remove the existing map instance before creating a new one
    }

    this.map = L.map('location-map', {
      center: [ 6.5244, 3.3792], // Centered around Nigeria
      zoom: 3,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    // Add multiple markers with unique icons
    locations.forEach((location) => {
      const customIcon = L.icon({
        iconUrl: location.iconUrl, // Load icon dynamically from array
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });
      L.marker([location.lat, location.lng], { icon: customIcon })
        .bindPopup(`<b>${location.name}</b>`)
        .addTo(this.map);
    });
  }
  
}
