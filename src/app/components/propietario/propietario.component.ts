import { Component } from '@angular/core';
import { Pension } from '../../models/pension';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { PensionService } from '../../services/pensiones/pension.service';
@Component({
  selector: 'app-propietario',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './propietario.component.html',
  styleUrl: './propietario.component.css'
})
export class PropietarioComponent {
  constructor(private servicio: PensionService) {}
  pensiones: Pension[] = [];
  imagen = 'assets/pension-fondo.jpg';
  

  ngOnInit(): void {
    const idPropietarioStr = localStorage.getItem('idUsuario');
    if(!idPropietarioStr) {
      alert('No se encontro el ID del propietario');
      return ;
    }
    const idPropietario = parseInt(idPropietarioStr);
    this.servicio.filterByPropietario(idPropietario).subscribe({
      next: (response) => {
        for (let pension of response) {
          this.pensiones.push(new Pension(pension.id, pension.esambientefamiliar, pension.escupocompleto, pension.direccion, "", pension.descripcion));
        }
      },
      error: (error) => {
        console.log(error);
        alert("Hubo un error al cargar las pensiones");
      }
    });
  }
 
}

