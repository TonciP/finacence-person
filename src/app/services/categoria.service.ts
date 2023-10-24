import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categoria} from "../models/categoria.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private domain:String = 'https://localhost:7268/api/Categoria';
  constructor(
    private http: HttpClient
  ) { }
  crearCategoria(categoria: Categoria) {
    return this.http.post(`${this.domain}`, categoria,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
  actualizarCategoria(categoria: Categoria) {
    return this.http.put(`${this.domain}`, categoria,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
  getCategoriasByCuentaId(cuentaId: string){
    return this.http.get<Categoria[]>(`${this.domain}/Cuenta/${cuentaId}`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
  getCategoriasByPersonaId(){
    return this.http.get<Categoria[]>(`${this.domain}/GetCategoriaByPersona`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  }
}
