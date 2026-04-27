import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css'
})
export class ReservasComponent {
  // Esta es la variable que el HTML estaba buscando
  reserva = {
    nombre: '',
    email: '',
    fecha: '',
    personas: ''
  };

  confirmarReserva() {
    const hoy = new Date().toISOString().split('T')[0];

    if (this.reserva.nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    if (this.reserva.fecha < hoy) {
      alert('La fecha no puede ser en el pasado.');
      return;
    }

    alert(`¡Gracias ${this.reserva.nombre}! Tu reserva para el ${this.reserva.fecha} ha sido enviada con éxito.`);
    this.reserva = { nombre: '', email: '', fecha: '', personas: '' };
  }
}
