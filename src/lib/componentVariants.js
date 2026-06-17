import { tv } from "tailwind-variants";

export const button = tv({
  base: "flex items-center justify-center gap-2 rounded-md px-3 py-1.5 cursor-pointer transition hover:opacity-75",
  variants: {
    variant: {
      primary: "bg-brand-primary text-white",
      ghost: "bg-transparent text-brand-dark-gray",
      secondary: "bg-brand-light-gray text-brand-dark-green",
      danger: "bg-brand-danger text-white",
      logout: "bg-transparent text-brand-danger",
    },
    size: {
      small: "py-1 text-xs",
      large: "py-2 text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

export const input = tv({
  base: "w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 transition",
  variants: {
    state: {
      default: "border-gray-300 focus:ring-brand-primary",
      error: "border-brand-danger focus:ring-brand-danger",
    },
  },
  defaultVariants: {
    state: "default",
  },
});
