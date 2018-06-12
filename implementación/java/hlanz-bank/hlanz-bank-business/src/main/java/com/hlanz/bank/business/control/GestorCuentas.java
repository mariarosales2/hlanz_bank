package com.hlanz.bank.business.control;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hlanz.bank.business.domain.Cuentas;
import com.hlanz.bank.business.domain.Usuarios;

public interface GestorCuentas {

	public List<Cuentas> getCuentas();
	
	public List<Cuentas> getCuentas(int id);
	
}
