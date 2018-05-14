package com.hlanz.bank.business.control.impl;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import com.hlanz.bank.business.control.GestorMovimientos;
import com.hlanz.bank.business.dao.CuentasDAO;
import com.hlanz.bank.business.dao.MovimientosDAO;
import com.hlanz.bank.business.domain.Cuentas;
import com.hlanz.bank.business.domain.Movimientos;

@Named
public class GestorMovimientosImpl implements GestorMovimientos{
	
	@Inject
	MovimientosDAO movimientosDAO;
	
	@Inject
	CuentasDAO cuentasDAO;
	
	@Override
	public List<Movimientos> buscarMovimientos(int cuenta) {
		return movimientosDAO.buscarMovimientos(cuenta);
	}

	@Override
	public void transferencia(Movimientos mov) {
		Cuentas destino = cuentasDAO.buscarPorNumero(mov.getCuentasByCuentaReceptora().getNumero()); //Busca cuenta destino
		if(destino != null) {
			mov.setSaldoActual(destino.getSaldo()+mov.getMovimiento()); //Aumento saldo movimiento
			mov.setFecha(new Date());
			mov.setCuentasByCuentaReceptora(destino);
			movimientosDAO.crear(mov); //Movimiento recibo dinero
			cuentasDAO.transferir(destino, mov.getSaldoActual());//Aumento saldo cuenta destinatario
		}
		
		//------------------------------------------------------------
		
		Cuentas origen = cuentasDAO.buscarPorNumero(mov.getCuentasByCuentaEmisora().getNumero());
		Movimientos movEmisor = new Movimientos();
		movEmisor.setConcepto(mov.getConcepto());
		movEmisor.setFecha(mov.getFecha());
		movEmisor.setSaldoActual(origen.getSaldo()-mov.getMovimiento());
		movEmisor.setMovimiento(-mov.getMovimiento());
		movEmisor.setCuentasByCuentaEmisora(origen);
		movimientosDAO.crear(movEmisor);
		cuentasDAO.transferir(origen, movEmisor.getSaldoActual()); //Retirada dinero cuenta origen
	}

}
