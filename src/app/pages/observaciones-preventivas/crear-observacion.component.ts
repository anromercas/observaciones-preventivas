import { Component, OnInit } from '@angular/core';
import { ObservacionesPreventivasService, UsuarioService } from 'src/app/services/service.index';
import { ObservacionesPreventivas } from 'src/app/models/observaciones.model';


@Component({
  selector: 'app-crear-observacion',
  templateUrl: './crear-observacion.component.html',
  styles: []
})
export class CrearObservacionComponent implements OnInit {

  observacion: ObservacionesPreventivas = new ObservacionesPreventivas('', '', '', '', '', '');

  constructor(
    public _observacionesService: ObservacionesPreventivasService,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  cargarObservacion( id: string ) {
    this._observacionesService.obtenerObservacion(id).subscribe( (observacion: any) => {
      this.observacion = observacion;

    });
  }

}
