export interface CoberturaForAddDTO {
    nombre: string;
}

export interface CoberturaForUpdateDTO extends CoberturaForAddDTO {
    id: number;
}

export interface CoberturaDTO extends CoberturaForUpdateDTO{
    monto: number;
}