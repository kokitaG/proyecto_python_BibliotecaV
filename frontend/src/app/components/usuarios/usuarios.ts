import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Módulo 2: Registro de Usuarios de la Biblioteca</h2>
    <table border="1" cellpadding="8" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #f4f4f4;">
          <th>Carné / ID</th><th>Nombre</th><th>Correo</th><th>Tipo de Usuario</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let u of usuarios">
          <td>{{ u.carne }}</td>
          <td>{{ u.nombre }}</td>
          <td>{{ u.correo }}</td>
          <td>{{ u.tipo }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class UsuariosComponent {
  usuarios = [
    { carne: '6990-20-101', nombre: 'Carlos Mendoza', correo: 'cmendoza@mail.com', tipo: 'Estudiante' },
    { carne: '6990-18-204', nombre: 'Valeria Santos', correo: 'vsantos@mail.com', tipo: 'Docente' },
    { carne: '6990-21-505', nombre: 'Andrés Morales', correo: 'amorales@mail.com', tipo: 'Estudiante' }
  ];
}