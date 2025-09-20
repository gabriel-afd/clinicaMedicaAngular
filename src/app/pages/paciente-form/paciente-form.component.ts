import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PacienteService } from '../../core/services/paciente.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paciente-form',
  standalone: true,
  templateUrl: './paciente-form.component.html',
  styleUrl: './paciente-form.component.css',
  imports: [ReactiveFormsModule, CommonModule]
})
export class PacienteFormComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  }

  onSubmit() {
    if (this.form.valid) {
      this.pacienteService.adicionar(this.form.value as any);
      alert('Paciente cadastrado com sucesso!');
      this.router.navigate(['/pacientes']);
    }
  }
}
