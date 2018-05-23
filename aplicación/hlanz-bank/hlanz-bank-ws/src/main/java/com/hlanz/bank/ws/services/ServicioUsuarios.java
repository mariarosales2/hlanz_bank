package com.hlanz.bank.ws.services;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.hlanz.bank.ws.dto.UsuariosDTO;

@Path("/usuarios")
@Produces("application/json")
@Consumes("application/json, text/plain")
public interface ServicioUsuarios {
	
	@POST
	@Path("/autenticar")
	public UsuariosDTO autenticar(String userEncode);
	
	@GET
	@Path("/usuarios")
	public UsuariosDTO[] getUsuarios();
	
	@POST
	@Path("/buscar")
	public UsuariosDTO buscarPorId(int id);
	
	@POST
	@Path("/registro")
	public void crearUsuario(UsuariosDTO usuario);
	
	@POST
	@Path("/modificar")
	public void modificarUsuario(UsuariosDTO usuario);
	
}
