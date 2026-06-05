import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: 'registro', loadComponent: () => import('./registro/registro.component').then(m => m.RegistroComponent)},
    {path: 'lista-productos', loadComponent: () => import('./producto/lista-productos/lista-productos.component').then(m => m.ListaProductosComponent)},
];
