import { Component, OnInit } from '@angular/core';
import { ObservacionesPreventivasService, UsuarioService } from 'src/app/services/service.index';
import { ObservacionesPreventivas } from 'src/app/models/observaciones.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-observacion',
  templateUrl: './observacion.component.html',
  styles: []
})
export class ObservacionComponent implements OnInit {

  observacion: ObservacionesPreventivas = new ObservacionesPreventivas('', '', '', '', '', '');

  forma: FormGroup;
  fechaHoy: string = new Date().toISOString();
  usuarios: Usuario[] = [];
  usuarioSeleccionado: any;
  totalUsuarios: number = 0;
  desde: number = 0;
  id: string;

  constructor(
    public _observacionesService: ObservacionesPreventivasService,
    public _usuarioService: UsuarioService,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      if (this.id !== 'nuevo') {
        this.cargarObservacion(this.id);
      }
    });
   }

  ngOnInit() {

    this.cargarUsuarios();

    this.forma = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      formulario: new FormControl(null, Validators.required),
      zona: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      repeticion: new FormControl(null, Validators.required)
    });

  }

  crearObservacion() {
    let valor = this.forma.value;
    this.observacion = new ObservacionesPreventivas(
      this.fechaHoy,
      valor.usuario,
      valor.formulario,
      valor.fecha,
      valor.zona,
      valor.repeticion
    );

    this._observacionesService.crearObservacion( this.observacion )
                              .subscribe( (resp: any) => {
                                console.log(resp);
                              });
  }

  cargarUsuarios() {
    this._usuarioService.cargarUsuarios( this.desde )
                        .subscribe( (resp: any) => {
                          this.totalUsuarios = resp.total;
                          this.usuarios = resp.usuarios;
                        });
  }

  guardarObservacion( observacion: ObservacionesPreventivas ) {
    this._observacionesService.actualizarObservacion( observacion )
                        .subscribe();
  }

  cargarObservacion( id: string ) {
    this._observacionesService.obtenerObservacion(id).subscribe( (observacion: any) => {
      this.observacion = observacion;
      this.forma.get('usuario').setValue(this.observacion.formulario);
      this.forma.get('formulario').setValue(this.observacion.formulario);
      this.forma.get('zona').setValue(this.observacion.zona);
      this.forma.get('fecha').setValue(this.observacion.fecha);
      this.forma.get('repeticion').setValue(this.observacion.repeticion);

    });
  }

}
