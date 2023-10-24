import { Component } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Usuario} from "../../models/usuario.model";
import {Router} from "@angular/router";
import {Token} from "../../models/token.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuarioForm = new FormGroup(
    {
      susuario: new FormControl(''),
      spassword: new FormControl('')
    }
  )
  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) {
  }

  onLogin(): void {
    let usuario:Usuario = {
      correo: this.usuarioForm.value.susuario as string,
      contrasena: this.usuarioForm.value.spassword as string
    };
    console.log(this.usuarioForm.value.susuario);
    this.usuarioService.login(usuario).subscribe(
      res => {
        /*console.log(res);*/
        let token: Token = res;
        localStorage.setItem('token', token.jwt);
        this.router.navigate(['/inicio']);
      },
      err => {
        console.log(err);
      }
    );
    /*this.router.navigate(['/inicio']);*/
  }

}
