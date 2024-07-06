import { Component } from '@angular/core';

@Component({
  selector: 'app-recepcion-ordenes',
  standalone: true,
  imports: [],
  templateUrl: './recepcion-ordenes.component.html',
  styleUrl: './recepcion-ordenes.component.css'
})
export class RecepcionOrdenesComponent {
  receptionOrder() {
    if (window.confirm('¿Confirmar recepción de orden?')) {
      window.location.href = '/recepcion-ordenes';
    } else {
      alert('Recepción de orden cancelada');
      window.location.href = '/home';
    }
  }
}
