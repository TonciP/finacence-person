import { Component } from '@angular/core';
import {Transaccion} from "../../models/transaccion.model";
import {CuentaService} from "../../services/cuenta.service";
import {Cuenta} from "../../models/cuenta.model";
import {CategoriaService} from "../../services/categoria.service";
import {Categoria} from "../../models/categoria.model";
import {ConsultasService} from "../../services/consultas.service";
import {Consulta} from "../../models/consulta.model";
import {Transferencia} from "../../models/transferencia.model";
import {ConsultaTransferencia} from "../../models/consulta-transferencia.model";

@Component({
  selector: 'app-consultas-filtro',
  templateUrl: './consultas-filtro.component.html',
  styleUrls: ['./consultas-filtro.component.css']
})
export class ConsultasFiltroComponent {

  transacciones: Transaccion[] = [];
  transferencia: Transferencia[] = [];
  cuentas: Cuenta[] = [];
  categorias: Categoria[] = [];

  selectCuenta: string = '';
  selectCategoria: string = '';
  fechaRegistro: string = '';

  constructor(
    private cuentaService: CuentaService,
    private categoriaService: CategoriaService,
    private consultaService: ConsultasService,
    private transferenciaService: ConsultasService,
    private transaccionService: ConsultasService
  ) { }

  ngOnInit(): void {
    this.getCuentaByPersona();
  }

  getHistorialTransaccionesByConsulta(){
    let consulta: Consulta ={
      cuentaId: this.selectCuenta,
      categoriaId: this.selectCategoria,
      fechaRegistro: this.fechaRegistro
    }

    this.consultaService.getHistorialTransaccionesByConsulta(consulta).subscribe(
      res => {
        this.transacciones = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  getHistorialTransferenciasByConsulta(){
    let consultaTransferencia: ConsultaTransferencia ={
      cuentaOrigenId: this.selectCuenta,
      cuentaDestinoId: '',
      fechaTransferencia: this.fechaRegistro,
      tipo: ''
    }
    this.consultaService.getHistorialTransferenciasByConsulta(consultaTransferencia).subscribe(
      res => {
        this.transferencia = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  vaciarCamposSeleccionados(){
    this.selectCuenta = '';
    this.selectCategoria = '';
    this.fechaRegistro = '';
  }
  getCuentaByPersona(){
    this.cuentaService.getCuentaByPersona().subscribe(
      res => {
        this.cuentas = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  getCategoriasByCuentaId(){
    this.categoriaService.getCategoriasByCuentaId(this.selectCuenta).subscribe(
      res => {
        this.categorias = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteTransaccion(id: string) {

  }

  deleteTransferencia(id: string) {

  }
}
