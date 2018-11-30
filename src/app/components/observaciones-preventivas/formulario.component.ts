import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  seleccionado: boolean[] = [false, false, false, false, false, false, false, false, false, false];
  epis: boolean[] = [false, false, false, false, false, false, false, false, false];
  avatar: boolean[] = [false, false, false, false, false, false, false, false, false];

  esAdmin: boolean;
  usuario: Usuario;
  clase: string = 'single-column';

  config: any = {
    'fade': true,
    'alwaysOn': true,
    'neverOn': false,
    'fill': true,
    'fillColor': '#ffffff',
    'fillOpacity': 0.4,
    'stroke': true,
    'strokeColor': '#4d0ec0',
    'strokeOpacity': 1,
    'strokeWidth': 1,
    'shadow': true,
    'shadowColor': '#000000',
    'shadowOpacity': 0.8,
    'shadowRadius': 10
  };


  constructor() { }

  ngOnInit() {
    this.usuario = JSON.parse( localStorage.getItem('usuario') );
    // javascript nativo para que borre el estilo que hace que no tenga menú lateral la aplicación
    if ( this.usuario.role === 'ADMIN_ROLE') {
      $('body').addClass(this.clase);
      this.esAdmin = true;
    } else {
      $('body').removeClass(this.clase);
      this.esAdmin = false;
    }
  }

}
