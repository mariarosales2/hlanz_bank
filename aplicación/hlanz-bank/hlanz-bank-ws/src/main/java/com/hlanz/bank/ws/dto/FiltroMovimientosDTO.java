package com.hlanz.bank.ws.dto;

public class FiltroMovimientosDTO {
	
	MovimientosDTO movimiento;
	String cuentaEmisora;
	
	public MovimientosDTO getMovimiento() {
		return movimiento;
	}
	public void setMovimiento(MovimientosDTO movimiento) {
		this.movimiento = movimiento;
	}
	public String getCuentaEmisora() {
		return cuentaEmisora;
	}
	public void setCuentaEmisora(String cuentaEmisora) {
		this.cuentaEmisora = cuentaEmisora;
	}
	
}
