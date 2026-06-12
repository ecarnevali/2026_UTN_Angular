import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { DescuentoPipe } from '../../pipes/descuento.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule,DescuentoPipe,ReactiveFormsModule, RouterLink],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit {

  id: number = 0;
  producto: any;
  precioDescuento: number = 10; 

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productoService.getProductoById(this.id).subscribe((producto) => {
      this.producto = producto;
    });
  }



}
