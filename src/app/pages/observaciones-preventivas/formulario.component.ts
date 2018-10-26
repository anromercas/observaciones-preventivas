import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  seleccionado: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  seleccion() {
    if (this.seleccion) {
      this.seleccionado = false;
    } else {
      this.seleccionado = true;
    }
    console.log(this.seleccionado);
    return this.seleccionado;
  }

}
