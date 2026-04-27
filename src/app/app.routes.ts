import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { MenuComponent } from './components/menu/menu';
import { ReservasComponent } from './components/reservas/reservas'; // Importamos el nuevo nombre

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservas', component: ReservasComponent } 
];