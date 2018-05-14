import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatProgressBarModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTabsModule
        } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpModule, Http } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { CuentasService } from './shared/services/cuentas.service';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FooterComponent } from './footer/footer.component';
import { MovimientosService } from './shared/services/movimientos.service';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { RegistroComponent } from './registro/registro.component';
import { AlertComponent } from './alert/alert.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { UserService } from './shared/services/user.service';
import { MovimientoDialogComponent } from './movimiento-dialog/movimiento-dialog.component';
import { AlertService } from './shared/services/alert.service';
// import { JwtHelperService } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CuentasComponent,
    MovimientosComponent,
    NoticiasComponent,
    FooterComponent,
    TransferenciaComponent,
    RegistroComponent,
    AlertComponent,
    PerfilComponent,
    AdminComponent,
    MovimientoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [UserService, CuentasService, MovimientosService, AuthGuardService, AlertService],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent, MovimientoDialogComponent]
})
export class AppModule { }
