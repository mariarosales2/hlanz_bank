package com.hlanz.bank.business.dao.impl;

import javax.inject.Named;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import com.hlanz.bank.business.domain.Usuarios;
import com.hlanz.bank.common.BaseDAOImpl;

@Named
public class UsuariosDAOImpl extends BaseDAOImpl implements com.hlanz.bank.business.dao.UsuariosDAO{
	
	@Override
	public Usuarios buscarPorId(int id) {
		return (Usuarios) super.buscarId(id, Usuarios.class);
	}
	
	@Override
	public Usuarios buscarPorDni(String dni) {
		String consulta = "select o from Usuarios as o where dni = :dni";
		Query query = em.createQuery(consulta);
		query.setParameter("dni", dni);
		try {
			return (Usuarios) query.getSingleResult();
		}catch(NoResultException e){
			return null;
		}
	}
	
	@Override
	public Usuarios crearUsuario(Usuarios usuario) {
		return (Usuarios) super.crear(usuario);
	}
	
	@Override
	public Usuarios modificarUsuario(Usuarios usuario) {
		return (Usuarios) super.merge(usuario);
	}
	
	@Override
	public Usuarios autenticarUser(String dni, int pin) {
		String consulta = "select o from Usuarios as o where dni= :dni and pin= :pin";
		Query query = em.createQuery(consulta);
		query.setParameter("dni", dni);
		query.setParameter("pin", pin);
		try {
			return (Usuarios) query.getSingleResult();
		}catch(NoResultException e) {
			return null;			
		}
	}
	

}
