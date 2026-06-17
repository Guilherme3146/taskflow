import { useState } from "react";
import { CheckIcon, TrashIcon, PencilIcon, DetailsIcon } from "../assets/icons";
import Button from "./Button";

const TaskItem = ({
  task,
  handleCheckboxClick,
  handleDeleteClick,
  handleViewClick,
  handleEditClick,
}) => {
  const [isChecked, setIsChecked] = useState(task.status === "concluida");

  const isConcluida = isChecked;

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleChange = async () => {
    setIsChecked((prev) => !prev);
    await new Promise((resolve) => setTimeout(resolve, 500));
    handleCheckboxClick(task.id);
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm transition-all duration-300
        ${
          isConcluida
            ? "bg-brand-primary/10 text-brand-primary"
            : "bg-card text-primary"
        }`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <label
          className={`relative shrink-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg transition-colors
            ${isConcluida ? "bg-brand-primary/20" : "bg-input"}`}
        >
          <input
            type="checkbox"
            checked={isConcluida}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={handleChange}
          />
          {isConcluida && <CheckIcon />}
        </label>

        <div className="flex flex-col min-w-0">
          <span
            className={`truncate ${
              isConcluida
                ? "line-through text-brand-primary opacity-60"
                : "text-primary"
            }`}
          >
            {task.title}
          </span>
          {task.due_date && (
            <span className="text-xs text-muted truncate">
              {formatDate(task.due_date)}
            </span>
          )}
        </div>
      </div>

      <div className="flex shrink-0">
        <Button
          aria-label="Editar Tarefa"
          variant="ghost"
          onClick={() => handleEditClick(task)}
        >
          <PencilIcon className="text-muted hover:text-primary transition" />
        </Button>
        <Button
          aria-label="Deletar Tarefa"
          variant="ghost"
          onClick={() => handleDeleteClick(task)}
        >
          <TrashIcon className="text-muted hover:text-brand-danger transition" />
        </Button>
        <Button
          aria-label="Ver Detalhes"
          variant="ghost"
          onClick={() => handleViewClick(task)}
        >
          <DetailsIcon className="text-muted hover:text-primary transition" />
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
