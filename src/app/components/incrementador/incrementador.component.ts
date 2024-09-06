import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent {
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
