export class Cuarto {
    id: number;
    valorMensual: number;
    capacidad: number;
    tieneAire: boolean;
    descripcion: string;

    public constructor(id: number, valorMensual: number, capacidad: number, tieneAire: boolean, descripcion: string) {
        this.id = id;
        this.valorMensual = valorMensual;
        this.capacidad = capacidad;
        this.tieneAire = tieneAire;
        this.descripcion = descripcion;
    }
}