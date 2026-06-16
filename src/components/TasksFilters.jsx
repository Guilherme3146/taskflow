const FILTERS = [
  { label: "Todas", value: "todas" },
  { label: "Pendentes", value: "pendente" },
  { label: "Concluídas", value: "concluida" },
];

const TaskFilters = ({ filter, onFilterChange }) => {
  return (
    <div className="flex gap-2">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
            ${
              filter === f.value
                ? "bg-[#00adb5] text-white"
                : "bg-white text-gray-500 hover:bg-gray-100"
            }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
