import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicoService } from '../../core/services/medico.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medico-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './medico-form.component.html',
  styleUrl: './medico-form.component.css'
})
export class MedicoFormComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private medicoService: MedicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      especialidade: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.medicoService.adicionar(this.form.value as any);
      alert('Médico cadastrado com sucesso!');
      this.router.navigate(['/medicos']);
    }
  }
}
