import React from "react";
import { cn } from "@/lib/utils";

export default function Input({
  className,
  disabled,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full flex flex-col gap-1">
      <input
        disabled={disabled}
        className={cn(
          "w-full min-h-12 px-6 py-2 border border-border-muted bg-white text-muted text-sm outline-none transition-colors",
          "placeholder:text-muted/70",
          "hover:border-text focus:border-text",
          disabled && "opacity-40 cursor-not-allowed",
          className,
        )}
        {...props}
      />
    </div>
  );
}
