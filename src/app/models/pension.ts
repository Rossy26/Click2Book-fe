export class Pension {
    id: number;
    esAmbienteFamiliar: boolean;
    esCupoCompleto: boolean;
    direccion: string;
    tipo: string;
    descripcion: string;

    public constructor(id: number, esAmbienteFamiliar: boolean, esCupoCompleto: boolean, direccion: string, tipo: string, descripcion: string) {
      this.id = id;
      this.esAmbienteFamiliar = esAmbienteFamiliar;
      this.esCupoCompleto = esCupoCompleto;
      this.direccion = direccion;
      this.tipo = tipo;
      this.descripcion = descripcion;
    }

}