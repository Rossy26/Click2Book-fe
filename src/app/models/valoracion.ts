export class Valoracion {
    private id: number;
    private valoracion: number;
    private id_persona: number;
    private id_pension: number;

    public constructor(id: number, valoracion: number, id_persona: number, id_pension: number) {
        this.id = id;
        this.valoracion = valoracion;
        this.id_pension = id_pension;
        this.id_persona = id_persona;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }
    

    public getValoracion(): number {
        return this.valoracion;
    }

    public setValoracion(valoracion: number): void {
        this.valoracion = valoracion;
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