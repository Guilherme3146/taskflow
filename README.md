# 📋 TaskFlow

Uma aplicação moderna de gerenciamento de tarefas desenvolvida em React, com foco em experiência do usuário, componentização, organização de código e boas práticas de desenvolvimento Front-end.

O projeto foi desenvolvido como solução para um desafio técnico e simula uma API REST utilizando dados mockados através de uma camada de serviços dedicada.

---

## 🚀 Funcionalidades Implementadas

### 🔐 Autenticação

* Login com e-mail e senha
* Validação de campos obrigatórios
* Validação de formato de e-mail
* Exibição de mensagens de erro abaixo dos campos inválidos
* Estado de carregamento durante autenticação
* Controle de sessão através de Context API

### 📝 Gerenciamento de Tarefas

#### Listagem

* Exibição das tarefas do usuário autenticado
* Atualização dinâmica sem recarregamento da página
* Estado vazio para filtros sem resultados

#### Filtros

* Todas
* Pendentes
* Concluídas

#### Operações

* Criar tarefa
* Editar tarefa
* Excluir tarefa
* Visualizar detalhes da tarefa
* Marcar tarefa como concluída diretamente na listagem
* Confirmação antes da exclusão

### 🎨 Experiência do Usuário

* Layout totalmente responsivo
* Feedback visual para ações importantes
* Interface otimizada para desktop e dispositivos móveis
* Atualização instantânea dos dados sem reload

---

## ⭐ Diferenciais Implementados

* Ordenação de tarefas por data de vencimento
* Componentização reutilizável
* Arquitetura baseada em hooks customizados
* Camada de serviços simulando integração com API REST
* Gerenciamento global de autenticação com Context API

---

## 🏗️ Arquitetura do Projeto

```txt
src/
│
├── components/
│   ├── ConfirmDialog.jsx
│   ├── Input.jsx
│   ├── Sidebar.jsx
│   ├── TaskDetailDialog.jsx
│   ├── TaskDialog.jsx
│   ├── TaskItem.jsx
│   ├── Tasks.jsx
│   └── TaskFilters.jsx
│
├── data/
│   ├── mock-tasks.js
│   └── mock-users.js
│
├── hooks/
│   ├── AuthContext.js
│   ├── AuthProvider.jsx
│   ├── useAuth.js
│   └── useTasks.js
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

| Componente       | Responsabilidade                 |
| ---------------- | -------------------------------- |
| Input            | Campo de formulário reutilizável |
| Sidebar          | Navegação lateral                |
| TaskItem         | Exibição individual da tarefa    |
| Tasks            | Listagem de tarefas              |
| TaskFilters      | Filtros por status               |
| TaskDialog       | Criação e edição                 |
| TaskDetailDialog | Visualização detalhada           |
| ConfirmDialog    | Confirmação de exclusão          |

---

### Hooks

Responsáveis pela lógica compartilhada da aplicação.

| Hook         | Responsabilidade                   |
| ------------ | ---------------------------------- |
| useAuth      | Acesso ao contexto de autenticação |
| useTasks     | Gerenciamento das tarefas          |
| useTheme     | Controle de tema                   |
| AuthContext  | Contexto global de autenticação    |
| AuthProvider | Provedor de autenticação           |

---

### Services

Camada responsável por abstrair o acesso aos dados.

Atualmente utiliza dados mockados para simular uma API REST, permitindo uma futura substituição por um backend real sem necessidade de grandes alterações na interface.

Exemplos de operações simuladas:

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

* React
* JavaScript (ES6+)
* Context API
* React Hooks
* Vite
* CSS3
* Dados Mockados
* Arquitetura baseada em Services

---

## 📦 Instalação

### Pré-requisitos

* Node.js 18 ou superior
* npm ou yarn

---

### Clonar o repositório

```bash
git clone https://github.com/Guilherme3146/taskflow.git
```

---

### Acessar a pasta do projeto

```bash
cd taskflow
```

---

### Instalar dependências

```bash
npm install
```

---

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

Para fins de desenvolvimento e demonstração, foi implementada uma camada de serviços (`taskService`) que consome dados mockados e simula requisições assíncronas utilizando Promises.

Essa abordagem permite:

* Desenvolvimento desacoplado do backend
* Facilidade de manutenção
* Possibilidade de migração futura para API REST real
* Melhor organização da lógica de negócio

---

## 📱 Responsividade

A aplicação foi desenvolvida seguindo a abordagem Mobile First e adaptada para:

* Smartphones
* Tablets
* Notebooks
* Monitores Desktop

---

## ✅ Requisitos Atendidos

### Autenticação

* [x] Login
* [x] Validação de e-mail
* [x] Validação de campos obrigatórios
* [x] Mensagens de erro
* [x] Estado de carregamento

### Tarefas

* [x] Listagem de tarefas
* [x] Filtro por status
* [x] Criar tarefa
* [x] Editar tarefa
* [x] Excluir tarefa
* [x] Confirmar exclusão
* [x] Marcar como concluída
* [x] Estado vazio

### Interface

* [x] Responsividade
* [x] Feedback visual
* [x] Componentização
* [x] Atualização sem reload

### Diferenciais

* [x] Ordenação por data
* [x] Arquitetura baseada em Services
* [x] Hooks customizados
* [x] Context API

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Almeida** como solução para o desafio técnico proposto.

Projeto construído seguindo princípios de componentização, reutilização de código e preparação para integração futura com APIs REST reais.
