package com.hlanz.bank.business.domain;
// Generated 02-jun-2018 23:39:42 by Hibernate Tools 5.2.8.Final

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Usuarios generated by hbm2java
 */
@Entity
@Table(name = "usuarios", catalog = "hlanz_bank")
public class Usuarios implements java.io.Serializable {

	private Integer idUsuario;
	private String nombre;
	private String apellidos;
	private String dni;
	private Integer telefono;
	private String email;
	private int pin;
	private Set<Cuentas> cuentases = new HashSet<Cuentas>(0);

	public Usuarios() {
	}

	public Usuarios(String nombre, String apellidos, String dni, int pin) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.dni = dni;
		this.pin = pin;
	}

	public Usuarios(String nombre, String apellidos, String dni, Integer telefono, String email, int pin,
			Set<Cuentas> cuentases) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.dni = dni;
		this.telefono = telefono;
		this.email = email;
		this.pin = pin;
		this.cuentases = cuentases;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "id_usuario", unique = true, nullable = false)
	public Integer getIdUsuario() {
		return this.idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	@Column(name = "nombre", nullable = false, length = 50)
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Column(name = "apellidos", nullable = false, length = 50)
	public String getApellidos() {
		return this.apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	@Column(name = "dni", nullable = false, length = 50)
	public String getDni() {
		return this.dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	@Column(name = "telefono")
	public Integer getTelefono() {
		return this.telefono;
	}

	public void setTelefono(Integer telefono) {
		this.telefono = telefono;
	}

	@Column(name = "email", length = 50)
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "pin", nullable = false)
	public int getPin() {
		return this.pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "usuarios")
	public Set<Cuentas> getCuentases() {
		return this.cuentases;
	}

	public void setCuentases(Set<Cuentas> cuentases) {
		this.cuentases = cuentases;
	}

}
