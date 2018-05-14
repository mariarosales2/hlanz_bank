package com.hlanz.bank.common;

public interface BaseDAO {
	
	public Object crear (Object o);
	
	public <T> Object buscarId (Object id, Class<T> clase );
	
	public Object merge (Object o);

}
