import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  usuario = '';
  password = '';
  mensajeError = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onLogin(): void {
    this.mensajeError = '';

    this.authService.login({ usuario: this.usuario, password: this.password }).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        // Captura el detalle devuelto por FastAPI
        this.mensajeError = err.error?.detail || 'Error al validar credenciales';
        this.cdr.detectChanges(); // Fuerza la actualización visual inmediata
      }
    });
  }
}

export { LoginComponent as Login };