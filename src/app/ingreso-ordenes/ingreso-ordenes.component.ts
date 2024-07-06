import { Component } from '@angular/core';

@Component({
  selector: 'app-ingreso-ordenes',
  standalone: true,
  imports: [],
  templateUrl: './ingreso-ordenes.component.html',
  styleUrl: './ingreso-ordenes.component.css'
})
export class IngresoOrdenesComponent {
  confirmOrder() {
    if (window.confirm('¿Confirmar pedido?')) {
      window.location.href = '/ingreso-ordenes';
    } else {
      alert('Confirmación de pedido cancelada');
      window.location.href = '/home';
    }
  }
}
