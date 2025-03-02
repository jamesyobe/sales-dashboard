import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  standalone: true,
  imports: [CommonModule,ChartModule],
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.css'],
})
export class SalesByMonthComponent {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Monthly Sales',
      style: {
        fontSize: '18px', // Increase title size
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      labels: {
        style: {
          fontSize: '14px', // Increase X-axis labels size
          // fontWeight: 'bold'
        }
      },
      title: {
        text: 'Months',
        style: {
          fontSize: '16px', // Increase X-axis title size
          fontWeight: 'bold'
        }
      }
    },
    yAxis: {
      labels: {
        style: {
          fontSize: '14px', // Increase Y-axis labels size
          // fontWeight: 'bold'
        }
      },
      title: {
        text: 'Revenue in $',
        style: {
          fontSize: '16px', // Increase Y-axis title size
          fontWeight: 'bold'
        }
      }
    },
    series: [
      {
        name: "Arizona",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Texas',
        type: 'line',
        color: '#7e0505',
        data: [47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159]
      },
      {
        name: 'Ohio',
        type: 'line',
        color: '#ed9e20',
        data: [17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59]
      },
    ],
    legend: {
      itemStyle: {
        fontSize: '16px', // Increase legend text size
        fontWeight: 'bold',
        color: '#000'
      },
      symbolWidth: 20,
      symbolHeight: 20,
      itemMarginTop: 10,
    },
    credits: {
      enabled: false
    }
});


}