package com.hlanz.bank.business.dao.impl;

import javax.inject.Named;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import com.hlanz.bank.business.domain.Usuarios;
import com.hlanz.bank.common.BaseDAOImpl;

@Named
public class UsuariosDAOImpl extends BaseDAOImpl implements com.hlanz.bank.business.dao.UsuariosDAO{

	@Override
	public Usuarios autenticarUser(String dni, int pin) {
		String consulta = "select o from Usuarios where dni='"+dni+"' and pin="+pin+"";
		Query query = em.createQuery(consulta);
		try {
			return (Usuarios) query.getSingleResult();
		}catch(NoResultException e) {
			return null;			
		}
	}
	

}
