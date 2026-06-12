import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private storageService: StorageService) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsuarios();
  }


}
