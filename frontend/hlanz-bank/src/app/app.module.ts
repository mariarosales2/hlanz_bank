import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTableModule
        } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule, Http } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SaldosComponent } from './saldos/saldos.component';
import { CuentasService } from './cuentas.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SaldosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,

    AppRoutingModule
  ],
  providers: [CuentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
