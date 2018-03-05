package com.hlanz.bank.business.control.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import com.hlanz.bank.business.control.GestorCuentas;
import com.hlanz.bank.business.dao.CuentasDAO;
import com.hlanz.bank.business.domain.Cuentas;

@Named
public class GestorCuentasImpl implements com.hlanz.bank.business.control.GestorCuentas {
	
	@Inject
	CuentasDAO cuentasDAO;
	
	@Override
	public List<Cuentas> getCuentas(int id) {
		return cuentasDAO.getCuentas(id);
	}

}
