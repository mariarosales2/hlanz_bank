import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service';
import { AdminGuardService as AdminGuard } from './shared/services/admin-guard.service';
import { AdminComponent } from './admin/admin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'inicio', pathMatch : 'full' },
  { path: 'inicio', component: HomeComponent},
  { path: 'info/:id', component: NoticiasComponent},
  { path: 'movimientos', component: CuentasComponent, canActivate: [AuthGuard] },
  { path : 'transferencia' , component : TransferenciaComponent, canActivate: [AuthGuard]},
  { path: 'registro' , component: RegistroComponent},
  { path: 'admin', component: AdminComponent,  canActivate: [AdminGuard]},
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  { path : 'cuentas', component: TarjetasComponent},
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: []
})
export class AppRoutingModule { }
