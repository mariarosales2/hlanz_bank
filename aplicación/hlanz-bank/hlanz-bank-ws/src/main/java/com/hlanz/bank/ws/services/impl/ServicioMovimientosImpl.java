package com.hlanz.bank.ws.services.impl;

import java.util.List;

import javax.inject.Inject;

import com.hlanz.bank.business.control.GestorMovimientos;
import com.hlanz.bank.business.domain.Movimientos;
import com.hlanz.bank.ws.dto.MovimientosDTO;
import com.hlanz.bank.ws.services.ServicioMovimientos;

public class ServicioMovimientosImpl implements ServicioMovimientos{
	@Inject
	GestorMovimientos gestorMovimientos;
	
	@Override
	public MovimientosDTO[] buscarMovimientos(int id) {
		List<Movimientos> listDom = gestorMovimientos.buscarMovimientos(id);
		return MovimientosDTO.toDTOListado(listDom);
	}

	@Override
	public void transferencia(MovimientosDTO dto) {
		gestorMovimientos.transferencia(MovimientosDTO.toDomain(dto));
	}

}
