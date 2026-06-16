import { MOCK_TASKS } from "../lib/mocks";

let tasks = [...MOCK_TASKS];

export const taskService = {
  getAll: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return tasks;
  },

  create: async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newTask = {
      id: Date.now(),
      ...data,
      status: "pendente",
      user_id: 1,
    };
    tasks = [...tasks, newTask];
    return newTask;
  },

  update: async (id, data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    tasks = tasks.map((task) => (task.id === id ? { ...task, ...data } : task));
    return tasks.find((task) => task.id === id);
  },

  delete: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    tasks = tasks.filter((task) => task.id !== id);
  },

  toggleStatus: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    tasks = tasks.map((task) => {
      if (task.id !== id) return task;
      const novoStatus = task.status === "pendente" ? "concluida" : "pendente";
      return { ...task, status: novoStatus };
    });
    return tasks.find((task) => task.id === id);
  },
};
