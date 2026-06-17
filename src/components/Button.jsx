import { button } from "../lib/componentVariants";

const Button = ({ children, variant, size, className, ...rest }) => {
  return (
    <button className={button({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
