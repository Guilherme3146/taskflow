import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import Button from "./Button";

const TaskDetailDialog = ({ isOpen, onClose, task }) => {
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
    <AnimatePresence>
      {isOpen && task && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center backdrop-blur bg-black/20 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-96 rounded-xl bg-white p-6 shadow-lg"
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-black/20 z-50">
              <div className="w-96 rounded-xl bg-white p-6 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full
              ${
                task.status === "concluida"
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "bg-brand-dark-green/10 text-brand-dark-green"
              }`}
                    >
                      {task.status === "concluida" ? "Concluída" : "Pendente"}
                    </span>
                    <h2 className="text-xl font-semibold text-brand-dark-green mt-2">
                      {task.title}
                    </h2>
                  </div>
                </div>

                {task.description && (
                  <div className="mb-4">
                    <p className="text-xs font-medium text-brand-text-gray mb-1">
                      Descrição
                    </p>
                    <p className="text-sm text-brand-dark-green">
                      {task.description}
                    </p>
                  </div>
                )}

                {task.due_date && (
                  <div className="mb-6">
                    <p className="text-xs font-medium text-brand-text-gray mb-1">
                      Vencimento
                    </p>
                    <p className="text-sm text-brand-dark-green">
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
            </div>
            ,
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default TaskDetailDialog;
