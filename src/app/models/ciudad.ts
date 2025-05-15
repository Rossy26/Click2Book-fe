export class Ciudad {
    private id: number;
    private nombre: string;

    public constructor(id: number, nombre:string) {
        this.id = id;
        this.nombre = nombre;
    }

    public getId(): number {
        return this.id;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    
}