package com.hlanz.bank.ws.services.impl;

import javax.inject.Inject;

import com.hlanz.bank.business.control.GestorInfo;
import com.hlanz.bank.ws.dto.InfoDTO;
import com.hlanz.bank.ws.services.ServicioInfo;

public class ServicioInfoImpl implements ServicioInfo{
	@Inject
	GestorInfo gestorInfo;
	
	@Override
	public InfoDTO[] getInfo() {
		InfoDTO dto = new InfoDTO();
		return dto.toDTOListado(gestorInfo.getInfo());
	}

}
