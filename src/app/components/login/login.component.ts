import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router){}
  login() {
    if (!this.email || !this.password) {
      alert('Por favor completa todos los campos');
      return;
    }
    this.loginService.login(this.email, this.password).subscribe(response => {
      localStorage.setItem("tokenAcceso", response.access_token);
      localStorage.setItem("nombreUsuario", response.user_name);
      this.router.navigate(["/pensiones"]);
      return;
    });
    alert('¡Error en el inicio de sesión!');
  }
}
