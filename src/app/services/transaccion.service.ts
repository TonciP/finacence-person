import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transaccion} from "../models/transaccion.model";

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private domain:String = 'https://localhost:7268/api/Transaccion';

  constructor(
    private http: HttpClient
  ) { }

  crearTransaccion(transaccion: Transaccion){
    return this.http.post<Transaccion>(`${this.domain}`, transaccion,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
  eliminarTransaccion(id: string){
    return this.http.delete(`${this.domain}/${id}`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }

}
