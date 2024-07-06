import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-enviar-avisos',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './enviar-avisos.component.html',
  styleUrl: './enviar-avisos.component.css'
})
export class EnviarAvisosComponent {
  isSelected = false;
  investors = [
    { name: 'Juan Pérez', email: 'juan.perez@gmail.com', creationDate: '2023-01-01', selected: false },
    { name: 'María Rodríguez', email: 'maria.rodriguez@gmail.com', creationDate: '2023-01-02', selected: false },
    { name: 'Carlos Gómez', email: 'carlos.gomez@gmail.com', creationDate: '2023-01-03', selected: false }
  ];

  toggleButton(investor: { selected: boolean; }) {
    investor.selected = !investor.selected;
  }
  sendNotices() {
    if (window.confirm('¿Confirmar envío de aviso?')) {
      window.location.href = '/generacion-avisos';
    } else {
      alert('Envío de aviso cancelado');
    }
  }
}
