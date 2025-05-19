import { Component, inject, Injectable, NgModule } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  loginService = inject(LoginService);
  router = inject(Router);

  correo:string = localStorage.getItem("emailUsuario") || "";
  nombre:string = localStorage.getItem("nombreUsuario") || "";
  rol:string = localStorage.getItem("rolUsuario") || "";

  
  nuevoNombre:string = this.nombre;
  editando = false;

  eliminar() {
    const confirmacion = confirm('Seguro que deseas eliminar tu cuenta?');
    if (!confirmacion) {
      return;
    }
    this.loginService.deleteUser().subscribe({
      next: () => {
        localStorage.clear()
        this.router.navigate(['/login'])
        alert('Cuenta eliminada exitosamente');
      }, error: () => {
        alert("Hubo un erro al eliminar tu cuenta");
      }
    });

  }

  editar() {
    this.editando = true;
  }
  cancelar() {
    this.editando = false;
    this.nuevoNombre = this.nombre;
  }
  guardar() {
    if (this.nuevoNombre == this.nombre) {
      alert('Debes escribir un nombre distino');
      return;
    }
    this.loginService.updateUser({name: this.nuevoNombre}).subscribe({
      next: (response) => {
        this.nombre = this.nuevoNombre;
        localStorage.setItem('nombreUsuario', this.nombre);
        this.editando = false;
        alert('Usuario actualizado correctamente');
      },
      error:() => {
        alert('Error al acutualizar el usuario');
      }
    });
  }
  
  logout() {
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
