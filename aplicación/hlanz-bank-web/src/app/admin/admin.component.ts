import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/model/usuario.model';
import { Noticias } from '../shared/model/noticias.model';
import { UserService } from '../shared/services/user.service';
import { AlertComponent } from '../alert/alert.component';
import { AlertService } from '../shared/services/alert.service';
import { NoticiasService } from '../shared/services/noticias.service';
import { BuscaPipe } from '../shared/filtro.pipe';
import { CuentasService } from '../shared/services/cuentas.service';
import { Cuentas } from '../shared/model/cuentas.model';
import { Movimientos } from '../shared/model/movimientos.model';
import { NavComponent } from '../nav/nav.component';
import { MovimientosService } from '../shared/services/movimientos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  usuarios : Usuario[] = [];
  usuario : Usuario = new Usuario();
  buscaU : String = null;
  cuentas : Cuentas[];
  transferencia : Movimientos = new Movimientos();
  
  noticias : Noticias[] = [];
  noticia : Noticias = new Noticias();
  buscaN : String = null;

  servicio : any;
  metodo : any;

  modificar : Boolean = false;

  constructor(private usuariosService : UserService, 
    private noticiasService : NoticiasService,
    private cuentasService : CuentasService,
    private movimientosService : MovimientosService,
    private alerta : AlertService) {
      this.cuentasService.cuentas()
      .subscribe(data => this.cuentas = data);
    }

  limpiar(){
    this.modificar = false;
    this.usuario = new Usuario();
    this.noticia = new Noticias();
  }
    
  modificarObj(objeto : any){
    this.usuario = objeto;
    this.noticia = objeto;
    this.modificar = true;
  }

  enviar(objeto : any){
    NavComponent.loading = true;
    if(this.modificar){
      if(objeto == this.usuario) this.servicio = this.usuariosService;
      else this.servicio = this.noticiasService;

      this.servicio.modificar(objeto).subscribe(
        ok => {
          this.alerta.openDialog("Correcto", "Se ha modificado correctamente");
          this.usuario = null;
          this.noticia = null;
          this.modificar = false;
          NavComponent.loading = false;
        }, error => {
          this.alerta.openDialog("Error", "No se ha podido modificar. \n Inténtelo de nuevo.");
          this.usuario = null;
          this.noticia = null;
          this.modificar = false;
          NavComponent.loading = false;
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
          NavComponent.loading = false;
        }, error => {
          this.alerta.openDialog("Error", "No se ha podido crear. \n Inténtelo de nuevo.");
          objeto = null;
          this.modificar = false;
          NavComponent.loading = false;
      });
    }
  }

  ingreso(){
    NavComponent.loading = true;
    this.movimientosService.transferir(this.transferencia)
      .subscribe(ok => {
        this.alerta.openDialog("Correcto", "Ingreso realizado correctamente");
        NavComponent.loading = false;
      },
      error =>{
        this.alerta.openDialog("Error", "No se ha podido realizar el ingreso correctamente");
        NavComponent.loading = false;
      })
  }
  

  ngOnInit() {
    this.usuariosService.usuarios().subscribe((data : Usuario[]) => this.usuarios = data);
    this.noticiasService.getNoticias().subscribe(data => this.noticias = data);
  }

}
