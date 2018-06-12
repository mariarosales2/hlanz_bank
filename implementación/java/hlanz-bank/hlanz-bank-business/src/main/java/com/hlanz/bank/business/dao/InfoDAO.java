package com.hlanz.bank.business.dao;

import java.util.List;

import com.hlanz.bank.business.domain.Info;

public interface InfoDAO {
	
	public Info crear(Info noticia);

	public Info buscarPorId(int id);
	
	public List<Info> getInfo();
	
	public Info modificar(Info noticia);
	
}
