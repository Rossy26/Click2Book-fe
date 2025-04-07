import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensiones',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './pensiones.component.html',
  styleUrl: './pensiones.component.css'
})
export class PensionesComponent {
  userName: string = '';
  ngOnInit(): void {
    this.userName = localStorage.getItem('nombreUsuario') || 'Visitante';
  }

}
