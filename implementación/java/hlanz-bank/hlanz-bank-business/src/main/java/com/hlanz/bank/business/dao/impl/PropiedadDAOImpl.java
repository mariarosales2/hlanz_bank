package com.hlanz.bank.business.dao.impl;

import javax.inject.Named;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import com.hlanz.bank.business.dao.PropiedadDAO;
import com.hlanz.bank.common.BaseDAOImpl;

@Named
public class PropiedadDAOImpl extends BaseDAOImpl implements PropiedadDAO{

	public String getPropiedad(String nombre) {
		String consulta = "Select id.valor from Propiedad where id.nombre = :nombre";
		Query query = em.createQuery(consulta);
		query.setParameter("nombre", nombre);
		try {
			return (String) query.getSingleResult();
		}catch(NoResultException e){
			return null;
		}
		
	}
}
