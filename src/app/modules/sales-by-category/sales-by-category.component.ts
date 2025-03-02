import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.css'],
})
export class SalesByCategoryComponent implements OnInit {
  data: any;
  values: number[] = this.getDataArray();
  options: any;

  ngOnInit() {
    this.redraw();
    setInterval(() => {
      this.values = this.getDataArray();
      this.redraw();
    }, 18000); // 10 seconds (10000 milliseconds500)
  }
  redraw() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['Electronics', 'Groceries', 'Cosmetics', 'Shoes', 'Clothes'],
      datasets: [
        {
          data: this.values,
          backgroundColor: [
            '#044342',
            '#7e0505',
            '#ed9e20',
            '#6920fb',
            '#062184',
          ],
          hoverBackgroundColor: ['#E0EEEE'],
        },
      ],
    };

    this.options = {
      cutout: '30%',
      plugins: {
        title: {
          display: true,
          text: 'Category sales',
          color: 'black',
          font: {
            size: 19,
          },
        },
        legend: {
          labels: {
            font: {
              size: 18,
            },
            // boxWidth: 20, // Adjust this value to make the rectangle bigger
            // padding: 20,
            color: textColor,
          },
          position: 'bottom',
        },
      },
    };
  }
  getDataArray() {
    return [
      this.generateNumber(),
      this.generateNumber(),
      this.generateNumber(),
      this.generateNumber(),
      this.generateNumber(),
    ];
  }

  generateNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}

//   electronics: number = this.generateNumber()
//   groceries: number = this.generateNumber()
//   cosmetics: number = this.generateNumber()
//   shoes: number =this.generateNumber()
//   clothes: number = this.generateNumber()
//   state: WritableSignal<{
//     name: string;
//     y: number;
//     color: string;
// }[]> = signal<{
//   name: string;
//   y: number;
//   color: string;
// }[]>([
//   {
//     name: 'Electronics',
//     y: this.electronics,
//     color: '#044342',
//   },
//   {
//     name: 'Groceries',
//     y: this.groceries,
//     color: '#7e0505',
//   },
//   {
//     name: 'Cosmetics',
//     y: this.cosmetics,
//     color: '#ed9e20',
//   },
//   {
//     name: 'Shoes',
//     y: this.shoes,
//     color: '#6920fb',
//   },
//   {
//     name: 'Clothes',
//     y: this.clothes,
//     color: '#121212',
//   },
// ]);

// chartOptions: Highcharts.Options = {
//   chart: {
//     type: 'pie',
//     height: 325,
//   },
//   title: {
//     text: 'Category sales',
//   },
//   xAxis: {
//     categories: ['Electronics', 'Groceries', 'Cosmetics', 'Shoes', 'Clothes'],
//   },
//   yAxis: {
//     title: {
//       text: 'Revenue in %',
//     },
//   },
//   series: [{
//     type:'pie',
//     data: this.state(),
//   }],
//   credits: {
//     enabled: false,
//   },
// }

//   chart = new Chart(this.chartOptions);

// constructor(){

//   setInterval(() => {

//     this.getDataArray()
//   }, 5000); // 10 seconds (10000 milliseconds500
// }
//   generateNumber(): number{
//    return Math.floor(Math.random() * 100) + 1;
//   }
//   getDataArray() {
//     const stateY =  [
//       {
//         name: 'Electronics',
//         y: this.generateNumber(),
//         color: '#044342',
//       },
//       {
//         name: 'Groceries',
//         y: this.generateNumber(),
//         color: '#7e0505',
//       },
//       {
//         name: 'Cosmetics',
//         y: this.generateNumber(),
//         color: '#ed9e20',
//       },
//       {
//         name: 'Shoes',
//         y: this.generateNumber(),
//         color: '#6920fb',
//       },
//       {
//         name: 'Clothes',
//         y: this.generateNumber(),
//         color: '#121212',
//       },
//     ]
//     this.state.update((state) => ({
//       ...state,
//    ...stateY
//     }));

//     const chart = Highcharts.charts[0]; // Assuming you have only one chart
//     if (chart) {
//       // Make some changes to your chart data or configuration
//       // For example, change the data
//       chart.series[0].setData([
//         ['Category A', 30],
//         ['Category B', 40],
//         ['Category C', 50]
//       ]);
//   }
// }
