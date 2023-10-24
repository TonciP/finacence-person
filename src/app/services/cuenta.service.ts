import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cuenta} from "../models/cuenta.model";

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private domain: String = 'https://localhost:7268/api/Cuenta';

  constructor(
    private http: HttpClient
  ) {
  }

  crearCuenta(cuenta: Cuenta) {
    return this.http.post(`${this.domain}`, cuenta, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
  actualizarCuenta(cuenta: Cuenta) {
    return this.http.put(`${this.domain}`, cuenta, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }

  CrearCuentaPersona(cuenta: Cuenta) {
    return this.http.post(`${this.domain}/CrearCuentaPersona`, cuenta, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }

  getCuentaByPersona(){
    return this.http.get<Cuenta[]>(`${this.domain}/Persona`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
}

