import { MOCK_TASKS } from "../lib/mocks";

const STORAGE_KEY = "tasks";

const loadTasks = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved);
  return [...MOCK_TASKS];
};

const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

let tasks = loadTasks();

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
    saveTasks(tasks);
    return newTask;
  },

  update: async (id, data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    tasks = tasks.map((task) => (task.id === id ? { ...task, ...data } : task));
    saveTasks(tasks);
    return tasks.find((task) => task.id === id);
  },

  delete: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks(tasks);
  },

  toggleStatus: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    tasks = tasks.map((task) => {
      if (task.id !== id) return task;
      const novoStatus = task.status === "pendente" ? "concluida" : "pendente";
      return { ...task, status: novoStatus };
    });
    saveTasks(tasks);
    return tasks.find((task) => task.id === id);
  },
};
