package com.hlanz.bank.business.dao.impl;

import java.util.List;

import javax.persistence.Query;

import com.hlanz.bank.business.domain.Cuentas;

public class CuentasDAOImpl extends com.hlanz.bank.common.BaseDAOImpl implements com.hlanz.bank.business.dao.CuentasDAO{
	
	@Override
	public List<Cuentas> getCuentas(int id) {
		String consulta = "select o.numero from Usuarios o where usuarios.id = "+id;
		Query query = em.createQuery(consulta);
		List<Cuentas> cuentas = query.getResultList();
		return cuentas;
	}

}
