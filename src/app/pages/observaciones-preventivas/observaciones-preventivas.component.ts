import { Component, OnInit } from '@angular/core';
import { ObservacionesPreventivas } from '../../models/observaciones.model';
import { ObservacionesPreventivasService } from '../../services/service.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';

declare var swal: any;

@Component({
  selector: 'app-observaciones-preventivas',
  templateUrl: './observaciones-preventivas.component.html',
  styles: []
})
export class ObservacionesPreventivasComponent implements OnInit {

  observaciones: ObservacionesPreventivas[] = [];
  usuarios: Usuario[] = [];
  usuarioSeleccionado: any;
  observacion: ObservacionesPreventivas = new ObservacionesPreventivas('', '', '', '', '');
  cargando: boolean = true;
  totalRegistros: number = 0;
  totalUsuarios: number = 0;
  forma: FormGroup;
  desde: number = 0;
  fecha: number = Date.now();


  constructor(
    public _observacionesService: ObservacionesPreventivasService,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.cargarObservaciones();
    this.cargarUsuarios();

    this.forma = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      formulario: new FormControl(null, Validators.required),
      zona: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      repeticion: new FormControl(null, Validators.required)
    });

  }

  buscarObservacion( termino: string ) {
    if ( termino.length <= 0 ) {
      this.cargarObservaciones();
      return;
    }

    this.cargando = true;
    this._observacionesService.buscarObservacion( termino )
                        .subscribe( (observaciones: ObservacionesPreventivas[]) => {
                            this.observaciones = observaciones;
                            this.cargando = false;

    });
  }

  cambiarDesde( valor: number ) {
    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarObservaciones();
  }

  validarObservacion( observacion: ObservacionesPreventivas ) {
   // console.log('Tarea con id: ' + observacion._id + 'en zona: ' + observacion.zona + ' validada');
    this._observacionesService.validarObservacion( observacion )
                                .subscribe();
  }

  crearObservacion() {
    let valor = this.forma.value;
    this.observacion = new ObservacionesPreventivas(
      valor.usuario,
      valor.formulario,
      valor.fecha,
      valor.zona,
      valor.repeticion
    );

    this._observacionesService.crearObservacion( this.observacion )
                              .subscribe( (resp: any) => {
                                this.cargarObservaciones();
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

  cargarObservaciones() {
    this.cargando = true;
    this._observacionesService.cargarObservaciones( this.desde )
                        .subscribe( (resp: any) => {
                          this.totalRegistros = resp.total;
                          this.observaciones = resp.observaciones;
                          this.cargando = false;
                        });
  }

  borrarObservacion( observacion: ObservacionesPreventivas ) {

    swal({
      title: '¿Está seguro?',
      text: 'Está a punto de borrar una observación preventiva',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( borrar => {

      if (borrar) {
          this._observacionesService.borrarObservacion( observacion._id )
                              .subscribe( borrado => {
                                  console.log( borrado );
                                  this.cargarObservaciones();
                              });
      }
    });
  }

}
