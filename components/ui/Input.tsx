import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export default function Input({
  className,
  error,
  disabled,
  ...props
}: InputProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <input
        disabled={disabled}
        className={cn(
          "w-full min-h-12 px-6 py-2 border border-border-muted bg-white text-muted text-sm outline-none transition-colors",
          "placeholder:text-muted/70",
          "hover:border-text focus:border-text",
          disabled && "opacity-40 cursor-not-allowed",
          error && "border-red-500 focus:border-red-500",
          className,
        )}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 font-light">{error}</span>
      )}
    </div>
  );
}
