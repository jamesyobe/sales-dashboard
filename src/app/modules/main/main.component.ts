import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesByMonthComponent } from "../sales-by-month/sales-by-month.component";
import { SalesByCategoryComponent } from "../sales-by-category/sales-by-category.component";
import { TopThreeProductsComponent } from "../top-three-products/top-three-products.component";
import { LastFewTransactionsComponent } from "../last-few-transactions/last-few-transactions.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    imports: [CommonModule, SalesByMonthComponent, SalesByCategoryComponent, TopThreeProductsComponent, LastFewTransactionsComponent]
})
export class MainComponent {

}
