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
          className={`px-4 py-1.5 rounded-md text-sm font-medium cursor-pointer transition-colors
            ${
              filter === f.value
                ? "bg-brand-primary text-white"
                : "bg-card text-primary hover:bg-surface hover:text-primary"
            }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
