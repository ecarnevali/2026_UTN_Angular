import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-detalle',
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.css'
})
export class UsuarioDetalleComponent implements OnInit {


  id: number = 0;
  usuario: Usuario | undefined;
  precioDescuento: number = 10; 

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) {}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['id']);
    this.usuario = this.usuarioService.getUsuarioById(this.id);

  }

}
