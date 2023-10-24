import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistroComponent} from "./components/registro/registro.component";
import {LoginComponent} from "./components/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "./components/inicio/inicio.component";
import {GestionCuentaComponent} from "./components/gestion-cuenta/gestion-cuenta.component";
import {GestionMovimientoComponent} from "./components/gestion-movimiento/gestion-movimiento.component";
import {TransferenciaComponent} from "./components/transferencia/transferencia.component";
import {TransaccionComponent} from "./components/transaccion/transaccion.component";
import {
  CategorizacionMovimientoComponent
} from "./components/categorizacion-movimiento/categorizacion-movimiento.component";
import {ConsultasFiltroComponent} from "./components/consultas-filtro/consultas-filtro.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'gestion-cuenta', component: GestionCuentaComponent},
  { path: 'gestion-movimiento', component: GestionMovimientoComponent},
  { path: 'categorizacion-movimiento', component: CategorizacionMovimientoComponent},
  { path: 'consulta-filtro', component: ConsultasFiltroComponent},
  { path: 'transaccion', component: TransaccionComponent},
  { path: 'transferencia', component: TransferenciaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
