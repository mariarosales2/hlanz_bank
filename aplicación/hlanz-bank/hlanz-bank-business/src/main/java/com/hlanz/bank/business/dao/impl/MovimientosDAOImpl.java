package com.hlanz.bank.business.dao.impl;

import java.util.List;

import javax.inject.Named;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import com.hlanz.bank.business.dao.MovimientosDAO;
import com.hlanz.bank.business.domain.Movimientos;
import com.hlanz.bank.common.BaseDAOImpl;

@Named
public class MovimientosDAOImpl extends BaseDAOImpl implements MovimientosDAO{

	@Override
	public List<Movimientos> buscarMovimientos(int cuenta) {
		String consulta = "select o from Movimientos as o where cuentas.idCuenta = :cuenta";
		Query query = em.createQuery(consulta);
		query.setParameter("cuenta", cuenta);
		try {
			return (List<Movimientos>) query.getResultList();
		}catch(NoResultException e) {
			return null;			
		}
	}

	@Override
	public void crear(Movimientos mov) {
		super.crear(mov);
	}

}
