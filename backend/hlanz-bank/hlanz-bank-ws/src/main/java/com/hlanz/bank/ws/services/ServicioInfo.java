package com.hlanz.bank.ws.services;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.hlanz.bank.ws.dto.InfoDTO;

@Path("/info")
@Produces("application/json")
@Consumes("application/json")

public interface ServicioInfo {
	@GET
	@Path("/getInfo")
	public InfoDTO[] getInfo();
}
