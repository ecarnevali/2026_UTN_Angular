import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'listado',
    component: UsuariosComponent
  },
  {
    path: ':id',
    component: UsuarioDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
