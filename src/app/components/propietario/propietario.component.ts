import { Component } from '@angular/core';
import { Pension } from '../../models/pension';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { PensionService } from '../../services/pensiones/pension.service';
import { Telefono } from '../../models/telefono';
import { Reserva } from '../../models/reserva';
import { Router, RouteReuseStrategy } from '@angular/router';
import { Ciudad } from '../../models/ciudad';
import { Barrio } from '../../models/barrio';
import { TipoPropiedad } from '../../models/tipospropiedad';
import { LocacionService } from '../../services/locaciones/locacion.service';

@Component({
  selector: 'app-propietario',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './propietario.component.html',
  styleUrl: './propietario.component.css'
})
export class PropietarioComponent {

  	constructor(private servicio: PensionService, private router: Router, private  servicioLocaciones: LocacionService) {}
  	pensiones: Pension[] = [];
  	imagen = 'assets/pension-fondo.jpg';
	
	pensionSelected: Pension = new Pension(0, 0,false, false, "", "", "", 0, 0);
  	newPension: Pension = new Pension(0, 0, false, false, "", "", "", 0, 0);
	nombre: string = "";
  	apellido: string = "";
  	telefonos: Telefono[] = [];
  	reservas: Reserva[] = [];
  	tiempo: number = 0;


	isEditing: boolean = false;
	isAdding: boolean = false;
	idCiudad: number = 0;

	cupocompletoAnterior: boolean = false;
	descripcionAnterior: string = "";
	ambienteFamiliarAnterior: boolean = false;

	ciudades: Ciudad[] = [];
	barrios: Barrio[] = [];
	tiposdePropiedad: TipoPropiedad[] = [];

  	ngOnInit(): void {
    	const nombreCache = localStorage.getItem("nombreUsuario");
    	const idPropietarioStr = localStorage.getItem('idUsuario');

		if (!nombreCache || !idPropietarioStr) {
			alert("Debes logearte");
			return;
		} else {
			this.nombre = nombreCache.toString();
		}
		const idPropietario = parseInt(idPropietarioStr);
		this.servicio.filterByPropietario(idPropietario).subscribe({
			next: (response) => {
				for (let pension of response) {
				this.pensiones.push(
					new Pension(
						pension.id,
						pension.user_id,
						pension.esambientefamiliar,
						pension.escupocompleto,
						pension.direccion,
						"",
						pension.descripcion,
						pension.barrio_id,
						pension.tipopropiedad_id
					));
				}
			},
			error: (error) => {
				console.log(error);
				alert("Hubo un error al cargar las pensiones");
			}
		});
		this.cargarCiudades();
		this.cargarTiposPropiedad();
	}

	deletePension(idPension: number) {
		this.servicio.deletePension(idPension).subscribe({
			next: (response) => {
				alert("Pension eliminada correctamente");
				location.reload();
			},
			error: (error) => {
				alert("No se pudo eliminar la pension");
			}
		});
	}

	editPension(pension: Pension) {
		this.pensionSelected = pension;
		this.cupocompletoAnterior = pension.esCupoCompleto;
		this.descripcionAnterior = pension.descripcion;
		this.ambienteFamiliarAnterior = pension.esAmbienteFamiliar;
		this.abrirModalEditing();
	}

	guardarCambios() {
		if (!this.pensionSelected) {
			this.cerrarModalEditing();
			return;
		}
		this.servicio.updatePension(this.pensionSelected).subscribe({
			next: (response) => {
				alert("Pension modificada correctamente");
			},
			error: (error) => {
				this.pensionSelected.esAmbienteFamiliar = this.ambienteFamiliarAnterior;
				this.pensionSelected.esCupoCompleto = this.cupocompletoAnterior;
				this.pensionSelected.descripcion = this.descripcionAnterior;
				this.cupocompletoAnterior = false;
				this.descripcionAnterior = "";
				this.ambienteFamiliarAnterior = false;
				alert("No se ha podido modificar la pension");
			}
		});
		this.cerrarModalEditing();
	}

	guardarNuevo() {
		const idUsuario = localStorage.getItem('idUsuario');
  		if (!idUsuario) return;
		this.newPension.user_id = parseInt(idUsuario);

		this.servicio.createPension(this.newPension).subscribe({
			next: (response) => {
				alert("Pension creada correctamente");
				location.reload();
			},
			error: (error) => {
				alert("Hubo un error al guardar la pension");
			}
		});
		this.cerrarModalAdding();
	}

	cancelarCambios() {
		this.pensionSelected.esAmbienteFamiliar = this.ambienteFamiliarAnterior;
		this.pensionSelected.esCupoCompleto = this.cupocompletoAnterior;
		this.pensionSelected.descripcion = this.descripcionAnterior;
		this.cupocompletoAnterior = false;
		this.descripcionAnterior = "";
		this.ambienteFamiliarAnterior = false;
		this.cerrarModalEditing();
	}

	cerrarModalEditing() {
		this.isEditing = false;
	}

	abrirModalEditing() {
		this.isEditing = true;
	}

	cerrarModalAdding() {
		this.isAdding = false;
	}

	abrirModalAdding() {
		this.isAdding = true;
	}

	infoPension() {
		this.router.navigate(["/pension"]);
	}

	cargarCiudades() {
	    this.servicioLocaciones.getCiudades().subscribe({
			next: (data) => this.ciudades = data,
			error: () => alert("Error al cargar barrios")
		});
	}
	
	cargarBarrios(idCiudad: number) {
		if (!idCiudad || idCiudad == 0) {
			this.barrios = [];
			return;
		}
	    this.servicioLocaciones.filtrarBarriosPorCiudad(idCiudad).subscribe({
			next: (data) => this.barrios = data,
			error: () => alert("Error al cargar barrios")
    	});
	}

	cargarTiposPropiedad() {
		this.servicio.getTiposPropiedad().subscribe({
			next: (data) => this.tiposdePropiedad = data,
			error: () => alert("Error al cargar barrios")
		});
	}
}

