import { Injectable } from '@angular/core';

export interface Medico {
  id: number;
  nome: string;
  email: string;
  especialidade: string;
}

@Injectable({ providedIn: 'root' })
export class MedicoService {
  private medicos: Medico[] = [
    { id: 1, nome: 'Dr. João Cardoso', email: 'joao@clinica.com', especialidade: 'Cardiologia' },
    { id: 2, nome: 'Dra. Ana Souza', email: 'ana@clinica.com', especialidade: 'Dermatologia' }
  ];

  listar() {
    return this.medicos;
  }

  adicionar(medico: Omit<Medico, 'id'>) {
    const novo: Medico = {
      id: this.medicos.length + 1,
      ...medico,
    };
    this.medicos.push(novo);
  }
}
