export class Barrio {
    private id: number;
    private nombre: string;
    private ciudad_id: number;
    
    public constructor(id: number, nombre: string, ciudad_id: number) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad_id = ciudad_id;
    }

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }
}