import { Component } from '@angular/core';
import { LastFewTransactionsComponent } from "../last-few-transactions/last-few-transactions.component";
import { TopThreeProductsComponent } from "../top-three-products/top-three-products.component";
import { NgFor } from '@angular/common';
import {ProductHelpers } from './products.helpers';
@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [LastFewTransactionsComponent, TopThreeProductsComponent, NgFor,]
})
export class ProductsComponent {
 
    products = ProductHelpers.products;
}
