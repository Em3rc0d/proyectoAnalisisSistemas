import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-reuniones',
  standalone: true,
  imports: [],
  templateUrl: './gestion-reuniones.component.html',
  styleUrl: './gestion-reuniones.component.css'
})
export class GestionReunionesComponent {
  crearReunion() {
    window.location.href = '/creacion-reuniones';
  }
  actualizarReunion() {
    window.location.href = '/actualizar-reuniones';
  }
}
