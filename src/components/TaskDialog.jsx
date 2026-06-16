import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../lib/schemas";
import Button from "./Button";
import Input from "./input";

const TaskDialog = ({ isOpen, onClose, onSubmit, task }) => {
  const isEditing = Boolean(task);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      due_date: task?.due_date || "",
    },
  });

  useEffect(() => {
    reset({
      title: task?.title || "",
      description: task?.description || "",
      due_date: task?.due_date || "",
    });
  }, [task, reset]);

  const handleSave = async (data) => {
    await onSubmit(data);
    reset();
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-black/20 z-50">
      <div className="w-96 rounded-xl bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-[#35383E]">
          {isEditing ? "Editar Tarefa" : "Nova Tarefa"}
        </h2>
        <p className="mt-1 mb-4 text-sm text-[#9a9c9f]">
          Insira as informações abaixo
        </p>

        <form
          onSubmit={handleSubmit(handleSave)}
          className="flex flex-col gap-3"
        >
          <Input
            id="title"
            label="Título"
            placeholder="Insira o título da tarefa"
            error={errors.title?.message}
            {...register("title")}
          />
          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa (opcional)"
            error={errors.description?.message}
            {...register("description")}
          />
          <Input
            id="due_date"
            label="Data de vencimento"
            type="date"
            error={errors.due_date?.message}
            {...register("due_date")}
          />

          <div className="flex gap-3 mt-2">
            <Button
              type="button"
              size="large"
              className="w-full"
              variant="secondary"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              size="large"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default TaskDialog;
