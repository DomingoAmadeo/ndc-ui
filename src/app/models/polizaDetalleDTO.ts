import { CoberturaDTO } from "./coberturaDTO";
import { Poliza } from "./poliza";

export interface PolizaDetalleDTO extends Poliza {
  coberturas: CoberturaDTO[];
  montoTotal: number;
}