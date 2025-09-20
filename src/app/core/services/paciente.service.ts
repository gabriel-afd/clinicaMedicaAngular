import { Injectable } from '@angular/core';

export interface Paciente {
  id: number;
  nome: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class PacienteService {
  private pacientes: Paciente[] = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com' },
    { id: 2, nome: 'Maria Souza', email: 'maria@email.com' },
  ];

  listar() {
    return this.pacientes;
  }

  adicionar(paciente: Omit<Paciente, 'id'>) {
    const novo: Paciente = {
      id: this.pacientes.length + 1,
      ...paciente,
    };
    this.pacientes.push(novo);
  }
}
