const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant == "primary") {
      return "bg-[#00adb5] text-white";
    }
    if (variant == "ghost") {
      return "bg-transparent text-[#818181]";
    }
    if (variant == "secondary") {
      return "bg-[#EEEEEE] text-[#35383E]";
    }
    if (variant == "danger") {
      return "bg-red-500 text-white";
    }
  };

  const getSizeClasses = () => {
    if (size == "small") {
      return "py-1 text-xs";
    }

    if (size == "large") {
      return "py-2 text-sm ";
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md px-3 cursor-pointer transition hover:opacity-75 ${className} ${getVariantClasses()} ${getSizeClasses()}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
