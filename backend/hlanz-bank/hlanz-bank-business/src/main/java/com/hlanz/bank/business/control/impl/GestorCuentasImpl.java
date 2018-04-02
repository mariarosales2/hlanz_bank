package com.hlanz.bank.business.control.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.filters.RequestDumperFilter;

import com.hlanz.bank.business.control.GestorCuentas;
import com.hlanz.bank.business.dao.CuentasDAO;
import com.hlanz.bank.business.dao.UsuariosDAO;
import com.hlanz.bank.business.domain.Cuentas;
import com.hlanz.bank.business.domain.Usuarios;

@Named
public class GestorCuentasImpl implements com.hlanz.bank.business.control.GestorCuentas {
	@Inject
	CuentasDAO cuentasDAO;
	
	@Inject
	UsuariosDAO usuariosDAO;
	
	@Override
	public List<Cuentas> getCuentas(int id) {
		return cuentasDAO.getCuentas(id);
	}

}
