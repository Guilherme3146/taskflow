import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { LogoutIcon, SunIcon, MoonIcon } from "../assets/icons";
import { Button, ConfirmDialog } from "../components/";
import { useTheme } from "../hooks/useTheme";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [logoutDialogIsOpen, setLogoutDialogIsOpen] = useState(false);

  return (
    <div className="h-screen w-72 bg-card flex flex-col justify-between">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-brand-primary">TaskFlow</h1>
        <p className="text-secondary">
          Um simples{" "}
          <span className="text-brand-primary">organizador de tarefas</span>.
        </p>
        <h2 className="font-bold text-primary">Olá, {user?.name}</h2>
      </div>

      <div className="px-5 py-6 flex items-start flex-col gap-2">
        <button
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
          }
          className="flex items-center gap-3 w-full px-4 cursor-pointer py-2 rounded-lg
                     text-secondary hover:text-primary
                     hover:bg-surface transition-colors duration-200"
        >
          {theme === "dark" ? (
            <>
              <SunIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Modo claro</span>
            </>
          ) : (
            <>
              <MoonIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Modo escuro</span>
            </>
          )}
        </button>

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
