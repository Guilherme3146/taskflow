import { createPortal } from "react-dom";
import Button from "./Button";

const TaskDetailDialog = ({ isOpen, onClose, task }) => {
  if (!isOpen || !task) return null;

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-black/20 z-50">
      <div className="w-96 rounded-xl bg-white p-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full
              ${
                task.status === "concluida"
                  ? "bg-[#00adb5]/10 text-[#00adb5]"
                  : "bg-[#35383E]/10 text-[#35383E]"
              }`}
            >
              {task.status === "concluida" ? "Concluída" : "Pendente"}
            </span>
            <h2 className="text-xl font-semibold text-[#35383E] mt-2">
              {task.title}
            </h2>
          </div>
        </div>

        {task.description && (
          <div className="mb-4">
            <p className="text-xs font-medium text-[#9a9c9f] mb-1">Descrição</p>
            <p className="text-sm text-[#35383E]">{task.description}</p>
          </div>
        )}

        {task.due_date && (
          <div className="mb-6">
            <p className="text-xs font-medium text-[#9a9c9f] mb-1">
              Vencimento
            </p>
            <p className="text-sm text-[#35383E]">
              {formatDate(task.due_date)}
            </p>
          </div>
        )}

        <Button
          type="button"
          size="large"
          className="w-full"
          variant="secondary"
          onClick={onClose}
        >
          Fechar
        </Button>
      </div>
    </div>,
    document.body,
  );
};

export default TaskDetailDialog;
