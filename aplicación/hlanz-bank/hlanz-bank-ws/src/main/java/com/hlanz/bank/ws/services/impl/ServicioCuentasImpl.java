package com.hlanz.bank.ws.services.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import com.hlanz.bank.business.control.GestorCuentas;
import com.hlanz.bank.business.domain.Cuentas;
import com.hlanz.bank.ws.dto.CuentasDTO;

@Named
public class ServicioCuentasImpl implements com.hlanz.bank.ws.services.ServicioCuentas{

@Inject
GestorCuentas gestorCuentas;

	@Override
	public CuentasDTO[] getCuentas() {
		List<Cuentas> domain = gestorCuentas.getCuentas();
		CuentasDTO dto = new CuentasDTO();
		return dto.toDTOListado(domain);
	}

	@Override
	public CuentasDTO[] getCuentas(int id) {
		List<Cuentas> domain = gestorCuentas.getCuentas(id);
		CuentasDTO dto = new CuentasDTO();
		return dto.toDTOListado(domain);
	}
	
}
