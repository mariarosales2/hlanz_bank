package com.hlanz.bank.business.control;

import java.util.List;

import com.hlanz.bank.business.domain.Cuentas;

public interface GestorCuentas {

	public List<Cuentas> getCuentas(int id);
}
