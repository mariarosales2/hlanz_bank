package com.hlanz.bank.business.dao;

import java.util.List;

import com.hlanz.bank.business.domain.Movimientos;

public interface MovimientosDAO {

	public List<Movimientos> buscarMovimientos(int cuenta);
	
	public void crear(Movimientos mov);
	
}
