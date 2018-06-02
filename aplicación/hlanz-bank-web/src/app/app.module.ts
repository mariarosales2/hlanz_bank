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
        MatTabsModule,
        MatExpansionModule
        } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditorModule } from '@tinymce/tinymce-angular';

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
import { NoticiasService } from './shared/services/noticias.service';
import { TerminosComponent } from './terminos/terminos.component';
import { TerminosService } from './shared/services/terminos.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { BuscaPipe } from './shared/filtro.pipe';
import { TarjetasComponent } from './tarjetas/tarjetas.component';


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
    MovimientoDialogComponent,
    TerminosComponent,
    BuscaPipe,
    TarjetasComponent
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
    MatExpansionModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [UserService, CuentasService, MovimientosService, 
              AuthGuardService, AlertService, NoticiasService,
              TerminosService
            ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent, MovimientoDialogComponent, TerminosComponent]
})
export class AppModule { }
