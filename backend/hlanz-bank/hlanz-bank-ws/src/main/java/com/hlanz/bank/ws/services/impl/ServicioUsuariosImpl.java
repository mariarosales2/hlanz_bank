package com.hlanz.bank.ws.services.impl;

import javax.inject.Inject;

import com.hlanz.bank.business.control.GestorUsuarios;
import com.hlanz.bank.business.domain.Usuarios;
import com.hlanz.bank.ws.dto.UsuariosDTO;
import com.hlanz.bank.ws.services.ServicioUsuarios;

public class ServicioUsuariosImpl implements ServicioUsuarios{

	@Inject
	GestorUsuarios gestorUsuarios;
	
	@Override
	public UsuariosDTO autenticar(UsuariosDTO usuario) {
		UsuariosDTO dto = new UsuariosDTO();
		Usuarios domain = gestorUsuarios.autenticarUser(dto.toDomain(usuario));
		return dto.toDTO(domain);
	}

}
