export interface Transferencia {
  id?: string;
  fechaTransferencia?: Date;
  monto: number;
  cuentaOrigenId: string;
  cuentaDestinoId: string;
  estado?: number;
  tipo?: number;
}
