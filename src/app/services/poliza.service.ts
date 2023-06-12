import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Poliza } from '../models/poliza';
import { PolizaForAddDTO, PolizaForUpdateDTO } from '../models/polizaDTO';
import { PolizaDetalleDTO } from '../models/polizaDetalleDTO';

@Injectable({
  providedIn: 'root',
})
export class PolizaService {
  constructor(
    private apiService: ApiService
    ) {}

  getPolizaById(id: number): Observable<Poliza> {
    return this.apiService.get('/Poliza/' + id);
  }

  getAllPoliza(): Observable<Poliza[]> {
    return this.apiService.get('/Poliza/All');
  }

  getAllPolizaDetalle(): Observable<PolizaDetalleDTO[]> {
    return this.apiService.get('/Poliza/Detalle/All');
  }

  addPoliza(newPoliza: PolizaForAddDTO){
    return this.apiService.post('/Poliza/', newPoliza);
  }

  updatePoliza(updatedPoliza: PolizaForUpdateDTO){
    return this.apiService.put('/Poliza/', updatedPoliza);
  }

  deletePolizaById(id: number) {
    return this.apiService.delete('/Poliza/' + id);
  }
}