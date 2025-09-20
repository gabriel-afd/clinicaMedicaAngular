import { Component } from '@angular/core';
import { PacienteService } from '../../core/services/paciente.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacientes-list.component.html',
  styleUrl: './pacientes-list.component.css'
})
export class PacientesListComponent {
  pacientes: any[] = [];

  constructor(private pacienteService: PacienteService, private router: Router) {}

  ngOnInit(): void {
    this.pacientes = this.pacienteService.listar();
  }

  goToCadastro() {
    this.router.navigate(['/pacientes/cadastrar']); // 👈 navegação manual
  }
}
