import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // El import

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink], // El permiso
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {}