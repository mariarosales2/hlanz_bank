package com.hlanz.bank.ws.services;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.hlanz.bank.ws.dto.UsuariosDTO;

@Path("/usuarios")
@Produces("application/json")
@Consumes("text/plain")
public interface ServicioUsuarios {
	
	@POST
	@Path("/autenticar")
	public UsuariosDTO autenticar(UsuariosDTO usuario);
}
