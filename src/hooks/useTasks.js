import { useState, useMemo } from "react";
import { toast } from "sonner";
import { taskService } from "../services/taskService";
import { MOCK_TASKS } from "../lib/mocks";

const loadTasksFromStorage = () => {
  const saved = localStorage.getItem("tasks");
  if (saved) return JSON.parse(saved);
  return MOCK_TASKS;
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(loadTasksFromStorage);
  const [filter, setFilter] = useState("todas");
  const [order, setOrder] = useState("asc");

  const filteredTasks = useMemo(() => {
    let result = tasks;

    if (filter !== "todas") {
      result = tasks.filter((task) => task.status === filter);
    }

    result = [...result].sort((a, b) => {
      const dateA = new Date(a.due_date);
      const dateB = new Date(b.due_date);
      if (order === "asc") return dateA - dateB;
      return dateB - dateA;
    });

    return result;
  }, [tasks, filter, order]);

  const addTask = async (data) => {
    const newTask = await taskService.create(data);
    setTasks((prev) => [...prev, newTask]);
    toast.success("Tarefa criada!");
  };

  const editTask = async (taskId, data) => {
    const previousTasks = tasks;
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task;
        return { ...task, ...data };
      }),
    );
    try {
      await taskService.update(taskId, data);
      toast.success("Tarefa atualizada!");
    } catch {
      setTasks(previousTasks);
      toast.error("Erro ao atualizar tarefa!");
    }
  };

  const toggleTask = async (taskId) => {
    const previousTasks = tasks;
    const task = tasks.find((item) => item.id === taskId);
    try {
      setTasks((prev) =>
        prev.map((item) => {
          if (item.id !== taskId) return item;
          const novoStatus =
            item.status === "concluida" ? "pendente" : "concluida";
          return { ...item, status: novoStatus };
        }),
      );
      await taskService.toggleStatus(taskId);
      toast.success(
        task.status === "concluida" ? "Tarefa reaberta!" : "Tarefa concluída!",
      );
    } catch {
      setTasks(previousTasks);
      toast.error("Erro ao atualizar tarefa!");
    }
  };

  const deleteTask = async (taskId) => {
    const previousTasks = tasks;
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    try {
      await taskService.delete(taskId);
      toast.success("Tarefa deletada!");
    } catch {
      setTasks(previousTasks);
      toast.error("Erro ao deletar tarefa!");
    }
  };

  return {
    filteredTasks,
    filter,
    setFilter,
    order,
    setOrder,
    editTask,
    addTask,
    toggleTask,
    deleteTask,
  };
};
