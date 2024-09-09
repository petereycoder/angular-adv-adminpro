import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {
  public labels1: string [] = ['Botanas', 'Tacos', 'Refrescos'];
   data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: [15, 50, 10],
        backgroundColor: ['#6857E6','#009FEE','#F02059']
      },
    ],
  };
}
