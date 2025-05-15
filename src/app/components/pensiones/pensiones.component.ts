import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pensiones',
  imports: [RouterModule, NgFor],
  standalone: true,
  templateUrl: './pensiones.component.html',
  styleUrl: './pensiones.component.css'
})
export class PensionesComponent {
pensiones = [
  {
    imagen: 'assets/pension-fondo.jpg',
    tipo: 'apartaestudio',
    precio: 450000
  },
  {
    imagen: 'assets/pension-fondo.jpg',
    tipo: 'apartamento',
    precio: 600000
  },
  {
    imagen: 'assets/pension-fondo.jpg',
    tipo: 'casa',
    precio: 750000
  }
];

  userName: string = '';
  ngOnInit(): void {
    this.userName = localStorage.getItem('nombreUsuario') || 'Visitante';
  }

}
