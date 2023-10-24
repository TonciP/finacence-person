import { Component } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuarioForm = new FormGroup(
    {
      correo: new FormControl(''),
      contrasena: new FormControl('')
    }
  )
  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) {
  }

  onRegistro(): void {
    let usuario = {
      correo: this.usuarioForm.value.correo as string,
      contrasena: this.usuarioForm.value.contrasena as string
    };
    this.usuarioService.register(usuario).subscribe(
      res => {
        /*console.log(res);*/
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
