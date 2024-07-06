import { Component } from '@angular/core';

@Component({
  selector: 'app-creacion-reuniones',
  standalone: true,
  imports: [],
  templateUrl: './creacion-reuniones.component.html',
  styleUrl: './creacion-reuniones.component.css'
})
export class CreacionReunionesComponent {
  confirmMeeting() {
    if (window.confirm('¿Confirmar programación de la reunión?')) {
      window.location.href = '/detalle-reunion';
    } else {
      alert('Programación de reunión cancelada');
    }
  }
}
