import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  formulario: FormGroup;
  enviado: boolean = false;

  colorExito: string = 'green';

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['']
    });
  }

  mensajeErrores: any = {
    nombre: [
      { tipo: 'required', mensaje: 'El nombre es obligatorio' },
      { tipo: 'minlength', mensaje: 'El nombre debe tener al menos 3 caracteres' }
    ],
    email: [
      { tipo: 'required', mensaje: 'El email es obligatorio' },
      { tipo: 'email', mensaje: 'El email no es válido' }
    ]
  };

  enviar(){
    if(this.formulario.invalid) return;

    let nombre = this.formulario.get('nombre')?.value;
    let email = this.formulario.get('email')?.value;
    let mensaje = this.formulario.get('mensaje')?.value;

    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);

    this.enviado = true;
  }

  cerrarMensaje(){
    this.enviado = false;
    this.formulario.reset();
  }
}
