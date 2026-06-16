import { createPortal } from "react-dom";
import Button from "./Button";

const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, description }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-black/20 z-50">
      <div className="w-96 rounded-xl bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-[#35383E]">{title}</h2>
        <p className="mt-1 mb-6 text-sm text-[#9a9c9f]">{description}</p>

        <div className="flex gap-3">
          <Button
            type="button"
            size="large"
            className="w-full"
            variant="secondary"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            size="large"
            className="w-full"
            variant="danger"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ConfirmDialog;
