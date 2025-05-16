import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nombre: string = '';
  apellido: string = '';
  fechaNacimiento:  Date | null = null;
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  rol: number = 1;
  fechaInputType: string = 'text';
  constructor(private registroService: RegistroService, private router: Router) {}
  cambiarTipo(tipo: string){
    this.fechaInputType = tipo;
  }
  restaurarTipo(){
    if(!this.fechaNacimiento) {
      this.fechaInputType = 'text';
    }
  }
  register() {
    if(!this.fechaNacimiento) {
      alert('Por favor selecciona una fecha de nacimiento válida');
      return;
    }
    if(this.contrasena != this.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

   this.registroService.register(this.nombre, this.apellido, this.correo, this.contrasena, 
    this.confirmarContrasena, this.fechaNacimiento, this.rol).subscribe({
      next: (response) => {
      localStorage.setItem("tokenAcceso", response.access_token);
      localStorage.setItem("idUsuario", response.user_id);
      localStorage.setItem("nombreUsuario", response.user_name);
      localStorage.setItem("rolUsuario", response.rol);
      localStorage.setItem("emailUsuario", response.user_email);
      this.router.navigate(["/pensiones"]);
    }, error: (error) => {
      alert('Error al momento de registrarse ' + error);
    }
  });
  }
}
