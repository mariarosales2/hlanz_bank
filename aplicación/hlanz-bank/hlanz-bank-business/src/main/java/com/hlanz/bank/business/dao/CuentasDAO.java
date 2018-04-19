/**
 * 
 */
package com.hlanz.bank.business.dao;

import java.util.List;

import com.hlanz.bank.business.domain.Cuentas;
import com.hlanz.bank.business.domain.Movimientos;

/**
 * @author María
 *
 */
public interface CuentasDAO {
	
	public List<Cuentas> buscarPorUsuario(int id);
	
	public Cuentas buscarPorNumero(String cuenta);
	
	public void transferir(Cuentas cuenta, float saldo);

}
