import { Component, OnInit } from '@angular/core';
import { Cobertura } from '../models/cobertura';
import { Poliza } from '../models/poliza';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  polizas: Poliza[];
  coberturas: Cobertura[];

  constructor() {}

  ngOnInit(): void {}

  updateCoberturas(coberturaArray: Cobertura[]){
    this.coberturas = coberturaArray;    
  }

  updatePoliza(polizaArray: Poliza[]){
    this.polizas = polizaArray;
  }
}
