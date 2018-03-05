package com.hlanz.bank.business.dao.impl;

import java.util.List;

import javax.inject.Named;
import javax.persistence.Query;

import com.hlanz.bank.business.domain.Cuentas;

@Named
public class CuentasDAOImpl extends com.hlanz.bank.common.BaseDAOImpl implements com.hlanz.bank.business.dao.CuentasDAO{
	
	@Override
	public List<Cuentas> getCuentas(int id) {
		String consulta = "select o from Cuentas as o where usuarios.id = "+id;
		Query query = em.createQuery(consulta);
		return (List<Cuentas>) query.getResultList();
	}

}
