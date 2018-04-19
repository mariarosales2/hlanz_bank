import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent, redirectTo: "", pathMatch : "full" },
  { path: 'info/:id', component: NoticiasComponent},
  { path: 'cuentas', component: CuentasComponent},
  { path : 'movimientos' , component : MovimientosComponent },
  { path : 'transferencia' , component : TransferenciaComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
