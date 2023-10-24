import {Categoria} from "./categoria.model";
import {Cuenta} from "./cuenta.model";

export interface Transaccion {
  id?: string;
  monto: number;
  descripcion: string;
  tipo: number;
  cuentaId: string;
  categoriaId: string;
  fechaRegistro?: Date;
  estado?: number;
  categoria?: Categoria
  cuenta?: Cuenta
}
