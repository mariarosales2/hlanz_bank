package com.hlanz.bank.business.dao;

import com.hlanz.bank.business.domain.Usuarios;

public interface UsuariosDAO {

	public Usuarios buscarPorId(int id);
	
	public Usuarios buscarPorDni(String dni);
	
	public Usuarios crearUsuario(Usuarios usuario);
	
	public Usuarios modificarUsuario(Usuarios usuario);
	
	public Usuarios autenticarUser(String dni, int pin);
}
