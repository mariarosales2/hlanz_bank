package com.hlanz.bank.ws.dto;

import java.util.List;

import com.hlanz.bank.business.domain.Cuentas;

public class CuentasDTO {
	
	int idCuenta;
	String numero;
	float saldo;

	public static CuentasDTO toDTO(Cuentas domain) {
		CuentasDTO dto = new CuentasDTO();
		
		dto.setIdCuenta(domain.getIdCuenta());
		dto.setNumero(domain.getNumero());
		dto.setSaldo(domain.getSaldo());
		
		return dto;
	}
	
	public CuentasDTO[] toDTOListado(List<Cuentas> lista) {
		CuentasDTO[] listaDTO = new CuentasDTO[lista.size()];
		int i = 0;
		
		for(Cuentas lin : lista) {
			listaDTO[i++] = CuentasDTO.toDTO(lin);
		}
		
		return listaDTO;
	}
	
	public static Cuentas toDomain(CuentasDTO dto) {
		Cuentas dom = new Cuentas();
		dom.setNumero(dto.getNumero());
		dom.setSaldo(dto.getSaldo());
		
		return dom;
	}
	
	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
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
