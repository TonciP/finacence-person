import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../models/usuario.model";
import {Token} from "../models/token.model";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private domain:String = 'https://localhost:7268/api/Persona';
  constructor(
    private http: HttpClient
  ) { }

  login(usuario: Usuario) {
    return this.http.post<Token>(`${this.domain}/login`,usuario);
  }
  register(usuario: Usuario) {
    return this.http.post(`${this.domain}`, usuario);
  }
}
