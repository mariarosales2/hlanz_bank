package com.hlanz.bank.common;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class BaseDAOImpl implements com.hlanz.bank.common.BaseDAO{
	
	@PersistenceContext
	public EntityManager em;

	@Override
	public Object crear(Object o) {
		em.persist(o);
		return o;
	}

	@Override
	public <T> Object buscarId(Object id, Class<T> clase) {
		em.find((Class<T>) id, clase);
		return null;
	}
	
	

}
