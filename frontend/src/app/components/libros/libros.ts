import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Módulo 1: Catálogo de Libros</h2>
    <table border="1" cellpadding="8" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #f4f4f4;">
          <th>Código</th><th>Título</th><th>Autor</th><th>Editorial</th><th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of libros">
          <td>{{ item.codigo }}</td>
          <td>{{ item.titulo }}</td>
          <td>{{ item.autor }}</td>
          <td>{{ item.editorial }}</td>
          <td>{{ item.stock }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class LibrosComponent {
  libros = [
    { codigo: 'LIB-001', titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', editorial: 'Sudamericana', stock: 6 },
    { codigo: 'LIB-002', titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', editorial: 'Francisco de Robles', stock: 3 },
    { codigo: 'LIB-003', titulo: 'Clean Code', autor: 'Robert C. Martin', editorial: 'Prentice Hall', stock: 5 },
    { codigo: 'LIB-004', titulo: 'Estructuras de Datos', autor: 'Mark Allen Weiss', editorial: 'Pearson', stock: 4 }
  ];
}