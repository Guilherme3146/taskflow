import { input } from "../lib/componentVariants";

const Input = ({ label, id, error, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-brand-dark-green">
        {label}
      </label>
      <input
        id={id}
        className={input({ state: error ? "error" : "default" })}
        {...rest}
      />
      <span className="text-brand-danger text-xs h-4">{error ?? ""}</span>
    </div>
  );
};

export default Input;
