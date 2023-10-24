import { Component } from '@angular/core';
import {TransferenciaService} from "../../services/transferencia.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CuentaService} from "../../services/cuenta.service";
import {CategoriaService} from "../../services/categoria.service";
import {Cuenta} from "../../models/cuenta.model";
import {Transferencia} from "../../models/transferencia.model";

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {

  transferenciaForm = new FormGroup(
    {
      cuentaOrigenId: new FormControl(''),
      cuentaDestinoId: new FormControl(''),
      monto: new FormControl(0),
      tipo: new FormControl(0),
      estado: new FormControl(0),
    }
  )
  seleccionado: string = '';
  cuentas: Cuenta[] = [];

  constructor(
    private transferenciaService: TransferenciaService,
    private cuentaService: CuentaService,
    private categoriaService: CategoriaService
  ) {
  }

  ngOnInit(): void {
    this.cuentaService.getCuentaByPersona().subscribe(
      res => {
        this.cuentas = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  onTransferencia(){
    if(this.transferenciaForm.value.cuentaOrigenId === '')
      return;
    if(this.transferenciaForm.value.cuentaDestinoId === '')
      return;
    if(this.transferenciaForm.value.monto === 0)
      return;

    let transferencia: Transferencia = {
      cuentaOrigenId: this.transferenciaForm.value.cuentaOrigenId as string,
      cuentaDestinoId: this.transferenciaForm.value.cuentaDestinoId as string,
      monto: this.transferenciaForm.value.monto as number,
      tipo: Number(this.transferenciaForm.value.tipo),
      estado: Number(this.transferenciaForm.value.estado),
    }
    this.transferenciaService.crearTransferencia(transferencia).subscribe(
      res => {
        console.log(res);
        this.clearForm();
      },
      err => {
        console.log(err);
      }
    );
  }
  clearForm(){
    this.transferenciaForm.reset();
  }
}
