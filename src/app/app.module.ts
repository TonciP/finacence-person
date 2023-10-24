import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { GestionCuentaComponent } from './components/gestion-cuenta/gestion-cuenta.component';
import { GestionMovimientoComponent } from './components/gestion-movimiento/gestion-movimiento.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { CategorizacionMovimientoComponent } from './components/categorizacion-movimiento/categorizacion-movimiento.component';
import { ConsultasFiltroComponent } from './components/consultas-filtro/consultas-filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    InicioComponent,
    GestionCuentaComponent,
    GestionMovimientoComponent,
    HeaderComponent,
    TransferenciaComponent,
    TransaccionComponent,
    CategorizacionMovimientoComponent,
    ConsultasFiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
