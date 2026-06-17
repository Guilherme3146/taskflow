import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import Button from "./Button";

const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, description }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center backdrop-blur bg-black/20 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-96 rounded-xl bg-card p-6 shadow-lg"
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
            <h2 className="text-xl font-semibold text-brand-dark-green">
              {title}
            </h2>

            <p className="mt-1 mb-6 text-sm text-brand-text-gray">
              {description}
            </p>

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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ConfirmDialog;
