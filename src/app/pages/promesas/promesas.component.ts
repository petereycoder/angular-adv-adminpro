import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {

    const promesa = new Promise( (resolve, reject) => {
      if(false){
        resolve('Hola mundo');
      }else{
        reject('Algo salió mal');
      }
    });

    promesa.then((mensaje) => {
      console.log(mensaje);
    })
    .catch( error => console.log('Error en mi promesa', error));

    console.log('Fin del init');

  }

}
