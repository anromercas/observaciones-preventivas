import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SdrComponent } from './sdr/sdr.component';
import { LoginGuard } from '../services/guards/login.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ObservacionesPreventivasComponent } from './observaciones-preventivas/observaciones-preventivas.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { MisObservacionesComponent } from './observaciones-preventivas/mis-observaciones.component';
import { ObservacionComponent } from './observaciones-preventivas/observacion.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Tablero' } },
            { path: 'sdr', component: SdrComponent, data: { titulo: 'Situaciones de Riesgo' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
            // Mantenimiento
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            { path: 'observaciones', component: ObservacionesPreventivasComponent, data: { titulo: 'Observaciones Preventivas' } },
            { path: 'mis-observaciones', component: MisObservacionesComponent, data: { titulo: 'Mis Observaciones Preventivas' } },
            { path: 'observacion/:id', component: ObservacionComponent, data: { titulo: 'Actualizar Observación Preventiva' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
