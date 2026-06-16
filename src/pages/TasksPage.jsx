import { useState } from "react";
import { Tasks, Sidebar } from "../components/";

const TasksPage = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {sidebarIsOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={() => setSidebarIsOpen(false)}
        />
      )}
      <div
        className={`fixed z-20 h-full transition-transform duration-300 md:relative md:translate-x-0
        ${sidebarIsOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <Sidebar onClose={() => setSidebarIsOpen(false)} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 bg-white md:hidden">
          <h1 className="text-lg font-semibold text-[#00adb5]">Task Manager</h1>
          <button
            onClick={() => setSidebarIsOpen(true)}
            className="flex flex-col gap-1.5 cursor-pointer"
          >
            <span className="w-6 h-0.5 bg-[#35383E]" />
            <span className="w-6 h-0.5 bg-[#35383E]" />
            <span className="w-6 h-0.5 bg-[#35383E]" />
          </button>
        </div>

        <Tasks />
      </div>
    </div>
  );
};

export default TasksPage;
