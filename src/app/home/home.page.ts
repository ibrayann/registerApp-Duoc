import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clasesHoy: any[]; // Inicializamos el array vacío

  constructor(private router: Router) {
    // Ejemplo de cómo podrías obtener las clases programadas para hoy
    this.clasesHoy = this.obtenerClasesProgramadas();
  }

  obtenerClasesProgramadas() {
    // Simulamos datos ficticios de clases programadas para hoy
    // Debes adaptar esto a tu fuente de datos real
    return [
      {
        asignatura: 'Matemáticas',
        horaInicio: '09:00 AM',
        horaFin: '10:30 AM',
        fecha: this.obtenerFechaActual(),
        alumnos: 25,
        profesorJefe: 'Juan Pérez',
      },
      {
        asignatura: 'Historia',
        horaInicio: '11:00 AM',
        horaFin: '12:30 PM',
        fecha: this.obtenerFechaActual(),
        alumnos: 30,
        profesorJefe: 'María Gómez',
      },
      {
        asignatura: 'Ciencias',
        horaInicio: '02:00 PM',
        horaFin: '03:30 PM',
        fecha: this.obtenerFechaActual(),
        alumnos: 20,
        profesorJefe: 'Carlos Rodríguez',
      },
    ];
  }

  obtenerFechaActual() {
    // Obtén la fecha actual en el formato deseado (puedes personalizarlo)
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Sumar 1 ya que enero es 0
    const año = fechaActual.getFullYear();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();

    // Formatea la fecha y hora como desees
    const fechaFormateada = `${dia}/${mes}/${año}`;
    const horaFormateada = `${hora}:${minutos}`;

    return `${fechaFormateada} ${horaFormateada}`;
  }
  // En la página de inicio
verDetalleClase(clase: any) {
  this.router.navigate(['/detalle-clase', { clase: JSON.stringify(clase) }]);
  

}
  logout() {
    // Aquí puedes agregar la lógica para cerrar sesión
    // Por ejemplo, destruir el token de sesión en el almacenamiento local
    // Luego, navegar a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

}
