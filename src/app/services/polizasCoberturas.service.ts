import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PolizasCoberturasDetalleForAddDTO } from '../models/polizasCoberturasDetalleDTO';

@Injectable({
  providedIn: 'root',
})
export class PolizasCoberturasService {
  constructor(
    private apiService: ApiService
    ) {}

  addPolizasCoberturasDetalle(newPolizasCoberturasDetalle: PolizasCoberturasDetalleForAddDTO){
    return this.apiService.post('/PolizasCoberturas/Detalle', newPolizasCoberturasDetalle);
  }
}