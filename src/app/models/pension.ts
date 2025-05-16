export class Pension {
    private id: number;
    private esAmbienteFamiliar: boolean;
    private esCupoCompleto: boolean;
    private direccion: string;
    private tipo: string;
    private descripcion: string;

    public constructor(id: number, esAmbienteFamiliar: boolean, esCupoCompleto: boolean, direccion: string, tipo: string, descripcion: string) {
      this.id = id;
      this.esAmbienteFamiliar = esAmbienteFamiliar;
      this.esCupoCompleto = esCupoCompleto;
      this.direccion = direccion;
      this.tipo = tipo;
      this.descripcion = descripcion;
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getEsAmbienteFamiliar(): boolean {
      return this.esAmbienteFamiliar;
    }
  
    public getDireccion(): string {
      return this.direccion;
    }
  
    public getTipo(): string {
      return this.tipo;
    }

    public getDescripcion(): string {
      return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
      this.descripcion = descripcion;
    }
  
    public setId(id: number) : void {
      this.id = id;
    }
  
    public setEsAmbienteFamiliar(esAmbienteFamiliar: boolean) : void {
      this.esAmbienteFamiliar = esAmbienteFamiliar;
    }
  
    public setDireccion(direccion: string) : void {
      this.direccion = direccion;
    }
  
    public setTipo(tipo: string) : void {
      this.tipo = tipo;
    }

    public getEscupoCompleto(): boolean {
      return this.esCupoCompleto;
    }

    public setEscupoCompleto(esCupoCompleto: boolean): void {
      this.esCupoCompleto =  esCupoCompleto;
    }
}