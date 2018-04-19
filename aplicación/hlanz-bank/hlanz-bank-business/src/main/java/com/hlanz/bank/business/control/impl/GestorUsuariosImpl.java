package com.hlanz.bank.business.control.impl;

import javax.inject.Inject;
import javax.inject.Named;

import com.hlanz.bank.business.dao.UsuariosDAO;
import com.hlanz.bank.business.domain.Usuarios;

@Named
public class GestorUsuariosImpl implements com.hlanz.bank.business.control.GestorUsuarios{

	@Inject
	UsuariosDAO usuarioDAO;
	
	@Override
	public Usuarios autenticarUser(Usuarios usuario) {
		return usuarioDAO.autenticarUser(usuario.getDni(), usuario.getPin());
	}

}
