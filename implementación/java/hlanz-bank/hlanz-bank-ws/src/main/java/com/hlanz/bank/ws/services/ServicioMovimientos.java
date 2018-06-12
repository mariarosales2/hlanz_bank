package com.hlanz.bank.ws.services;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.hlanz.bank.ws.dto.MovimientosDTO;

@Path("/movimientos")
@Produces("application/json")
@Consumes("application/json, text/plain")
public interface ServicioMovimientos {

	@POST
	@Path("/buscar")
	public MovimientosDTO[] buscarMovimientos(int id);
	
	@POST
	@Path("/transferencia")
	public void transferencia(MovimientosDTO dto);
}
