import { Component, Input } from '@angular/core';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as Leaflet from 'leaflet';
@Component({
  selector: 'app-map',
  standalone: true,
  // imports: [LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
	@Input()  options: Leaflet.MapOptions = {};
}
