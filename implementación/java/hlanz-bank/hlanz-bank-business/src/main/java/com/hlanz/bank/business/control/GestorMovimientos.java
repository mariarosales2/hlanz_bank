package com.hlanz.bank.business.control;

import java.util.List;

import com.hlanz.bank.business.domain.Movimientos;

public interface GestorMovimientos {

	public List<Movimientos> buscarMovimientos(int cuenta);
	
	public void transferencia(Movimientos mov);
}
