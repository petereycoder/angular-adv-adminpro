import { Component } from '@angular/core';
import { ActivationEnd, Event, Router, } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent {

  public titulo!: string;

  constructor( private router: Router){

    this.router.events
      .pipe(
        filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
        map( ( event: ActivationEnd ) => event.snapshot.data ),
      )
      .subscribe( ({ titulo }) => {
        this.titulo = titulo;
      });

  }
}
