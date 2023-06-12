import { PolizasCoberturas } from "./polizasCoberturas";

export interface Cobertura {
    id: number;
    nombre: string;
    polizasCoberturas: PolizasCoberturas[];
}