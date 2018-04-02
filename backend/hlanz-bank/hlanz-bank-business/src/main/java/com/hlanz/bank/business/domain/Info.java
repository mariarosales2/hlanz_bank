package com.hlanz.bank.business.domain;
// Generated 19-mar-2018 15:37:40 by Hibernate Tools 5.2.8.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Info generated by hbm2java
 */
@Entity
@Table(name = "info", catalog = "hlanz_bank")
public class Info implements java.io.Serializable {

	private int id;
	private String imagen;
	private String titulo;
	private String body;

	public Info() {
	}

	public Info(int id, String imagen, String titulo, String body) {
		this.id = id;
		this.imagen = imagen;
		this.titulo = titulo;
		this.body = body;
	}

	@Id

	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "imagen", nullable = false, length = 50)
	public String getImagen() {
		return this.imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	@Column(name = "titulo", nullable = false, length = 50)
	public String getTitulo() {
		return this.titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	@Column(name = "body", nullable = false, length = 5000)
	public String getBody() {
		return this.body;
	}

	public void setBody(String body) {
		this.body = body;
	}

}
