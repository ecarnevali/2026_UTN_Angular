import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  usuarios: Usuario[]  = [
      {
        id: 1,
        name: 'Juan Carlos',
        email: 'juan.Carlos@example.com',
        password: 'password123',
        role: 'user',
        creationAt: '2023-01-01T00:00:00Z',
        updatedAt: ''
      },
    {
        id: 2,
        name: 'Eduardo Carnevali',
        email: 'eduardo.carnevali@example.com',
        password: '123password',
        role: 'user',
        creationAt: '2023-01-01T00:00:00Z',
        updatedAt: ''
      },
          {
        id: 3,
        name: 'Hernan Mensi',
        email: 'hernan.mensi@example.com',
        password: 'Mensi123',
        role: 'user',
        creationAt: '2023-01-01T00:00:00Z',
        updatedAt: ''
      }
    ];
  

  constructor() { }

  getUsuarioById(id: number): Usuario | undefined {
    if(id === 0) {
      return undefined;
    }
    return this.usuarios.find(usuario => usuario.id === id);
  }

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }
}
