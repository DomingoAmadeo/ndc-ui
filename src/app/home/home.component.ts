import { Component, OnInit, ViewChild } from '@angular/core';
import { Cobertura } from '../models/cobertura';
import { Poliza } from '../models/poliza';
import { PolizasCoberturasComponent } from '../polizas-coberturas/polizas-coberturas.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('polizasCoberturas') polizasCoberturas: PolizasCoberturasComponent;
  polizas: Poliza[];
  coberturas: Cobertura[];

  constructor() {}

  ngOnInit(): void {}

  updateCoberturas(coberturaArray: Cobertura[]){
    this.coberturas = coberturaArray;    
    this.polizasCoberturas.updateTrigger$.next(0);
  }

  updatePoliza(polizaArray: Poliza[]){
    this.polizas = polizaArray;
    this.polizasCoberturas.updateTrigger$.next(0);
  }
}
