import { Component } from '@angular/core';
import {CuentaService} from "../../services/cuenta.service";
import {Cuenta} from "../../models/cuenta.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-gestion-cuenta',
  templateUrl: './gestion-cuenta.component.html',
  styleUrls: ['./gestion-cuenta.component.css']
})
export class GestionCuentaComponent {

  cuentas: Cuenta[] = [];
  cuenta: Cuenta = {
    id: '',
    nombre: '',
    saldoInicial: 0,
    personaId: ''
  };
  guardar: boolean = false;
  cuentaSaveForm = new FormGroup(
    {
      nombre: new FormControl('', [Validators.required]),
      saldoInicial: new FormControl(0, [Validators.required]),
    }
  )
  cuentaUpdateForm = new FormGroup(
    {
      nombre: new FormControl(''),
      saldoInicial: new FormControl(0),
    }
  )
  constructor(
    private cunetaService: CuentaService,
  ) { }

  ngOnInit(){
    this.getCuentaByPersona();
  }
  getCuentaByPersona(){
    this.cunetaService.getCuentaByPersona().subscribe(
      res => {
        this.cuentas = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  asignarDatoCuenta(cuenta: Cuenta){
    this.cuenta = cuenta;
    /*this.construirHistorialFinanzas(cuenta.id);*/
  }
  guardarCuenta(){
    if(this.cuentaSaveForm.value.nombre === '')
      return;
    if(this.cuentaSaveForm.value.saldoInicial === 0)
      return;

    let cuentaCreate: Cuenta = {
      nombre: this.cuentaSaveForm.value.nombre as string,
      saldoInicial: this.cuentaSaveForm.value.saldoInicial as number,
    }
    console.log(cuentaCreate);
    this.cunetaService.CrearCuentaPersona(cuentaCreate).subscribe(
      res => {
        //console.log(res);
        this.getCuentaByPersona();
      },
      err => {

      });
  }
  actulizarCuenta(){
    if(this.cuentaUpdateForm.value.nombre === '')
      this.cuentaUpdateForm.controls['nombre'].setValue(this.cuenta.nombre);
    if(this.cuentaUpdateForm.value.saldoInicial === 0)
      this.cuentaUpdateForm.controls['saldoInicial'].setValue(this.cuenta.saldoInicial);

    let cuentaCreate: Cuenta = {
      id: this.cuenta.id,
      nombre: this.cuentaUpdateForm.value.nombre as string,
      saldoInicial: this.cuentaUpdateForm.value.saldoInicial as number,
    }
    console.log(cuentaCreate);
    this.cunetaService.actualizarCuenta(cuentaCreate).subscribe(
      res => {
        this.getCuentaByPersona();
      },
      err => {

      });
  }
}
