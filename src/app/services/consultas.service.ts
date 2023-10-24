import { Injectable } from '@angular/core';
import {Transaccion} from "../models/transaccion.model";
import {HttpClient} from "@angular/common/http";
import {Result} from "../models/result.model";
import {Consulta} from "../models/consulta.model";
import {ConsultaTransferencia} from "../models/consulta-transferencia.model";
import {Transferencia} from "../models/transferencia.model";

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private domainConsult:String = 'https://localhost:7268/api/Consultas';
  constructor(
    private http: HttpClient
  ) { }
  getHistorialTransaccionesByCuenta(cuentaId: string ){
    return this.http.get<Transaccion[]>(`${this.domainConsult}/historialMovimientoTransaccion?CuentaId=${cuentaId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
  getHistorialTransaccionesByConsulta(consulta: Consulta){
    return this.http.get<Transaccion[]>(`${this.domainConsult}/historialMovimientoTransaccion?CuentaId=${consulta.cuentaId}&CategoriaId=${consulta.categoriaId}&FechaRegistro=${consulta.fechaRegistro}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
  getHistorialTransferenciasByConsulta(consulta: ConsultaTransferencia){
    return this.http.get<Transferencia[]>(`${this.domainConsult}/resumenFinanzas?CuentaOrigenId=${consulta.cuentaOrigenId}&CuentaDestinoId=${consulta.cuentaDestinoId}&FechaTransferencia=${consulta.fechaTransferencia}&Tipo=${consulta.tipo}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }

  getTotalSaldo(){
    return this.http.get<Result>(`${this.domainConsult}/saldoTotal`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
}
