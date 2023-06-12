import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { PolizasComponent } from './polizas/polizas.component';
import { PolizasCoberturasComponent } from './polizas-coberturas/polizas-coberturas.component';
import { PolizasDetalleComponent } from './polizas-detalle/polizas-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CoberturasComponent,
    PolizasComponent,
    PolizasCoberturasComponent,
    PolizasDetalleComponent
  ],
  imports: [    
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
