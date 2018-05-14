package com.hlanz.bank.business.control.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import com.hlanz.bank.business.control.GestorInfo;
import com.hlanz.bank.business.dao.InfoDAO;
import com.hlanz.bank.business.domain.Info;

@Named
public class GestorInfoImpl implements GestorInfo {
	
	@Inject
	InfoDAO infoDAO;
	
	@Override
	public void crear(Info noticia) {
		infoDAO.crear(noticia);
	}

	@Override
	public List<Info> getInfo() {
		return infoDAO.getInfo();
	}

	@Override
	public Info buscarNoticiaClave(int id) {
		return infoDAO.buscarPorId(id);
	}
	
	@Override
	public void modificar(Info noticia) {
		infoDAO.modificar(noticia);
	}

}
