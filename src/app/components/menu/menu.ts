import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ¡Esto es clave!

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule], // ¡Sin esto el *ngFor no sirve!
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent implements OnInit {
  menuData: any[] = [];

  ngOnInit() {
    // Como tu JSON está en public/data/menu.json, la ruta es esta:
    fetch('data/menu.json')
      .then(res => {
        if (!res.ok) throw new Error('No se encontró el JSON');
        return res.json();
      })
      .then(data => {
        this.menuData = data;
        console.log('Datos cargados:', data); // Esto te dirá en la consola si cargó
      })
      .catch(err => console.error('Error:', err));
  }

  formatPrice(price: number) {
    return "$" + price.toLocaleString("es-CO");
  }
}
