package com.hlanz.bank.business.control;

import com.hlanz.bank.business.domain.Usuarios;

public interface GestorUsuarios {
	
	public Usuarios autenticarUser(Usuarios usuario);
	
	public Usuarios buscarPorId(int id);
	
	public void registrarUsuario(Usuarios usuario);
	
	public void modificarUsuario(Usuarios usuario);

}
