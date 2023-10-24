import { Component } from '@angular/core';
import {CategoriaService} from "../../services/categoria.service";
import {Cuenta} from "../../models/cuenta.model";
import {CuentaService} from "../../services/cuenta.service";
import {Categoria} from "../../models/categoria.model";
import {FormControl, FormGroup} from "@angular/forms";
import {TransaccionService} from "../../services/transaccion.service";
import {Transaccion} from "../../models/transaccion.model";

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent {
  cuentas: Cuenta[] = [];
  categorias:Categoria[] = [];
  seleccionado: string = '';
  categoriaId?: string;

  transaccionForm = new FormGroup(
    {
      monto: new FormControl(0),
      descripcion: new FormControl(''),
      cuentaId: new FormControl(''),
      categoriaId: new FormControl(''),
      tipo: new FormControl(''),
      estado: new FormControl(''),
    }
  )

  constructor(
    private categoriaService: CategoriaService,
    private cuentaService: CuentaService,
    private transaccionService: TransaccionService
  ) {
  }

  ngOnInit(): void {
    this.cuentaService.getCuentaByPersona().subscribe(
      res => {
        this.cuentas = res;
        console.log(this.cuentas);
      },
      err => {
        console.log(err);
      }
    );
  }
  onTransaccion(){
    if(this.transaccionForm.value.cuentaId === '')
      return;
    if(this.transaccionForm.value.categoriaId === '')
      return;

    let transacion: Transaccion = {
      monto: this.transaccionForm.value.monto as number,
      descripcion: this.transaccionForm.value.descripcion as string,
      cuentaId: this.transaccionForm.value.cuentaId as string,
      categoriaId: this.transaccionForm.value.categoriaId as string,
      tipo: Number(this.transaccionForm.value.tipo),
      estado: Number(this.transaccionForm.value.estado),
    }
    this.transaccionService.crearTransaccion(transacion).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
  onChange(){
    this.categoriaService.getCategoriasByCuentaId(this.seleccionado).subscribe(
      res => {
        this.categorias = res;
        /*console.log(this.categorias);*/
      },
      err => {
        console.log(err);
      }
    );
  }
}
