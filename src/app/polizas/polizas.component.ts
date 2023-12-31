import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PolizaService } from '../services/poliza.service';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { PolizaForAddDTO, PolizaForUpdateDTO } from '../models/polizaDTO';
import { Poliza } from '../models/poliza';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {
  @Output() polizaArray = new EventEmitter();

  nombrePoliza: string = '';
  results$: Observable<any>;
  updateTrigger$= new BehaviorSubject<number>(1);
  editId: number = 0;
  editName: string = '';

  constructor(
    private polizaService: PolizaService,
  ) { }

  ngOnInit(): void {    
    this.results$ = this.updateTrigger$.pipe(
      switchMap(() => this.polizaService.getAllPoliza().pipe(
        catchError((error) => {
          return of(null);
        })
      )),
      tap( res => this.polizaArray.emit(res))
    );
  }

  submitPoliza(){
    let newPoliza: PolizaForAddDTO = { nombre: this.nombrePoliza };
    this.polizaService.addPoliza(newPoliza).subscribe((result) => {
        this.nombrePoliza = '';
        this.updateTrigger$.next(0);
      }, (err) => { console.log('error'); }
    );
  }

  deletePoliza(id: number){
    this.polizaService.deletePolizaById(id).subscribe((result) => {
        this.updateTrigger$.next(0);
      }, (err) => { console.log('error'); }
    );
  }

  openEdit(poliza: Poliza){
    this.editId = poliza.id;
    this.editName = poliza.nombre;
  }

  cancelEdit(){
    this.editId = 0;
    this.editName = '';
  }

  submitEdit(){
    let updatedPoliza: PolizaForUpdateDTO = {
      id: this.editId,
      nombre: this.editName
    };

    this.polizaService.updatePoliza(updatedPoliza).subscribe((result) => {
        this.updateTrigger$.next(3);
        this.cancelEdit();
      }, (err) => { console.log("error"); }
    );
  }
}
