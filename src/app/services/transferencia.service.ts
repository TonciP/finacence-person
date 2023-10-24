import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transferencia} from "../models/transferencia.model";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private domain:String = 'https://localhost:7268/api/Transferencia';
  constructor(
    private http: HttpClient
  ) { }

  crearTransferencia(transferencia: Transferencia){
    return this.http.post<Transferencia>(`${this.domain}`, transferencia,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  }
  eliminarTransferencia(id: string){
    return this.http.delete(`${this.domain}/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  }
}
