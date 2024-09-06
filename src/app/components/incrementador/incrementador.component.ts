import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent {
  @Input('valor') progreso: number = 40; //Se renombra el argumento
  //@Input() progreso: number = 40; Puede recibir una propiedad desde el padre

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();  //Como se fuera disparar un evento

  cambiarValor(valor: number){
    if (this.progreso + valor <= 100 && this.progreso + valor >=0 ) {
      this.progreso += valor;
      this.valorSalida.emit(this.progreso);
    }
  }
}
