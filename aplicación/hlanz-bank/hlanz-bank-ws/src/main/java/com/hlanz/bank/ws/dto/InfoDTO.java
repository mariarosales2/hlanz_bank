package com.hlanz.bank.ws.dto;

import java.util.List;

import com.hlanz.bank.business.domain.Info;

public class InfoDTO {
	private int id;
	private String imagen;
	private String titulo;
	private String body;
	
	public static InfoDTO toDTO(Info info) {
		InfoDTO dto = new InfoDTO();
		dto.setId(info.getId());
		dto.setImagen(info.getImagen());
		dto.setTitulo(info.getTitulo());
		dto.setBody(info.getBody());
		
		return dto;
	}
	
	public static InfoDTO[] toDTOListado(List<Info> lista) {
		InfoDTO[] listaDTO = new InfoDTO[lista.size()];
		int i = 0;
		
		for(Info info : lista) {
			listaDTO[i++] = InfoDTO.toDTO(info);
		}
		
		return listaDTO;
	}
	
	public static Info toDomain(InfoDTO dto) {
		Info domain = new Info();
		domain.setTitulo(dto.getTitulo());
		domain.setBody(dto.getBody());
		domain.setImagen(dto.getImagen());
		
		return domain;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	
}
