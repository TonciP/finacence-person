import { Component } from '@angular/core';
import {CuentaService} from "../../services/cuenta.service";
import {Cuenta} from "../../models/cuenta.model";
import {Transaccion} from "../../models/transaccion.model";
import {TransaccionService} from "../../services/transaccion.service";
import {ConsultasService} from "../../services/consultas.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  cuentas: Cuenta[] = [];
  transacciones: Transaccion[] = [];
  saldoTotal: number = 0;
  // @ts-ignore
  cuenta: Cuenta;
  constructor(
    private cuentaService: CuentaService,
    private consultaService: ConsultasService
  ) {
  }
  ngOnInit(): void {
    this.cuentaService.getCuentaByPersona().subscribe(
      res => {
        this.cuentas = res;
        /*console.log(this.cuentas);*/
      },
      err => {
        console.log(err);
      }
    );
    this.consultaService.getTotalSaldo().subscribe(
      res => {
        this.saldoTotal = Number(res.value);
      },
      err => {
        console.log(err);
      });
  }
  asignarDatoCuenta(cuenta: Cuenta){
    this.cuenta = cuenta;
    // @ts-ignore
    this.construirHistorialFinanzas(cuenta.id);
  }
  construirHistorialFinanzas(cuentaId: string){
    this.consultaService.getHistorialTransaccionesByCuenta(cuentaId).subscribe(
      res => {
        this.transacciones = res;
      },
      err => {
        console.log(err);
      });
  }
}
