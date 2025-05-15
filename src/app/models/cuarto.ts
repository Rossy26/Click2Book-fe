export class Cuarto {
    private id: number;
    private valorMensual: number;
    private capacidad: number;
    private tieneAire: boolean;
    private descripcion: string;

    public constructor(id: number, valorMensual: number, capacidad: number, tieneAire: boolean, descripcion: string) {
        this.id = id;
        this.valorMensual = valorMensual;
        this.capacidad = capacidad;
        this.tieneAire = tieneAire;
        this.descripcion = descripcion;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getValorMensual(): number {
        return this.valorMensual;
    }

    public setValorMensual(valorMensual: number): void {
        this.valorMensual = valorMensual;
    }

    public getCapacidad(): number {
        return this.capacidad;
    }

    public setCapacidad(capacidad: number): void {
        this.capacidad = capacidad;
    }

    public getTieneAire(): boolean {
        return this.tieneAire;
    }

    public setTieneAire(tieneAire: boolean): void {
        this.tieneAire = tieneAire;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
}