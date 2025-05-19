import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PensionService } from '../../services/pensiones/pension.service';
import { Pension } from '../../models/pension';
import { FormsModule } from '@angular/forms';
import { Cuarto } from '../../models/cuarto';
import { CuartoService } from '../../services/cuartos/cuarto.service';
import { ReservaService } from '../../services/reservas/reserva.service';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-pensiones',
  imports: [RouterModule, NgFor, FormsModule, NgIf],
  standalone: true,
  templateUrl: './pensiones.component.html',
  styleUrl: './pensiones.component.css'
})
export class PensionesComponent {


  constructor(private servicio: PensionService, private servcioCuarto: CuartoService, private servicioReserva: ReservaService) {}
  pensiones: Pension[] = [];
  cuartos: Cuarto[] = [];
  mostrarModal: boolean = false;
  imagen = 'assets/pension-fondo.jpg';
  userName: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  cantidadPensionados: number = 0;

  ngOnInit(): void {
    this.userName = localStorage.getItem('nombreUsuario') || 'Visitante';
    this.servicio.getPensiones().subscribe({
      next: (response) => {
        for (let pension of response) {
          this.pensiones.push(new Pension(pension.id, pension.esambientefamiliar, pension.escupocompleto, pension.direccion, "", pension.descripcion));
        }
      },
      error: (error) => {
        alert("Hubo un error al cargar las pensiones");
      }
    });
  }
  
  buscarCuartos(idPropiedad: number) {
    this.servcioCuarto.filterByPropiedad(idPropiedad).subscribe({
      next: (response) => {
        // Aquí podrías filtrar manualmente por fechas si el backend no lo hace
        this.cuartos = response; 
      },
      error: (err) => {
        console.error(err);
        alert('Error al buscar cuartos');
      }
    });
  }
  
  abrirModal(idPension: number) {
    this.mostrarModal = true;
    this.cuartos = [];

    this.servcioCuarto.filterByPropiedad(idPension).subscribe({
      next: (response) => {
        for (let cuarto of response) {
          this.cuartos.push(new Cuarto(cuarto.id, 0, 0, cuarto.tieneaire, cuarto.descripcion));
        }
      },
      error: (error) => {
        alert("Error al cargar los cuartos");
      }
    });
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.fechaInicio = '';
    this.fechaFin = '';
    this.cuartos = [];
  }
  reservar(idCuarto: number) {
    const idUsuarioStr = localStorage.getItem('idUsuario');
    if (!idUsuarioStr) {
      alert('No se encontró el ID del usuario. Por favor, inicia sesión.');
      return;
    }
    const idUsuario = parseInt(idUsuarioStr);
    this.servicioReserva.createReserva(new Reserva(0, idUsuario, idCuarto, this.fechaInicio, this.fechaFin, this.cantidadPensionados)).subscribe({
      next: (response) => {
        alert('Reserva realizada con éxito');
        this.cerrarModal();
      },
      error: (error) => {
        console.log(error);
        alert('Error al realizar la reserva');
      }
    });
  }
}
