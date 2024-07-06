import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-actualizar-reuniones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar-reuniones.component.html',
  styleUrl: './actualizar-reuniones.component.css'
})
export class ActualizarReunionesComponent implements OnInit {
  meetings = [
    { fecha: '01/01/2023', hora: '10:00', participantes: 'Eduardo Merino', objetivo: 'Programación de Sistemas' },
    { fecha: '01/01/2023', hora: '10:00', participantes: 'Ivan Hubel', objetivo: 'Programación de Sistemas' },
    { fecha: '01/01/2023', hora: '10:00', participantes: 'Victor Farfán', objetivo: 'Programación de Sistemas' },
    { fecha: '01/01/2023', hora: '10:00', participantes: 'Hector Martinez', objetivo: 'Programación de Sistemas' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(index: number) {
    // Aquí podrías implementar la lógica para guardar los cambios en tus datos, por ejemplo enviar a un servicio o actualizar en el componente principal.
    console.log('Guardando cambios para índice:', index);
  }

  cancelarEdicion(index: number) {
    // Aquí podrías implementar la lógica para cancelar la edición y restaurar los datos originales.
    console.log('Cancelando edición para índice:', index);
  }
  guardarTodo() {
    // Aquí puedes implementar la lógica para guardar todos los cambios realizados en la tabla, si es necesario.
    console.log('Guardando todos los cambios');
    console.log('Datos actualizados:', this.meetings);
    window.location.href = '/gestion-reuniones';
  }
}
