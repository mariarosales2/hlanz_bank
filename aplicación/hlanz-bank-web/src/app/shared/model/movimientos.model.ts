export interface Movimientos {
    fecha : Date;
    cuentaEmisora : String;
    cuentaReceptora : String;
    nombreReceptor : String;
    concepto : String;
    movimiento : Number;
    saldoActual : Number;
}