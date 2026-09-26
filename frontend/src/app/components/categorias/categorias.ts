import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Módulo 4: Categorías de Libros</h2>
    <table border="1" cellpadding="8" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #f4f4f4;">
          <th>Código</th><th>Categoría</th><th>Descripción</th><th>Estante Asignado</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let cat of categorias">
          <td>{{ cat.codigo }}</td>
          <td>{{ cat.nombre }}</td>
          <td>{{ cat.descripcion }}</td>
          <td>{{ cat.estante }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class CategoriasComponent {
  categorias = [
    { codigo: 'CAT-A', nombre: 'Ciencias de la Computación', descripcion: 'Algoritmos, programación y bases de datos', estante: 'Pasillo 1 - Nivel 2' },
    { codigo: 'CAT-B', nombre: 'Literatura Universal', descripcion: 'Novelas clásicas, contemporáneas y poesía', estante: 'Pasillo 3 - Nivel 1' },
    { codigo: 'CAT-C', nombre: 'Ingeniería y Matemáticas', descripcion: 'Cálculo, física y mecánica', estante: 'Pasillo 2 - Nivel 3' }
  ];
}