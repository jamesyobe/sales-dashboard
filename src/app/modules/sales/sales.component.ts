import { Component } from '@angular/core';
import { SalesByMonthComponent } from "../sales-by-month/sales-by-month.component";
import { SalesByCategoryComponent } from "../sales-by-category/sales-by-category.component";

@Component({
    selector: 'app-sales',
    standalone: true,
    templateUrl: './sales.component.html',
    styleUrl: './sales.component.css',
    imports: [SalesByMonthComponent, SalesByCategoryComponent]
})
export class SalesComponent {

}
