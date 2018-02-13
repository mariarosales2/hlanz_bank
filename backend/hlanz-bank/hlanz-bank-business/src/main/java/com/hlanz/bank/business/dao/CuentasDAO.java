/**
 * 
 */
package com.hlanz.bank.business.dao;

import java.util.List;

import com.hlanz.bank.business.domain.Cuentas;

/**
 * @author María
 *
 */
public interface CuentasDAO {
	
	public List<Cuentas> getCuentas(int id);
	

}
