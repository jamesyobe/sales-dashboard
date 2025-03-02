import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { TrackingService } from '../tracking/tracking.service';
import { TrackedProduct } from '../tracking/tracking.interface';
import { imageSrc1, imageSrc2, imageSrc3,imageSrc4 } from './last-few-transactions.helpers';
@Component({
  selector: 'app-last-few-transactions',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.css']
})
export class LastFewTransactionsComponent {
 
  transactions= [
    {
      id: 1,
      title: "Ryzen 5 Processor",
      price: "$299",
      shop: "Tech Pro",
      location: "East Hartford",
      status: "Out for Delivery",
      imgSrc: imageSrc1,
      events : [
       
          {
            status: 'Ordered',
            date: '15/01/2025 10:30',
            icon: 'pi pi-shopping-cart',
            color: '#9C27B0',
            image: 'game-controller.jpg',
            notes: 'Order has been placed successfully and is awaiting processing.'
          },
          {
            status: 'Processing',
            date: '15/10/2020 14:00',
            icon: 'pi pi pi-spin pi-cog',
            color: '#673AB7',
            notes: 'Order is being prepared and packaged for shipment.'
          },
          {
            status: 'Shipped',
            date: '15/10/2020 16:15',
            icon: 'pi pi-truck',
            color: '#FF9800',
            notes: 'Order has been shipped and is in transit to the delivery location.'
          },
          {
            status: 'Out for Delivery',
            date: '16/10/2020 10:00',
            icon: 'pi pi-send',
            color: '#607D8B',
            notes: 'Order is out for delivery and will arrive shortly.'
          }
      
    ],
    } as TrackedProduct,
    {
      id: 2,
      title: "Denver Blackcode",
      price: "$7.89",
      shop: "Pick the best",
      location: "Miamisburg",
      status: "delivered",
      imgSrc:imageSrc2 ,
      events : [
        {
          status: 'Ordered',
          date: '15/01/2025 10:30',
          icon: 'pi pi-shopping-cart',
          color: '#9C27B0',
          image: 'game-controller.jpg',
          notes: 'Order has been successfully placed and is awaiting processing.'
        },
        {
          status: 'Processing',
          date: '15/10/2020 14:00',
          icon: 'pi pi-spin pi-cog',
          color: '#673AB7',
          notes: 'Order is currently being prepared for shipment. Stay tuned for updates.'
        },
        {
          status: 'Shipped',
          date: '15/10/2020 16:15',
          icon: 'pi pi-shopping-cart',
          color: '#FF9800',
          notes: 'Order has been shipped and is on its way to the delivery address.'
        },
        {
          status: 'Delivered',
          date: '16/10/2020 10:00',
          icon: 'pi pi-check',
          color: '#607D8B',
          notes: 'Order has been successfully delivered. Thank you for shopping with us!'
        }
      ]
    } as TrackedProduct,
    {
      id: 3,
      title: "Nike Shoes",
      price: "$69",
      shop: "Quality Leathers",
      location: "Phoenix",
      status: "shipped",
      imgSrc: imageSrc3,
      events :[
        {
          status: 'Ordered',
          date: '15/01/2025 10:30',
          icon: 'pi pi-shopping-cart',
          color: '#9C27B0',
          image: 'game-controller.jpg',
          notes: 'Order has been successfully placed and is awaiting processing.'
        },
        {
          status: 'Processing',
          date: '15/10/2020 14:00',
          icon: 'pi pi-spin pi-cog',
          color: '#673AB7',
          notes: 'Order is currently being processed and prepared for shipment.'
        },
        {
          status: 'Shipped',
          date: '15/10/2020 16:15',
          icon: 'pi pi-shopping-cart',
          color: '#FF9800',
          notes: 'Order has been shipped and is on its way to the delivery address.'
        }
      ],
    } as TrackedProduct,
    {
      id: 4,
      title: "Samsung  Smart TV",
      price: "$785.99",
      shop: "Best Buy",
      location: "Texas",
      status: "pending",
      imgSrc: imageSrc4,
      events : [
        {
          status: 'Ordered',
          date: '15/01/2025 10:30',
          icon: 'pi pi-shopping-cart',
          color: '#9C27B0',
          image: 'game-controller.jpg',
          notes: 'Order has been placed successfully and is awaiting further processing.'
        },
        {
          status: 'Pending',
          date: '15/10/2020 14:00',
          icon: 'pi pi-stopwatch',
          color: '#673AB7',
          notes: 'Order is currently pending and waiting for confirmation or further action.'
        }
      ],
    } as TrackedProduct
  ];
  constructor(private router: Router, private trackingService:TrackingService) { }
  onClick(product:TrackedProduct) {
    console.log(product);
    this.trackingService.setProduct(product)
    this.router.navigate([`app/tracking`]);
    }
}
