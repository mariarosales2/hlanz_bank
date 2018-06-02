import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/model/usuario.model';
import { UserService } from '../shared/services/user.service';
import { AlertService } from '../shared/services/alert.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario : Usuario = new Usuario();
  constructor(private userService : UserService, private alertService : AlertService) { 
    this.userService.usuarioId(Number.parseInt(localStorage.getItem("user")))
      .subscribe((data : Usuario) => this.usuario = data);
  }

  modificarUsuario(){
    NavComponent.loading = true;
    this.userService.modificar(this.usuario)
      .subscribe(
        data => {
          this.alertService.openDialog("Correcto","Tus datos se han modificado correctamente"),
          NavComponent.loading = false;
        },
        error => {
          this.alertService.openDialog("Error","Tus datos no se han podido modificar correctamente"),
          NavComponent.loading = false;
        }
    );
  }

  ngOnInit() {
    
  }

}
