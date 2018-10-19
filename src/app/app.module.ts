import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 // Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Servicios
import { ServiceModule } from './services/service.module';
import { CrearObservacionComponent } from './pages/observaciones-preventivas/crear-observacion.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CrearObservacionComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }