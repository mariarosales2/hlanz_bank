package com.hlanz.bank.ws.services;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.PathParam;

import com.hlanz.bank.ws.dto.InfoDTO;

@Path("/info")
@Produces("application/json")
@Consumes("application/json")

public interface ServicioInfo {
	
	@POST
	@Path("/crear")
	public void crearNoticia(InfoDTO noticia);
	
	@GET
	@Path("/noticias")
	public InfoDTO[] getInfo();
	
	@GET
	@Path("/noticia/{id}")
	public InfoDTO getNoticia(@PathParam("id") int id);
	
	@POST
	@Path("/modificar")
	public void modificarNoticia(InfoDTO noticia);
}
