export class Pension {
    private id: number;
    private ambienteFamiliar: boolean;
    private direccion: string;
    private tipo: string;
    private descripcion: string;

    public constructor(id: number, ambienteFamiliar: boolean, direccion: string, tipo: string, descripcion: string) {
      this.id = id;
      this.ambienteFamiliar = ambienteFamiliar;
      this.direccion = direccion;
      this.tipo = tipo;
      this.descripcion = descripcion;
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getambienteFamiliar(): boolean {
      return this.ambienteFamiliar;
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
  
    public setAmbienteFamiliar(ambienteFamiliar: boolean) : void {
      this.ambienteFamiliar = ambienteFamiliar;
    }
  
    public setDireccion(direccion: string) : void {
      this.direccion = direccion;
    }
  
    public setTipo(tipo: string) : void {
      this.tipo = tipo;
    }
}