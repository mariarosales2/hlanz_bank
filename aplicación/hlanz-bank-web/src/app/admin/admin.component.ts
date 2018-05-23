import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/model/usuario.model';
import { Noticias } from '../shared/model/noticias.model';
import { UserService } from '../shared/services/user.service';
import { AlertComponent } from '../alert/alert.component';
import { AlertService } from '../shared/services/alert.service';
import { NoticiasService } from '../shared/services/noticias.service';
import { BuscaPipe } from '../shared/filtro.pipe';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  usuarios : Usuario[] = [];
  usuario : Usuario = new Usuario();
  buscaU : String = null;
  
  noticias : Noticias[] = [];
  noticia : Noticias = new Noticias();
  buscaN : String = null;

  servicio : any;
  metodo : any;

  modificar : Boolean = false;
  constructor(private usuariosService : UserService, 
    private noticiasService : NoticiasService,
    private alerta : AlertService) {}

  modificarObj(objeto : any){
    this.usuario = objeto;
    this.noticia = objeto;
    this.modificar = true;
  }

  enviar(objeto : any){
    if(this.modificar){
      if(objeto == this.usuario) this.servicio = this.usuariosService;
      else this.servicio = this.noticiasService;

      this.servicio.modificar(objeto).subscribe(
        ok => {
          this.alerta.openDialog("Correcto", "Se ha modificado correctamente");
          this.usuario = null;
          this.noticia = null;
          this.modificar = false;
        }, error => {
          this.alerta.openDialog("Error", "No se ha podido modificar. \n Inténtelo de nuevo.");
          this.usuario = null;
          this.noticia = null;
          this.modificar = false;
      });
    }else{
      if(objeto == this.usuario) this.servicio = this.usuariosService;
      else this.servicio = this.noticiasService;

      this.servicio.crear(objeto).subscribe(
        ok => {
          this.alerta.openDialog("Correcto", "Se ha creado correctamente");
          this.usuario = null;
          this.noticia = null;
          this.modificar = false;
        }, error => {
          this.alerta.openDialog("Error", "No se ha podido crear. \n Inténtelo de nuevo.");
          objeto = null;
          this.modificar = false;
      });
    }
  }
  

  ngOnInit() {
    this.usuariosService.usuarios().subscribe((data : Usuario[]) => this.usuarios = data);
    this.noticiasService.getNoticias().subscribe(data => this.noticias = data);
  }

}
