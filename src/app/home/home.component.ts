import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'utn_proyecto';
  nombre: string = "Eduardo";
  apellido: string = "Carnevali";
}
