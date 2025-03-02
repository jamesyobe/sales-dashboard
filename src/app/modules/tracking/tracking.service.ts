import { Injectable, signal } from '@angular/core';
import { TrackedProduct } from './tracking.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  trackedProduct = signal<TrackedProduct | null>(null);
  constructor() { }

  setProduct(product:TrackedProduct){
    this.trackedProduct.set(product);
  }
}
