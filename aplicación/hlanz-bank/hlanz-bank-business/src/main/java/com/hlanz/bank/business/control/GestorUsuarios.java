package com.hlanz.bank.business.control;

import java.util.List;

import com.hlanz.bank.business.domain.Usuarios;

public interface GestorUsuarios {
	
	public Usuarios autenticarUser(Usuarios usuario);
	
	public List<Usuarios> getUsuarios();
	
	public Usuarios buscarPorId(int id);
	
	public void registrarUsuario(Usuarios usuario);
	
	public void modificarUsuario(Usuarios usuario);

}
