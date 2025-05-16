export class Review {
    private id: number;
    private contenido: string;
    private id_persona: number;
    private id_pension: number;

    public constructor(id: number, contenido: string, id_persona: number, id_pension: number) {
        this.id = id;
        this.contenido = contenido;
        this.id_pension = id_pension;
        this.id_persona = id_persona;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }
    

    public getContenido(): string {
        return this.contenido;
    }

    public setContenido(contenido: string): void {
        this.contenido = contenido;
    }

    public getIdPension(): number {
        return this.id_pension;
    }

    public setIdPension(id: number): void {
        this.id_pension = id;
    }

    public getIdUsuario(): number {
        return this.id_persona;
    }

    public setIdUsuario(id: number): void {
        this.id_persona = id;
    }
}