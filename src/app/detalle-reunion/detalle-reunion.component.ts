import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-reunion',
  standalone: true,
  imports: [],
  templateUrl: './detalle-reunion.component.html',
  styleUrl: './detalle-reunion.component.css'
})
export class DetalleReunionComponent {
  confirmCronograma() {
    if (window.confirm('¿Confirmar carga del cronograma?')) {
      window.location.href = '/gestion-reuniones';
    } else {
      alert('Carga de detalles del cronograma cancelada');
    }
  }
}
