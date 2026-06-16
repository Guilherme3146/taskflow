import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { LogoutIcon } from "../assets/icons";
import Button from "./Button";
import ConfirmDialog from "./ConfirmDialog";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const [logoutDialogIsOpen, setLogoutDialogIsOpen] = useState(false);

  return (
    <div className="h-screen w-72 bg-white flex flex-col justify-between">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00adb5]">Task Manager</h1>
        <p>
          Um simples{" "}
          <span className="text-[#00adb5]">organizador de tarefas</span>.
        </p>
        <h2>Olá, {user?.name}</h2>
      </div>

      <div className="px-5 py-6">
        <Button variant="ghost" onClick={() => setLogoutDialogIsOpen(true)}>
          <LogoutIcon />
          Sair
        </Button>
      </div>

      <ConfirmDialog
        isOpen={logoutDialogIsOpen}
        onClose={() => setLogoutDialogIsOpen(false)}
        onConfirm={logout}
        title="Sair"
        description="Tem certeza que deseja sair da sua conta?"
      />
    </div>
  );
};

export default Sidebar;
