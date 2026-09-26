import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Módulo 3: Control de Préstamos Activos</h2>
    <table border="1" cellpadding="8" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #f4f4f4;">
          <th>No. Préstamo</th><th>Libro</th><th>Solicitante</th><th>Fecha Salida</th><th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let p of prestamos">
          <td>{{ p.id }}</td>
          <td>{{ p.libro }}</td>
          <td>{{ p.usuario }}</td>
          <td>{{ p.fechaSalida }}</td>
          <td [style.color]="p.estado === 'Vigente' ? 'green' : 'orange'">{{ p.estado }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class PrestamosComponent {
  prestamos = [
    { id: 101, libro: 'Clean Code', usuario: 'Carlos Mendoza', fechaSalida: '2026-03-10', estado: 'Vigente' },
    { id: 102, libro: 'Cien Años de Soledad', usuario: 'Valeria Santos', fechaSalida: '2026-03-12', estado: 'Pendiente Devolución' },
    { id: 103, libro: 'Estructuras de Datos', usuario: 'Andrés Morales', fechaSalida: '2026-03-15', estado: 'Vigente' }
  ];
}