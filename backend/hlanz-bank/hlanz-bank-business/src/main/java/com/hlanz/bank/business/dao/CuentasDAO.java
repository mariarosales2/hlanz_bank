/**
 * 
 */
package com.hlanz.bank.business.dao;

import java.util.List;

import com.hlanz.bank.business.domain.Cuentas;

/**
 * @author Mar�a
 *
 */
public interface CuentasDAO {
	
	public List<Cuentas> getCuentas(int id);
	

}
