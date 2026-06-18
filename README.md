# 📋 TaskFlow

Uma aplicação moderna de gerenciamento de tarefas desenvolvida em React, com foco em experiência do usuário, componentização, organização de código e boas práticas de desenvolvimento Front-end.

O projeto foi desenvolvido como solução para um desafio técnico e simula uma API REST utilizando dados mockados através de uma camada de serviços dedicada.

---

## 🌐 Deploy

https://taskflow-blue-beta.vercel.app/

---

## 🚀 Funcionalidades Implementadas

### 🔐 Autenticação

- Login com e-mail e senha
- Validação de campos obrigatórios
- Validação de formato de e-mail
- Exibição de mensagens de erro abaixo dos campos inválidos
- Estado de carregamento durante autenticação (spinner animado)
- Controle de sessão através de Context API

### 📝 Gerenciamento de Tarefas

#### Listagem

- Exibição das tarefas do usuário autenticado
- Ordenação automática por data de vencimento
- Atualização dinâmica sem recarregamento da página
- Estado vazio para filtros sem resultados

#### Filtros

- Todas
- Pendentes
- Concluídas

#### Operações

- Criar tarefa
- Editar tarefa
- Excluir tarefa
- Visualizar detalhes da tarefa
- Marcar tarefa como concluída diretamente na listagem
- Confirmação antes da exclusão

### 🎨 Experiência do Usuário

- Layout totalmente responsivo (Mobile First)
- Dark mode e Light mode com persistência via localStorage
- Feedback visual via toast para criação, edição e exclusão de tarefas
- Animações de entrada e saída dos itens da lista com Framer Motion
- Animações nos modais (abertura e fechamento suaves)
- Interface otimizada para desktop e dispositivos móveis
- Menu lateral recolhível em mobile (hamburguer)

---

## ⭐ Diferenciais Implementados

- Ordenação de tarefas por data de vencimento (padrão)
- Dark mode funcional com toggle na sidebar e persistência
- Animações com Framer Motion (lista, modais e transições)
- Acessibilidade básica: `aria-label` em ícones e botões, navegação semântica
- Componentização reutilizável
- Arquitetura baseada em hooks customizados
- Camada de serviços simulando integração com API REST
- Gerenciamento global de autenticação e tema com Context API

---

## 🏗️ Arquitetura do Projeto

```txt
src/
│
├── components/
│   ├── Button.jsx
│   ├── ConfirmDialog.jsx
│   ├── Input.jsx
│   ├── Sidebar.jsx
│   ├── TaskDetailDialog.jsx
│   ├── TaskDialog.jsx
│   ├── TaskItem.jsx
│   ├── Tasks.jsx
│   └── TaskFilters.jsx
│
├── contexts/
│   └── ThemeContext.jsx
│
├── data/
│   ├── mock-tasks.js
│   └── mock-users.js
│
├── hooks/
│   ├── AuthContext.js
│   ├── AuthProvider.jsx
│   ├── useAuth.js
│   ├── useTasks.js
│   └── useTheme.js
│
├── lib/
│   ├── componentVariants.js
│   └── schemas.js
│
├── pages/
│   ├── LoginPage.jsx
│   └── TasksPage.jsx
│
├── services/
│   └── taskService.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📂 Organização da Aplicação

### Components

Responsáveis pelos componentes reutilizáveis da interface.

| Componente       | Responsabilidade                     |
| ---------------- | ------------------------------------ |
| Button           | Botão reutilizável com variantes     |
| Input            | Campo de formulário reutilizável     |
| Sidebar          | Navegação lateral com toggle de tema |
| TaskItem         | Exibição individual da tarefa        |
| Tasks            | Listagem de tarefas com animações    |
| TaskFilters      | Filtros por status                   |
| TaskDialog       | Criação e edição em modal animado    |
| TaskDetailDialog | Visualização detalhada               |
| ConfirmDialog    | Confirmação de exclusão              |

---

### Contexts

| Contexto     | Responsabilidade                        |
| ------------ | --------------------------------------- |
| ThemeContext | Gerenciamento global de dark/light mode |

---

### Hooks

| Hook         | Responsabilidade                   |
| ------------ | ---------------------------------- |
| useAuth      | Acesso ao contexto de autenticação |
| useTasks     | Gerenciamento das tarefas          |
| useTheme     | Acesso ao contexto de tema         |
| AuthContext  | Contexto global de autenticação    |
| AuthProvider | Provedor de autenticação           |

---

### Services

Camada responsável por abstrair o acesso aos dados.

Atualmente utiliza dados mockados para simular uma API REST, permitindo uma futura substituição por um backend real sem necessidade de grandes alterações na interface.

```javascript
await taskService.getTasks();
await taskService.createTask(task);
await taskService.updateTask(id, data);
await taskService.deleteTask(id);
```

---

### Data

Contém os dados mockados utilizados durante o desenvolvimento.

#### Usuário de teste

```txt
Email: dev@example.com
Senha: password
```

#### Estrutura da tarefa

```javascript
{
  id,
  title,
  description,
  status: "pendente" | "concluida",
  due_date,
  user_id
}
```

---

## 🛠️ Tecnologias Utilizadas

- React 18
- JavaScript (ES6+)
- Vite
- Tailwind CSS v4
- Framer Motion
- React Hook Form + Zod
- Tailwind Variants
- Sonner (toasts)
- Context API
- React Router DOM
- Dados Mockados

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

### Clonar o repositório

```bash
git clone https://github.com/Guilherme3146/taskflow.git
```

### Acessar a pasta do projeto

```bash
cd taskflow
```

### Instalar dependências

```bash
npm install
```

### Executar o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

```txt
http://localhost:5173
```

---

## 🧪 Credenciais para Teste

```txt
Email: dev@example.com
Senha: password
```

---

## 🔄 Simulação de API

Este projeto não utiliza backend real.

Foi implementada uma camada de serviços (`taskService`) que consome dados mockados e simula requisições assíncronas utilizando Promises, permitindo:

- Desenvolvimento desacoplado do backend
- Facilidade de manutenção
- Possibilidade de migração futura para API REST real sem grandes alterações na interface

---

## 📱 Responsividade

Desenvolvido seguindo a abordagem Mobile First e adaptado para:

- Smartphones (sidebar recolhível com menu hamburguer)
- Tablets
- Notebooks
- Monitores Desktop

---

## ✅ Requisitos Atendidos

### Autenticação

- [x] Login
- [x] Validação de e-mail
- [x] Validação de campos obrigatórios
- [x] Mensagens de erro
- [x] Estado de carregamento

### Tarefas

- [x] Listagem de tarefas
- [x] Filtro por status
- [x] Criar tarefa
- [x] Editar tarefa
- [x] Excluir tarefa
- [x] Confirmar exclusão
- [x] Marcar como concluída
- [x] Estado vazio

### Interface

- [x] Responsividade
- [x] Feedback visual (toasts)
- [x] Componentização
- [x] Atualização sem reload

### Diferenciais

- [x] Ordenação por data de vencimento
- [x] Dark mode funcional com persistência
- [x] Animações com Framer Motion
- [x] Acessibilidade básica (aria-label, semântica)
- [x] Arquitetura baseada em Services
- [x] Hooks customizados
- [x] Context API

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Almeida de Melo** como solução para o desafio técnico proposto.
