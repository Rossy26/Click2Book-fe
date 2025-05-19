import { Imagen } from "./imagen";

export class Pension {
    id: number;
    esAmbienteFamiliar: boolean;
    esCupoCompleto: boolean;
    direccion: string;
    tipo: string;
    descripcion: string;
	imagenes: Imagen[];
	barrio_id: number;
	tipopropiedad_id: number;;
	user_id: number;

    public constructor(id: number, user_id: number, esAmbienteFamiliar: boolean, esCupoCompleto: boolean, direccion: string, tipo: string, descripcion: string, barrio_id: number, tipopropiedad_id: number) {
		this.id = id;
		this.user_id = user_id;
		this.esAmbienteFamiliar = esAmbienteFamiliar;
		this.esCupoCompleto = esCupoCompleto;
		this.direccion = direccion;
		this.tipo = tipo;
		this.descripcion = descripcion;
		this.imagenes = [];
		this.barrio_id = barrio_id;
		this.tipopropiedad_id = tipopropiedad_id;
	}

	public addImgen(imagen: Imagen) {
		this.imagenes.push(imagen);
	}
}