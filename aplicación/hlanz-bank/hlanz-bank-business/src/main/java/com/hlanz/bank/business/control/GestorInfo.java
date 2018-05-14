package com.hlanz.bank.business.control;

import java.util.List;

import com.hlanz.bank.business.domain.Info;

public interface GestorInfo {
	
	public void crear(Info noticia);

	public List<Info> getInfo();
	
	public Info buscarNoticiaClave(int id);
	
	public void modificar(Info noticia);
}
