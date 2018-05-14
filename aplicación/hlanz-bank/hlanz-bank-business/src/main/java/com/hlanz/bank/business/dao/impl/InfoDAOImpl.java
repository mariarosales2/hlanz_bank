package com.hlanz.bank.business.dao.impl;

import java.util.List;

import javax.inject.Named;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import com.hlanz.bank.business.dao.InfoDAO;
import com.hlanz.bank.business.domain.Info;
import com.hlanz.bank.common.BaseDAOImpl;

@Named
public class InfoDAOImpl extends BaseDAOImpl implements InfoDAO{

	@Override
	public Info crear(Info noticia) {
		return (Info) super.crear(noticia);
	}
	
	@Override
	public Info buscarPorId(int id) {
		return (Info) super.buscarId(id, Info.class);
	}
	
	@Override
	public List<Info> getInfo() {
		String consulta = "select o from Info as o";
		Query query = em.createQuery(consulta);
		try {
			return (List<Info>) query.getResultList();
		} catch(NoResultException e) {
			return null;
		}
	}
	
	@Override
	public Info modificar(Info noticia) {
		return (Info) super.merge(noticia);
	}
	
}
