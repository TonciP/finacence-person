import { Component } from '@angular/core';
import {Categoria} from "../../models/categoria.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriaService} from "../../services/categoria.service";
import {Cuenta} from "../../models/cuenta.model";
import {CuentaService} from "../../services/cuenta.service";

@Component({
  selector: 'app-categorizacion-movimiento',
  templateUrl: './categorizacion-movimiento.component.html',
  styleUrls: ['./categorizacion-movimiento.component.css']
})
export class CategorizacionMovimientoComponent {
  categoria: Categoria = {
    id: '',
    nombre: '',
    cuentaId: '',
  };
  categorias: Categoria[] = [];
  guardar: boolean = false;
  cuentas: Cuenta[] = [];
  seleccionado: string = '';

  categoriaSaveForm = new FormGroup(
    {
      nombreGuardar: new FormControl('', [Validators.required])
    }
  )
  categoriaUpdateForm = new FormGroup(
    {
      nombreActualizar: new FormControl('')
    }
  )

  constructor(
    private categoriaService: CategoriaService,
    private cuentaService: CuentaService,
  ) { }

  ngOnInit(): void {
    //this.categoriaService.
    this.getCuentaByPersona();
    //this.getCategoriaByPersonaId();
  }
  getCategoriaByCuentaId(){
    this.categoriaService.getCategoriasByCuentaId(this.seleccionado).subscribe(
      res => {
        this.categorias = res;
      },
      err => {
        console.log(err);
      }
    );
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

  asignarDatoCategoria(categoria: Categoria){
    this.categoria = categoria;
  }
  guardarCategoria(){
    if(this.categoriaSaveForm.value.nombreGuardar === '')
      return;

    let categoriaCreate: Categoria = {
      nombre: this.categoriaSaveForm.value.nombreGuardar as string,
      cuentaId: this.seleccionado
    }
    this.categoriaService.crearCategoria(categoriaCreate).subscribe(
      res => {
        this.getCategoriaByCuentaId();
      },
      err => {
        console.log(err);
      }
    )
  }
  actulizarCategoria(){
if(this.categoriaUpdateForm.value.nombreActualizar === '')
      this.categoriaUpdateForm.controls['nombreActualizar'].setValue(this.categoria.nombre);

    let categoriaCreate: Categoria = {
      id: this.categoria.id,
      nombre: this.categoriaUpdateForm.value.nombreActualizar as string,
      cuentaId: this.seleccionado
    }
    this.categoriaService.actualizarCategoria(categoriaCreate).subscribe(
      res => {
        this.getCategoriaByCuentaId();
      },
      err => {
        console.log(err);
      }
    )
  }
}
