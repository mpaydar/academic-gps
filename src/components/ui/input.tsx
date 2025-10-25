import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
        className={cn(
          // Core design (light-focused)
          "flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-900 placeholder:text-slate-500 shadow-sm transition-colors",

          // Force consistency across themes
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950",
          "disabled:cursor-not-allowed disabled:opacity-50",

          // Override dark-mode auto-inversion
          "dark:bg-white dark:text-slate-900 dark:placeholder:text-slate-500",

          className
        )}
      />
    );
  }
);

Input.displayName = "Input";
export { Input };
