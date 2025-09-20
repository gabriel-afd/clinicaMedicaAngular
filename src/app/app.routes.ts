import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PacientesListComponent } from './pages/pacientes-list/pacientes-list.component';
import { AuthGuard } from './core/auth/auth.guard';
import { PacienteFormComponent } from './pages/paciente-form/paciente-form.component';
import { MedicosListComponent } from './pages/medicos-list/medicos-list.component';
import { MedicoFormComponent } from './pages/medico-form/medico-form.component.spec';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'pacientes',
    component: PacientesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pacientes/cadastrar',
    component: PacienteFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'medicos',
    component: MedicosListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'medicos/cadastrar',
    component: MedicoFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
