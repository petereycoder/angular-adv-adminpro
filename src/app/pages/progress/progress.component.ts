import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  progreso: number = 40;

  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number){
    if (this.progreso + valor <= 100 && this.progreso + valor >=0 ) {
      this.progreso += valor;
    }
  }
}
