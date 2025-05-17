import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Reserva } from '../../models/reserva';
import { ReservaService } from '../../services/reservas/reserva.service';

@Component({
  selector: 'app-reservas',
  imports: [NgFor],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  reservas: Reserva[] = [];
  constructor(private http: ReservaService) { }
/*
  ngOnInit(): void {
    const idUserStr = localStorage.getItem('idUsuario');
    if (!idUserStr) {
      alert("Debes iniciar sesion");
      return;
    }
    const idUsuario = parseInt(idUserStr);
    this.http.getByUser(idUsuario).subscribe({
      next: (response) => {
        for (let reserva of response) {
          this.reservas.push(new Reserva(reserva.id, idUsuario, reserva.cuarto_id, reserva.inicio, reserva.fin));
        }
      },
      error: (error) => {
        alert("Error al cargar las reservas");
      }
    })
  } */
}
