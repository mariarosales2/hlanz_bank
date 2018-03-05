package com.hlanz.bank.ws.services;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.hlanz.bank.ws.dto.CuentasDTO;

@Path("/cuentas")
@Produces("application/json")
@Consumes("text/plain")

public interface ServicioCuentas {
	@POST
	@Path("/getCuentas")
	public CuentasDTO[] getCuentas(int id);
}
