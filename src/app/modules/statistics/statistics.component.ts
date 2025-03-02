import { Component } from '@angular/core';
import { SalesByMonthComponent } from "../sales-by-month/sales-by-month.component";
@Component({
    selector: 'app-statistics',
    standalone: true,
    templateUrl: './statistics.component.html',
    styleUrl: './statistics.component.css',
    imports: [SalesByMonthComponent]
})
export class StatisticsComponent {

}
