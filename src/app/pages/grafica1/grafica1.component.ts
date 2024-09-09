import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {
// Doughnut
public doughnutChartLabels: string[] = [
  'Download Sales',
  'In-Store Sales',
  'Mail-Order Sales',
];
public doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    {
      data: [350, 450, 100],
      backgroundColor: ['#6857E6','#009FEE','#F02059']
    },
  ],
};
public doughnutChartType: ChartType = 'doughnut';
}
