import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartModule } from 'angular-highcharts';
@Component({
  selector: 'app-top-three-products',
  standalone: true,
  imports: [CommonModule,ChartModule],
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.css']
})
export class TopThreeProductsComponent {
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 300
    },
    title: {
      text: 'Top 3 Products',
      style: {
        fontSize: '18px', // Increase title size
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: [
        'Lenovo Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodorant',
      ],
      labels: {
        style: {
          fontSize: '14px', // Increase X-axis label size
          fontWeight: 'bold'
        }
      },
      title: {
        text: 'Products',
        style: {
          fontSize: '16px', // Increase X-axis title size
          // fontWeight: 'bold'
        }
      }
    },
    yAxis: {
      labels: {
        style: {
          fontSize: '14px', // Increase Y-axis label size
          // fontWeight: 'bold'
        }
      },
      title: {
        text: 'Sales',
        style: {
          fontSize: '16px', // Increase Y-axis title size
          fontWeight: 'bold'
        }
      }
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'Lenovo Thinkpad E15',
            y: 395,
            color: '#044342',
          },
          {
            name: 'Nectar Orange Juice',
            y: 385,
            color: '#7e0505',
          },
          {
            name: 'Axe Deodorant',
            y: 275,
            color: '#ed9e20',
          },
        ]
      }
    ],
    legend: {
      itemStyle: {
        fontSize: '16px', // Increase legend text size
        fontWeight: 'bold'
      }
    },
    credits: {
      enabled: false
    }
});

}
