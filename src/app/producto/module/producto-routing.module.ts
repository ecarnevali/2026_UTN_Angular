import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';
import { RegistroComponent } from '../registro/registro.component';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';

const routes: Routes = [
  {
    path: '',
    component: ListaProductosComponent
  },
    {
    path: 'lista',
    component: ListaProductosComponent
  },
  {
    path: ':id',
    component: DetalleProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
