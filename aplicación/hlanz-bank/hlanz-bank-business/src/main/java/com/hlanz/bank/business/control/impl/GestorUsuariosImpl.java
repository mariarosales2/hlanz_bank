package com.hlanz.bank.business.control.impl;

import java.io.UnsupportedEncodingException;
import java.util.Properties;

import javax.inject.Inject;
import javax.inject.Named;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.hlanz.bank.business.dao.CuentasDAO;
import com.hlanz.bank.business.dao.UsuariosDAO;
import com.hlanz.bank.business.domain.Cuentas;
import com.hlanz.bank.business.domain.Usuarios;

@Named
public class GestorUsuariosImpl implements com.hlanz.bank.business.control.GestorUsuarios{

	@Inject
	UsuariosDAO usuarioDAO;
	
	@Inject
	CuentasDAO cuentasDAO;
	
	@Override
	public Usuarios autenticarUser(Usuarios usuario) {
		return usuarioDAO.autenticarUser(usuario.getDni(), usuario.getPin());
	}
	
	@Override
	public void registrarUsuario(Usuarios usuario) {
		try {
		if(usuarioDAO.buscarPorDni(usuario.getDni()) == null){
			usuario.setPin((int) (Math.random()*9999)+1);
			Usuarios usuarioBD = usuarioDAO.crearUsuario(usuario);
			
			int random = (int)(Math.random()*9999)+1;
			int random2 = (int)(Math.random()*9999)+1;
			int random3 = (int)(Math.random()*9999)+1;
			int random4 = (int)(Math.random()*9999)+1;
			
			Cuentas cuenta = new Cuentas();
			cuenta.setNumero("ES04"+random+random2+random3+random4);
			cuenta.setSaldo(0);
			cuenta.setUsuarios(usuarioBD);
			
			cuentasDAO.crearCuenta(cuenta);
			sendMail(usuarioBD);
		} else 
			new RuntimeException("Ya hay un usuario con ese DNI");
		} catch(RuntimeException e) {
			throw e;
		}
	}

	@Override
	public void modificarUsuario(Usuarios usuario) {
		Usuarios usuarioBD = usuarioDAO.buscarPorId(usuario.getIdUsuario());
		usuarioBD.setNombre(usuario.getNombre());
		usuarioBD.setApellidos(usuario.getApellidos());
		usuarioBD.setDni(usuario.getDni());
		usuarioBD.setTelefono(usuario.getTelefono());
		usuarioBD.setEmail(usuario.getEmail());
		
		usuarioDAO.modificarUsuario(usuarioBD);	
	}
	
	public void sendMail(Usuarios usuario) {
		 String FROM = "noreply@hlanzbank.com";
		 String FROMNAME = "Hlanz Bank";
		 String TO = usuario.getEmail();
		 String SMTP_USERNAME = "hlanzbank.noreply@gmail.com";
		 String SMTP_PASSWORD = "hl4nzB4nk";
		 String HOST = "smtp.gmail.com";
		 int PORT = 587;
		    
		 String SUBJECT = "Bienvenido a Hlanz Bank";
		    
		 String BODY = 
				 "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width='100%' style=\"font-size:16px; padding:'20px'\">"
					 + "<tr style=\"text-align:center;color:lightgrey\"> <td bgcolor=\"#70bbd9\"> <h3>Bienvenido a Hlanz Bank " + usuario.getNombre() + " " + usuario.getApellidos()
					 + "</h3></td></tr>"
					 + "<tr>"
						 + "<td style=\"padding: '40px 30px 40px 30px;'\">"
						 +" <table width=\"100%\">"
						 +"<tr> <td style=\"padding: '40px 30px 40px 30px;'\" colspan=2>"
						 +" Ya puedes acceder a la banca online con los siguientes datos :"
						 +" </td></tr>"
						 + "<tr width=80% style=\";margin:'0 auto 0 auto'\"><td style=\"padding: '40px 30px 40px 30px';text-align:center\">USUARIO</td>"
						 + "<td> <b>"+usuario.getDni() + "</b></td></tr>"
						 + "<tr width=80% style=\";margin:'0 auto 0 auto';text-align:center\"><td style=\"padding: '40px 30px 40px 30px;'\">PIN </td>"
						 + "<td><b>"+ usuario.getPin() + "</b></td></tr>"
				 + "</table> </tr>"
				 + "</table>";
		  


	    	Properties props = System.getProperties();
	    	props.put("mail.transport.protocol", "smtp");
	    	props.put("mail.smtp.port", PORT); 
	    	props.put("mail.smtp.starttls.enable", "true");
	    	props.put("mail.smtp.auth", "true");
	    	
	    	try {
		    	Session session = Session.getDefaultInstance(props);
		    	
		        MimeMessage msg = new MimeMessage(session);
		        msg.setFrom(new InternetAddress(FROM, FROMNAME));
		        msg.setRecipient(Message.RecipientType.TO, new InternetAddress(TO));
		        msg.setSubject(SUBJECT);
		        msg.setContent(BODY,"text/html; charset=utf-8");
		            
		        // Create a transport.
		        Transport transport = session.getTransport();
		                    
		        // Send the message.
	            System.out.println("Enviando...");
	            transport.connect(HOST, SMTP_USERNAME, SMTP_PASSWORD);
	        	
	            transport.sendMessage(msg, msg.getAllRecipients());
	            System.out.println("Email enviado!");
	            
	            transport.close();
	        } catch (MessagingException ex) {
	            System.out.println("El email no ha sido enviado.");
	            System.out.println("Error message: " + ex.getMessage());
	        } catch (UnsupportedEncodingException e) {
	        	e.printStackTrace();
	        }
	}

}
