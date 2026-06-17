import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { LogoutIcon } from "../assets/icons";
import { Button, ConfirmDialog } from "../components/";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const [logoutDialogIsOpen, setLogoutDialogIsOpen] = useState(false);

  return (
    <div className="h-screen w-72 bg-white flex flex-col justify-between">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-brand-primary">TaskFlow</h1>
        <p className="dark">
          Um simples{" "}
          <span className="text-brand-primary">organizador de tarefas</span>.
        </p>
        <h2 className="font-bold">Olá, {user?.name}</h2>
      </div>

      <div className="px-5 py-6 flex items-start flex-col gap-2">
        <Button variant="logout" onClick={() => setLogoutDialogIsOpen(true)}>
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
