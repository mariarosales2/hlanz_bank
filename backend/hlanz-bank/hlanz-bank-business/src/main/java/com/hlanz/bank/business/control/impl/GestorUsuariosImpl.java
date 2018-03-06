package com.hlanz.bank.business.control.impl;

import javax.inject.Inject;

import com.hlanz.bank.business.control.GestorUsuarios;
import com.hlanz.bank.business.dao.UsuariosDAO;
import com.hlanz.bank.business.dao.impl.UsuariosDAOImpl;
import com.hlanz.bank.business.domain.Usuarios;

public class GestorUsuariosImpl implements com.hlanz.bank.business.control.GestorUsuarios{

//	@Inject
//	UsuariosDAO usuarioDAO;
	
	UsuariosDAO usuarioDAO = new UsuariosDAOImpl();
	
	@Override
	public Usuarios autenticarUser(Usuarios usuario) {
		Usuarios user = usuarioDAO.autenticarUser(usuario);
		return user;
	}
	
	public static void main(String[] args) {
		GestorUsuarios gestor = new GestorUsuariosImpl();
		Usuarios usuario = new Usuarios();
		usuario.setDni("77023684L");
		usuario.setPin(0217);
		System.out.println(gestor.autenticarUser(usuario));
	}

}
