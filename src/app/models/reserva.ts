export class Reserva {
    private id: number;
    private pago_id: number;
    private tipo_id: number;
    private user_id: number;
    private cuarto_id: number;
    private inicio: Date;
    private fin: Date;

    public constructor(id: number, user_id: number, cuarto_id: number, inicio: Date, fin: Date) {
        this.id = id;
        this.pago_id = 0;
        this.tipo_id = 1;
        this.user_id = user_id;
        this.cuarto_id = cuarto_id;
        this.inicio = inicio;
        this.fin = fin;
    }

    public getId(): number {
        return this.id;
    }
    
    public setId(id: number): void {
        this.id = id;
    }

    public getPago(): number {
        return this.pago_id;
    }

    public setPago(pago: number): void {
        this.pago_id = pago;
    }

    public getTipo(): number {
        return this.tipo_id;
    }

    public setTipo(tipo: number): void {
        this.tipo_id = tipo;
    }

    public getUser(): number {
        return this.user_id;
    }
    
    public setUser(user: number): void {
        this.user_id = user;
    }
    

    public getCuarto(): number {
        return this.cuarto_id;
    }
    
    public setCuarto(cuarto: number): void {
        this.cuarto_id = cuarto;
    }
    
    public getInicio(): Date {
        return this.inicio;
    }

    public setInicio(inicio: Date) {
        this.inicio = inicio;
    }
    
    public getFin(): Date {
        return this.fin;
    }

    public setFin(fin: Date) {
        this.fin = fin;
    }
}