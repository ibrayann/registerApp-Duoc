import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-clase',
  templateUrl: './detalle-clase.page.html',
  styleUrls: ['./detalle-clase.page.scss'],
})
export class DetalleClasePage implements OnInit {
  clase: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const claseParam = params.get('clase');
      if (claseParam) {
        // Parsea la información de la clase desde la cadena JSON en la URL
        this.clase = JSON.parse(claseParam);
        // Luego puedes usar this.clase para mostrar la información en la página
      }
    });
  }
  generarQRCode() {
    // Implementa la lógica para generar el código QR utilizando ngx-qrcode2
    // Puedes generar el código QR utilizando this.qrData
    // Luego, puedes mostrar el código QR en una ventana emergente o como prefieras
    if (this.clase) {
      console.log('Generando código QR para la clase:', this.clase.nombre);
      // Utiliza ngx-qrcode2 para generar el código QR
      // Asegúrate de importar NgxQRCodeModule en tu módulo
      // Luego, puedes utilizar el componente ngx-qrcode en tu plantilla HTML
    }
  }
}
