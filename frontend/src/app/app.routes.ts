import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';
import { LibrosComponent } from './components/libros/libros';
import { UsuariosComponent } from './components/usuarios/usuarios';
import { PrestamosComponent } from './components/prestamos/prestamos';
import { CategoriasComponent } from './components/categorias/categorias';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'libros', pathMatch: 'full' },
      { path: 'libros', component: LibrosComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'prestamos', component: PrestamosComponent },
      { path: 'categorias', component: CategoriasComponent }
    ]
  }
];