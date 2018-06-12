package com.hlanz.bank.ws.services.impl;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import javax.inject.Inject;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.JsonMappingException;

import com.hlanz.bank.business.control.GestorUsuarios;
import com.hlanz.bank.business.domain.Usuarios;
import com.hlanz.bank.ws.dto.FiltroUsuarioDTO;
import com.hlanz.bank.ws.dto.UsuariosDTO;
import com.hlanz.bank.ws.services.ServicioUsuarios;

public class ServicioUsuariosImpl implements ServicioUsuarios{

	@Inject
	GestorUsuarios gestorUsuarios;
	
	@Override
	public UsuariosDTO autenticar(String userEncode) {
//		HttpServletRequest req = (HttpServletRequest) request;
//		String authorization = req.getHeader("Authorization");
//	    if (authorization != null && authorization.startsWith("Basic")){
//			String userEncode = authorization.split(" ")[1];
			byte[] encode = Base64.getDecoder().decode(userEncode);
			String userDecode = new String(encode, StandardCharsets.UTF_8);
			String[] user = userDecode.split(":");
			FiltroUsuarioDTO usuario = new FiltroUsuarioDTO();
			usuario.setDni(user[0]);
			usuario.setPin(Integer.parseInt(user[1]));
			Usuarios domain = gestorUsuarios.autenticarUser(FiltroUsuarioDTO.toDomain(usuario));
		    
			return UsuariosDTO.toDTO(domain);
//	    }
	}
	
	@Override
	public UsuariosDTO[] getUsuarios() {
		return UsuariosDTO.toDTOListado(gestorUsuarios.getUsuarios());
	}
	
	@Override
	public UsuariosDTO buscarPorId(int id) {
		return UsuariosDTO.toDTO(gestorUsuarios.buscarPorId(id));
	}

	@Override
	public void crearUsuario(UsuariosDTO usuario) {
		Usuarios usuarioDom = UsuariosDTO.toDomain(usuario);
		usuarioDom.setIdUsuario(null);
		gestorUsuarios.registrarUsuario(usuarioDom);
	}
	
	@Override
	public void modificarUsuario(UsuariosDTO usuario) {
		gestorUsuarios.modificarUsuario(UsuariosDTO.toDomain(usuario));
	}

}
