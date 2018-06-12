package com.hlanz.bank.ws.services.impl;

import javax.inject.Inject;

import com.hlanz.bank.business.control.GestorInfo;
import com.hlanz.bank.ws.dto.InfoDTO;
import com.hlanz.bank.ws.services.ServicioInfo;

public class ServicioInfoImpl implements ServicioInfo{
	@Inject
	GestorInfo gestorInfo;
	
	@Override
	public void crearNoticia(InfoDTO noticia) {
		gestorInfo.crear(InfoDTO.toDomain(noticia));
	}
	
	@Override
	public InfoDTO[] getInfo() {
		return InfoDTO.toDTOListado(gestorInfo.getInfo());
	}

	@Override
	public InfoDTO getNoticia(int id) {
		return InfoDTO.toDTO(gestorInfo.buscarNoticiaClave(id));
	}
	
	@Override
	public void modificarNoticia(InfoDTO noticia) {
		gestorInfo.modificar(InfoDTO.toDomain(noticia));
	}
}
