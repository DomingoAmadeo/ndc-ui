import { Component, Input, OnInit } from '@angular/core';
import { Cobertura } from '../models/cobertura';
import { Poliza } from '../models/poliza';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PolizasCoberturasDetalleForAddDTO } from '../models/polizasCoberturasDetalleDTO';
import { PolizasCoberturasService } from '../services/polizasCoberturas.service';
import { Detalle } from '../models/detalle';
import { PolizaService } from '../services/poliza.service';

@Component({
  selector: 'app-polizas-coberturas',
  templateUrl: './polizas-coberturas.component.html',
  styleUrls: ['./polizas-coberturas.component.css']
})
export class PolizasCoberturasComponent implements OnInit {
  @Input() coberturas: Cobertura[];
  @Input() polizas: Poliza[];

  additionalFields: Detalle[] = [];
  amounts$ = new BehaviorSubject<number>(0);
  totalAmount$: Observable<number>;
  results$: Observable<any>;
  updateTrigger$= new BehaviorSubject<number>(1);

  polizasCoberturasFormGroup = new FormGroup({
    polizaId: new FormControl(null, [Validators.required, Validators.min(0)]),
    mandatoryCoberturaId: new FormControl(null, Validators.required),
    mandatoryAmount: new FormControl(null, Validators.required),
  });

  constructor(
    private polizaService: PolizaService,
    private polizasCoberturasService: PolizasCoberturasService
  ) { }

  ngOnInit(): void {
    this.totalAmount$ = this.amounts$.pipe(
      map( n => {
        n = this.polizasCoberturasFormGroup.controls['mandatoryAmount'].value;
        this.additionalFields.forEach(field => {
          n += this.polizasCoberturasFormGroup.controls[field.montoAsegurado].value;          
        });
        return n ?? 0;
      })
    );
    
    this.results$ = this.updateTrigger$.pipe(
      switchMap(() => this.polizaService.getAllPolizaDetalle().pipe(
        catchError((error) => {
          return of(null);
        }),
        tap(res => console.log(res)
        )
      )),
      // tap( res => this.polizaArray.emit(res))
    );
  }

  addField(){
    let length = this.additionalFields.length;
    let cobertura = `${length}-cobertura`;
    let amount = `${length}-amount`;
    this.additionalFields.push({
      coberturaId: cobertura,
      montoAsegurado: amount
    });
    this.polizasCoberturasFormGroup.addControl(cobertura, new FormControl(null, Validators.required));
    this.polizasCoberturasFormGroup.addControl(amount, new FormControl(null, Validators.required));
  }

  removeField(){
    let length = this.additionalFields.length - 1;
    let cobertura = `${length}-cobertura`;
    let amount = `${length}-amount`;
    this.additionalFields.pop();
    this.polizasCoberturasFormGroup.removeControl(cobertura);
    this.polizasCoberturasFormGroup.removeControl(amount);
  }

  updateAmount(){
    this.amounts$.next(0);
  }

  submit(){
    let detalle: Detalle[] = [
      {
        coberturaId: this.polizasCoberturasFormGroup.controls['mandatoryCoberturaId'].value,
        montoAsegurado: this.polizasCoberturasFormGroup.controls['mandatoryAmount'].value
      }
    ];
    this.additionalFields.forEach(field => {
      detalle.push({
        coberturaId: this.polizasCoberturasFormGroup.controls[field.coberturaId].value,
        montoAsegurado: this.polizasCoberturasFormGroup.controls[field.montoAsegurado].value
      });
    });
    let polizasCoberturasDetalle: PolizasCoberturasDetalleForAddDTO = {
      polizaId: this.polizasCoberturasFormGroup.controls['polizaId'].value,
      detalle: detalle
    }
    this.polizasCoberturasService.addPolizasCoberturasDetalle(polizasCoberturasDetalle).subscribe((res) =>{
      this.updateTrigger$.next(0);
      }, (err) =>{ console.log('error');}
    );
  }
}
