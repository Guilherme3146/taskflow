import { useAuth } from "../hooks/useAuth";
import { LogoutIcon } from "../assets/icons";

import { Button } from "../components/";

const Sidebar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="h-screen w-72 bg-white flex flex-col justify-between">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00adb5]">Task Manager</h1>
        <p>
          Um simples{" "}
          <span className="text-[#00adb5]">organizador de tarefas</span>.
        </p>
        <h2 className="small font-bold">Olá, {user?.name}</h2>
      </div>

      <div className="px-5 py-6">
        <Button variant="ghost" onClick={logout}>
          <LogoutIcon />
          Sair
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
