import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Cobertura } from '../models/cobertura';
import { CoberturaForAddDTO, CoberturaForUpdateDTO } from '../models/coberturaDTO';

@Injectable({
  providedIn: 'root',
})
export class CoberturaService {
  constructor(
    private apiService: ApiService
    ) {}

  getCoberturaById(id: number): Observable<Cobertura> {
    return this.apiService.get('/Cobertura/' + id);
  }

  getAllCobertura(): Observable<Cobertura[]> {
    return this.apiService.get('/Cobertura/All');
  }

  addCobertura(newCobertura: CoberturaForAddDTO){
    return this.apiService.post('/Cobertura/', newCobertura);
  }

  updateCobertura(updatedCobertura: CoberturaForUpdateDTO){
    return this.apiService.put('/Cobertura/', updatedCobertura);
  }

  deleteCoberturaById(id: number) {
    return this.apiService.delete('/Cobertura/' + id);
  }
}