package com.hlanz.bank.business.dao;

import com.hlanz.bank.business.domain.Usuarios;

public interface UsuariosDAO {

	public Usuarios autenticarUser(String dni, int pin);
}
