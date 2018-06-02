package com.hlanz.bank.business.dao.impl;

import java.util.List;

import javax.inject.Named;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import com.hlanz.bank.business.domain.Cuentas;
import com.hlanz.bank.business.domain.Movimientos;

@Named
public class CuentasDAOImpl extends com.hlanz.bank.common.BaseDAOImpl implements com.hlanz.bank.business.dao.CuentasDAO{
	
	@Override
	public Cuentas crearCuenta(Cuentas cuenta) {
		return (Cuentas) super.crear(cuenta);
	}
	
	@Override
	public Cuentas buscarPorId(int id) {
		return (Cuentas) em.find(Cuentas.class, id);
	}
	
	@Override
	public List<Cuentas> getCuentas(){
		String consulta = "select o from Cuentas as o";
		Query query = em.createQuery(consulta);
		return (List<Cuentas>) query.getResultList();
	}
	
	@Override
	public List<Cuentas> buscarPorUsuario(int id) {
		String consulta = "select o from Cuentas as o where usuarios.id = :id";
		Query query = em.createQuery(consulta);
		query.setParameter("id", id);
		return (List<Cuentas>) query.getResultList();
	}

	@Override
	public Cuentas buscarPorNumero(String cuenta) {
		String consulta = "select o from Cuentas as o where numero = :cuenta";
		Query query = em.createQuery(consulta);
		query.setParameter("cuenta", cuenta);
		try {
			return (Cuentas) query.getSingleResult();
		}catch(NoResultException e) {
			return null;
		}
	}

	@Override
	public void transferir(Cuentas cuenta, float saldo) {
		cuenta.setSaldo(saldo);
		em.merge(cuenta);
	}
	
	

}
