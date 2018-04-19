package com.hlanz.bank.ws.dto;

import com.hlanz.bank.business.domain.Usuarios;

public class UsuariosDTO {

	private int idUsuario;
	private String nombre;
	private String apellidos;
	private String dni;
	private Integer teléfono;
	private String email;
	
	public static UsuariosDTO toDTO(Usuarios domain) {
		UsuariosDTO dto = new UsuariosDTO();
		dto.setIdUsuario(domain.getIdUsuario());
		dto.setNombre(domain.getNombre());
		dto.setApellidos(domain.getApellidos());
		dto.setEmail(domain.getEmail());
		dto.setTeléfono(domain.getTeléfono());
		dto.setDni(domain.getDni());
		
		return dto;
	}
	
	public Usuarios toDomain(UsuariosDTO dto) {
		Usuarios domain = new Usuarios();
		domain.setIdUsuario(dto.getIdUsuario());
		domain.setNombre(dto.getNombre());
		domain.setApellidos(dto.getApellidos());
		domain.setEmail(dto.getEmail());
		domain.setTeléfono(dto.getTeléfono());
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

	public Integer getTeléfono() {
		return teléfono;
	}
	public void setTeléfono(Integer teléfono) {
		this.teléfono = teléfono;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
