import { Component } from '@angular/core';
import {Cuenta} from "../../models/cuenta.model";
import {CuentaService} from "../../services/cuenta.service";
import {TransaccionService} from "../../services/transaccion.service";
import {CategoriaService} from "../../services/categoria.service";
import {Categoria} from "../../models/categoria.model";

@Component({
  selector: 'app-gestion-movimiento',
  templateUrl: './gestion-movimiento.component.html',
  styleUrls: ['./gestion-movimiento.component.css']
})
export class GestionMovimientoComponent {

  cuentasOrigen: Cuenta[] = [];
  categorias: Categoria[] = [];
  cuentaOrigen: Cuenta = {
    nombre: '',
    saldoInicial: 0,
  }
  selectCuentaOrigen: string = '';


  constructor(
    private cuentaService: CuentaService,
    private TransaccionService: TransaccionService,
    private CategoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.getCuentaByPersona();
  }
  getCuentaByPersona(){
    this.cuentaService.getCuentaByPersona().subscribe(
      res => {
        this.cuentasOrigen = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  getCategoriasByCuentaId(){
    this.CategoriaService.getCategoriasByCuentaId(this.selectCuentaOrigen).subscribe(
      res => {
        this.categorias = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
