import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// componentes
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NofoundpageComponent } from './nofoundpage/nofoundpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BarraAccionesComponent } from './barra-acciones/barra-acciones.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipesModule
    ],
    declarations: [
       BreadcrumbsComponent,
       HeaderComponent,
       NofoundpageComponent,
       SidebarComponent,
       BarraAccionesComponent
    ],
    exports: [
       BreadcrumbsComponent,
       HeaderComponent,
       NofoundpageComponent,
       SidebarComponent,
       BarraAccionesComponent
    ]
})

export class SharedModule { }
