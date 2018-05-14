package com.hlanz.bank.ws.dto;

import com.hlanz.bank.business.domain.Usuarios;

public class UsuariosDTO {

	private int idUsuario;
	private String nombre;
	private String apellidos;
	private String dni;
	private Integer pin;
	private Integer telefono;
	private String email;
	
	public static UsuariosDTO toDTO(Usuarios domain) {
		UsuariosDTO dto = new UsuariosDTO();
		
		dto.setIdUsuario(domain.getIdUsuario());
		dto.setNombre(domain.getNombre());
		dto.setApellidos(domain.getApellidos());
		dto.setEmail(domain.getEmail());
		dto.setTelefono(domain.getTelefono());
		dto.setDni(domain.getDni());
		
		return dto;
	}
	
	public static Usuarios toDomain(UsuariosDTO dto) {
		Usuarios domain = new Usuarios();
		
		domain.setNombre(dto.getNombre());
		domain.setApellidos(dto.getApellidos());
		domain.setEmail(dto.getEmail());
		domain.setTelefono(dto.getTelefono());
		domain.setDni(dto.getDni());
		
		return domain;
	}
	
	public int getIdUsuario() {
		return idUsuario;
	}
	
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	
	public void setDni(String dni) {
		this.dni = dni;
	}
	
	public String getDni() {
		return dni;
	}

	public Integer getTelefono() {
		return telefono;
	}
	public void setTelefono(Integer telefono) {
		this.telefono = telefono;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getPin() {
		return pin;
	}

	public void setPin(Integer pin) {
		this.pin = pin;
	}
	
	
}
