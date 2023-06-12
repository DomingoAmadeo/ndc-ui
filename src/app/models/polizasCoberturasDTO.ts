import { Cobertura } from "./cobertura";
import { Poliza } from "./poliza";

export interface PolizasCoberturasForAddDTO {
  polizaId: number;
  coberturaId: number;
  montoAsegurado: number;
}

export interface PolizasCoberturasForUpdateDTO extends PolizasCoberturasForAddDTO {
  id: number;
  poliza: Poliza;
  cobertura: Cobertura;
}