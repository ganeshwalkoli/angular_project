import { Component } from '@angular/core';
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: 'app-angular-charts',
  templateUrl: './angular-charts.component.html',
  styleUrls: ['./angular-charts.component.css']
})
export class AngularChartsComponent {
  public chart: any;

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: '#155644'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: '#29ab87'
          }
        ]
      },
      options: {
        aspectRatio: 4
      }

    });
  }

  pieChartData: number[] = [15, 15, 30, 40];
  public pieChartLabels: string[] = [
    "5 - 10 Lakhs",
    "0 - 5 Lakhs",
    "5-10 Lakhs",
    "10 - 50 Lakhs",
  ];

  ngOnInit(): void {
    const pieChart = new Chart("pieChart", {
      type: "pie",
      plugins: [ChartDataLabels],
      data: {
        labels: this.pieChartLabels,
        datasets: [
          {
            data: this.pieChartData,
            backgroundColor: ["#29ab87", "#104436", "#196751", "#21896c"],
            borderColor: ["#29ab87", "#104436", "#196751", "#21896c"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
            position: "bottom",
          },
          datalabels: {
            color: ["#323232", "#FFFFFF", "#FFFFFF", "#323232"],

            formatter: function (value, context) {
              return context.chart.data.labels?.[context.dataIndex];
            },
            font: {
              weight: "bold",
              size: 9,
            },
          },
        },
      },
    });
    this.createChart();
  }
}
