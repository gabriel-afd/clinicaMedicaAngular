# 🏥 Clínica Médica – Sistema Angular

Pequeno sistema em **Angular** para gerenciamento de **usuários, pacientes e médicos**, feito com **login, rotas protegidas, cadastro e listagem**.  
Este projeto foi desenvolvido como exercício acadêmico, com dados mockados (sem backend).

---

## 🚀 Funcionalidades

- 🔑 **Login** com validação de usuário mockado
- 🏠 **Home** com navegação para Pacientes e Médicos
- 👨‍⚕️ **Médicos**
  - Listagem de médicos
  - Cadastro de novo médico
- 🧑‍🤝‍🧑 **Pacientes**
  - Listagem de pacientes
  - Cadastro de novo paciente
- 🛡️ **Proteção de rotas** com `AuthGuard`
- 📦 **Mock de dados** via `PacienteService` e `MedicoService`

---

## 🛠️ Tecnologias

- [Angular 17+](https://angular.dev/)
- TypeScript
- Standalone Components
- Reactive Forms
- CSS customizado (tema azul)

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/clinica-medica.git
cd clinica-medica
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar o servidor de desenvolvimento

```bash
ng serve
```

### 4. Acessar no navegador

```
http://localhost:4200
```

---

## 🔑 Usuário de Login (mock)

Para acessar o sistema use o usuário mock configurado em `user.mock.ts`:

```json
[
  {
    "name": "Gabriel Medeiros",
    "email": "gabriel@example.com",
    "password": "123456",
    "cpf": "11122233344",
    "perfil": "PACIENTE"
  },
  {
    "name": "Dra. Carla Costa",
    "email": "carla@example.com",
    "password": "medico123",
    "cpf": "55566677788",
    "perfil": "MEDICO"
  }
]
```

👉 **Exemplo de login válido:**
- **Email:** gabriel@example.com
- **Senha:** 123456
