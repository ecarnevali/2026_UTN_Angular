import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'home', 
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'usuarios', 
        loadChildren: () => import('./usuarios/modules/usuario-routing.module').then(m => m.ModulesRoutingModule)
    },
    {
        path: 'productos', 
        loadChildren: () => import('./producto/module/producto.module').then(m => m.ProductoModule)
    },
    {
        path: '**',
        redirectTo: ''
    },
];
