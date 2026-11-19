import React from "react";
import { cn } from "@/lib/utils";

interface FieldProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Field({
  label,
  error,
  children,
  className,
}: FieldProps) {
  return (
    <div className={cn("w-full flex flex-col gap-1 ", className)}>
      {label && <label className="text-sm text-muted">{label}</label>}

      {children}

      {error && (
        <span className="text-xs text-red-500 font-light mt-0.5">{error}</span>
      )}
    </div>
  );
}
