import { Cuentas } from './cuentas.model';

export class Movimientos {
    fecha : Date;
    cuentaEmisora : Cuentas;
    cuentaReceptora : Cuentas;
    nombreReceptor : String;
    concepto : String;
    movimiento : Number;
    saldoActual : Number;

    constructor(){
        this.cuentaEmisora = new Cuentas();
        this.cuentaReceptora = new Cuentas();
    }
}
