import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../model/producto';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DescuentoPipe } from '../../pipes/descuento.pipe';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, ReactiveFormsModule,DescuentoPipe],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

    productos: Producto[] = [];
    precioDescuento: number = 10; 

    constructor(private productoService: ProductoService) { 

    }

    ngOnInit(): void {
        this.productoService.getProductos().subscribe((data: Producto[]) => {
            this.productos = data;
        });
    }

    agregarProducto(){

      var nuevoProducto: any = {
        title: 'Nuevo Producto PRACTICA 3',
        slug: 'nuevo-producto',
        price: 1000,
        description: 'Descipcion del nuevo producto',
        "categoryId": 1,
        images: ["https://placehold.co/600x400"],
        creationAt: new Date().toISOString()
      };

      
      this.productoService.addProducto(nuevoProducto).subscribe((nuevoProducto: Producto) => {
        this.productos.push(nuevoProducto);
      }
      );
    }

    eliminarProducto(id: number): void {
        
        this.productoService.deleteProducto(id).subscribe(() => {
            this.productos = this.productos.filter(producto => producto.id !== id);
        }); 
    }
}
