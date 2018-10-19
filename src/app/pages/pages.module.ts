import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

// Pipes Module
import { PipesModule } from '../pipes/pipes.module';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { SdrComponent } from './sdr/sdr.component';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { ObservacionesPreventivasComponent } from './observaciones-preventivas/observaciones-preventivas.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { MisObservacionesComponent } from './observaciones-preventivas/mis-observaciones.component';
import { ObservacionComponent } from './observaciones-preventivas/observacion.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        SdrComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent,
        ObservacionesPreventivasComponent,
        MisObservacionesComponent,
        Graficas1Component,
        GraficoDonaComponent,
        ObservacionComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        SdrComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule,
        CommonModule,
        ReactiveFormsModule,
        NgSelectModule,
        ChartsModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es' }
    ]
})

export class PagesModule { }
