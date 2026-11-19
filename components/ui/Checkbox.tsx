"use client";
import { cn } from "@/lib/utils";
import Check from "./icons/Check";

interface CheckboxProps {
  id?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export default function Checkbox({
  id,
  checked = false,
  onChange,
  label,
  disabled = false,
  className,
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "group inline-flex items-center gap-3 cursor-pointer select-none text-sm font-light",
        disabled && "opacity-40 cursor-not-allowed pointer-events-none",
        className,
      )}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <div
        className={cn(
          " w-6 h-6 border border-text flex items-center justify-center transition-colors bg-white",
          "hover:border-text",
          checked && "border-text bg-text",
        )}
      >
        <Check
          className={cn(
            "opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity",
            checked && "text-white opacity-100",
          )}
        />
      </div>
      {label && <span className="text-muted">{label}</span>}
    </label>
  );
}
