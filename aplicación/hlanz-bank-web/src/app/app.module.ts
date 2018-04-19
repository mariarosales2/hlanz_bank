import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatProgressBarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatCheckboxModule
        } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import { HttpModule, Http } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { CuentasService } from './services/cuentas.service';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FooterComponent } from './footer/footer.component';
import { MovimientosService } from './services/movimientos.service';
import { TransferenciaComponent } from './transferencia/transferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CuentasComponent,
    MovimientosComponent,
    NoticiasComponent,
    FooterComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
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
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [CuentasService, MovimientosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
