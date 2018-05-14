import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/model/usuario.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario : Usuario;
  constructor(private userService : UserService) { }

  modificarUsuario(){
    this.userService.modificar(this.usuario);
  }
  ngOnInit() {
    this.userService.usuarioId(Number.parseInt(localStorage.getItem("user"))).
      subscribe(data => this.usuario = data);
  }

}
