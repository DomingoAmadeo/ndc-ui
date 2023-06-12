import { PolizasCoberturas } from "./polizasCoberturas";

export interface Poliza {
  id: number;
  nombre: string;
  polizasCoberturas: PolizasCoberturas[];
}