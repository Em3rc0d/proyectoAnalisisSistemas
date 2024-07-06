import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf} from '@angular/common';
@Component({
  selector: 'app-generacion-avisos',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './generacion-avisos.component.html',
  styleUrl: './generacion-avisos.component.css'
})
export class GeneracionAvisosComponent {
  

  confirmAviso() {
    if (window.confirm('¿Confirmar creación de aviso?')) {
      window.location.href = '/generacion-avisos';
    } else {
      alert('Creación de aviso cancelada');
    }
  }

  enviarAviso(){
    window.location.href = '/enviar-avisos';
  }
}
