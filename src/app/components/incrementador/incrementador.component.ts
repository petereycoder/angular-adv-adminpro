import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent {
  //@Input('valor') progreso: number = 40; Se renombra el argumento
  @Input() progreso: number = 40; //Puede recibir una propiedad desde el padre

  cambiarValor(valor: number){
    if (this.progreso + valor <= 100 && this.progreso + valor >=0 ) {
      this.progreso += valor;
    }
  }
}
