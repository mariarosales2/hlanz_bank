package com.hlanz.bank.ws.dto;

import java.util.List;

import com.hlanz.bank.business.domain.Cuentas;

public class CuentasDTO {
	
	String numero;
	float saldo;

	public CuentasDTO toDTO(Cuentas domain) {
		CuentasDTO dto = new CuentasDTO();
		
		dto.setNumero(domain.getNumero());
		dto.setSaldo(domain.getSaldo());
		
		return dto;
	}
	
	public CuentasDTO[] toDTOListado(List<Cuentas> listado) {
		CuentasDTO[] lista = null;
		CuentasDTO[] list = listado[];
		int i = 0;
		
		for(CuentasDTO lin : listado)
			lista[i++] = lin;
		
		return lista;
	}
	
	public String getNumero() {
		return this.numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public float getSaldo() {
		return this.saldo;
	}

	public void setSaldo(float saldo) {
		this.saldo = saldo;
	}
}
