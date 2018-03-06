package com.hlanz.bank.business.dao.impl;

import javax.persistence.NoResultException;
import javax.persistence.Query;

import com.hlanz.bank.business.domain.Usuarios;
import com.hlanz.bank.common.BaseDAOImpl;

public class UsuariosDAOImpl extends BaseDAOImpl implements com.hlanz.bank.business.dao.UsuariosDAO{

	@Override
	public Usuarios autenticarUser(Usuarios usuario) {
		String consulta = "select o from Usuarios where dni='"+usuario.getDni()+"' and pin="+usuario.getPin()+"";
		Query query = em.createQuery(consulta);
		try {
			return (Usuarios) query.getSingleResult();
		}catch(NoResultException e) {
			return null;			
		}
	}
	
	

}
