import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { CoberturaService } from '../services/cobertura.service';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { CoberturaForAddDTO, CoberturaForUpdateDTO } from '../models/coberturaDTO';
import { Cobertura } from '../models/cobertura';

@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.css']
})
export class CoberturasComponent implements OnInit {
  @Output() coberturaArray = new EventEmitter();

  nombreCobertura: string = '';
  results$: Observable<any>;
  updateTrigger$= new BehaviorSubject<number>(1);
  editId: number = 0;
  editName: string = '';

  constructor(
    private coberturaService: CoberturaService,
  ) { }

  ngOnInit(): void {    
    this.results$ = this.updateTrigger$.pipe(
      switchMap(() => this.coberturaService.getAllCobertura().pipe(
        catchError((error) => {
          return of(null);
        })
      )),
      tap( res => this.coberturaArray.emit(res))
    );
  }

  submitCobertura(){
    let newCobertura: CoberturaForAddDTO = { nombre: this.nombreCobertura };
    this.coberturaService.addCobertura(newCobertura).subscribe((result) => {
        this.nombreCobertura = '';
        this.updateTrigger$.next(2);
      }, (err) => { console.log("error"); }
    );
  }

  deleteCobertura(id: number){
    this.coberturaService.deleteCoberturaById(id).subscribe((result) => {
        this.updateTrigger$.next(3);
      }, (err) => { console.log("error"); }
    );
  }

  openEdit(cobertura: Cobertura){
    this.editId = cobertura.id;
    this.editName = cobertura.nombre;
  }

  cancelEdit(){
    this.editId = 0;
    this.editName = '';
  }

  submitEdit(){
    let updatedCobertura: CoberturaForUpdateDTO = {
      id: this.editId,
      nombre: this.editName
    };

    this.coberturaService.updateCobertura(updatedCobertura).subscribe((result) => {
        this.updateTrigger$.next(3);
        this.cancelEdit();
      }, (err) => { console.log("error"); }
    );
  }
}
