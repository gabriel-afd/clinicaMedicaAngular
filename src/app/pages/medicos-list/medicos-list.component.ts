import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoService, Medico } from '../../core/services/medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicos-list.component.html',
  styleUrl: './medicos-list.component.css'
})
export class MedicosListComponent {
  medicos: Medico[] = [];

  constructor(private medicoService: MedicoService, private router: Router) {}

  ngOnInit(): void {
    this.medicos = this.medicoService.listar();
  }

  goToCad() {
    this.router.navigate(['/medicos/cadastrar']);
  }
}
