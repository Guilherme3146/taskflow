import { useState } from "react";
import { AddIcon } from "../assets/icons";
import { useTasks } from "../hooks/useTasks";

import { motion } from "framer-motion";

import {
  TaskDialog,
  ConfirmDialog,
  TaskDetailDialog,
  Button,
  TaskFilters,
  TaskItem,
} from "../components/";

const Tasks = () => {
  const {
    filteredTasks,
    filter,
    setFilter,
    toggleTask,
    deleteTask,
    addTask,
    editTask,
  } = useTasks();

  const [addDialogIsOpen, setAddDialogIsOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToView, setTaskToView] = useState(null);

  const handleEditClick = (task) => {
    setTaskToEdit(task);
  };

  const handleEditClose = () => {
    setTaskToEdit(null);
  };

  const handleEditSubmit = async (data) => {
    await editTask(taskToEdit.id, data);
  };

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-brand-primary">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="large"
            aria-label="Nova Tarefa"
            onClick={() => setAddDialogIsOpen(true)}
          >
            Nova Tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      <TaskFilters filter={filter} onFilterChange={setFilter} />

      <div className="rounded-xl space-y-3">
        {filteredTasks.length === 0 ? (
          <p className="text-center py-8 text-gray-400 text-sm">
            Nenhuma tarefa {filter !== "todas" ? filter : "cadastrada"}
          </p>
        ) : (
          filteredTasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TaskItem
                key={task.id}
                task={task}
                handleCheckboxClick={toggleTask}
                handleDeleteClick={setTaskToDelete}
                handleEditClick={handleEditClick}
                handleViewClick={setTaskToView}
              />
            </motion.div>
          ))
        )}
      </div>

      <TaskDialog
        isOpen={addDialogIsOpen}
        onClose={() => setAddDialogIsOpen(false)}
        onSubmit={addTask}
      />

      <TaskDialog
        isOpen={taskToEdit !== null}
        onClose={handleEditClose}
        onSubmit={handleEditSubmit}
        task={taskToEdit}
      />

      <ConfirmDialog
        isOpen={taskToDelete !== null}
        onClose={() => setTaskToDelete(null)}
        onConfirm={() => deleteTask(taskToDelete.id)}
        title="Deletar tarefa"
        description={`Tem certeza que deseja deletar "${taskToDelete?.title}"?`}
      />

      <TaskDetailDialog
        isOpen={taskToView !== null}
        onClose={() => setTaskToView(null)}
        task={taskToView}
      />
    </div>
  );
};

export default Tasks;
