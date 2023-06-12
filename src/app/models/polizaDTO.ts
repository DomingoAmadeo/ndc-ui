export interface PolizaForAddDTO {
    nombre: string;
}

export interface PolizaForUpdateDTO extends PolizaForAddDTO {
    id: number;
}