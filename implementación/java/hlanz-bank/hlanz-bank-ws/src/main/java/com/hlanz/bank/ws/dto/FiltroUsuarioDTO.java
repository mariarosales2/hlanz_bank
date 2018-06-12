package com.hlanz.bank.ws.dto;

import com.hlanz.bank.business.domain.Usuarios;

public class FiltroUsuarioDTO {
	private String dni;
	private int pin;
	
	public static Usuarios toDomain(FiltroUsuarioDTO dto) {
		Usuarios domain = new Usuarios();

		domain.setDni(dto.getDni());
		domain.setPin(dto.getPin());
		
		return domain;
	}
	
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
	
	
}
