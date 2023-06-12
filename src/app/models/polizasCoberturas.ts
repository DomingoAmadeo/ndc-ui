import { Cobertura } from "./cobertura";
import { Poliza } from "./poliza";

export interface PolizasCoberturas {
  id: number;
  polizaId: number;
  coberturaId: number;
  poliza: Poliza;
  cobertura: Cobertura;
  montoAsegurado: number;
}