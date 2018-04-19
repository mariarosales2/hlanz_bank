package com.hlanz.bank.ws.dto;

import java.util.Date;
import java.util.List;

import com.hlanz.bank.business.domain.Movimientos;

public class MovimientosDTO {
	
	private int id;
	private CuentasDTO cuentas;
	private Date fecha;
	private String concepto;
	private float movimiento;
	private float saldoActual;
	
	public static MovimientosDTO toDTO(Movimientos dom) {
		MovimientosDTO dto = new MovimientosDTO();
		dto.setConcepto(dom.getConcepto());
		dto.setFecha(dom.getFecha());
		dto.setId(dom.getId());
		dto.setMovimiento(dom.getMovimiento());
		dto.setSaldoActual(dom.getSaldoActual());
		
		return dto;
	}
	
	public static MovimientosDTO[] toDTOListado(List<Movimientos> dom) {
		MovimientosDTO[] listDTO = new MovimientosDTO[dom.size()];
		int i = 0;
		
		for (Movimientos m : dom) {
			listDTO[i++] = MovimientosDTO.toDTO(m);
		}
		
		return listDTO;
	}
	
	public static Movimientos toDomain(MovimientosDTO dto) {
		Movimientos dom = new Movimientos();
		dom.setConcepto(dto.getConcepto());
		dom.setCuentas(CuentasDTO.toDomain(dto.getCuentas()));
		dom.setMovimiento(dto.getMovimiento());
		
		return dom;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public CuentasDTO getCuentas() {
		return cuentas;
	}
	public void setCuentas(CuentasDTO cuentas) {
		this.cuentas = cuentas;
	}
	public String getConcepto() {
		return concepto;
	}
	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}
	public float getMovimiento() {
		return movimiento;
	}
	public void setMovimiento(float movimiento) {
		this.movimiento = movimiento;
	}
	public float getSaldoActual() {
		return saldoActual;
	}
	public void setSaldoActual(float saldoActual) {
		this.saldoActual = saldoActual;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	
}
