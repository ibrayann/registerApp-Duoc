import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, verificar las credenciales del usuario

    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Autenticación exitosa, navega a otra página
      this.router.navigate(['/home']);
    } else {
      // Autenticación fallida, muestra un mensaje de error
      console.error('Credenciales incorrectas');
    }
  }
}
