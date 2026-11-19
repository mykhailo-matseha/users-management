import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BaseProps {
  children: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
  className?: string;
  isIcon?: boolean;
  variant?: "sm" | "md" | "lg";
}

type AsButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AsLinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = AsButtonProps | AsLinkProps;

export default function Button({
  children,
  isActive = false,
  disabled = false,
  isIcon = false,
  className,
  variant = "md",

  ...props
}: ButtonProps) {
  const buttonStyles = cn(
    "inline-flex items-center justify-center border border-border text-sm font-light transition-colors p-3 text-center hover:border-text cursor-pointer min-h-12",
    isActive && "bg-border pointer-events-none cursor-default",
    disabled && "opacity-40 cursor-not-allowed pointer-events-none",
    variant === "sm" && "min-w-25",
    variant === "md" && "min-w-37.5",
    variant === "lg" && "min-w-50",
    isIcon && "min-w-12",
    className,
  );

  if (props.href) {
    const { href, ...linkProps } = props as AsLinkProps;
    return (
      <Link
        href={disabled ? "#" : href}
        aria-disabled={disabled}
        className={buttonStyles}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as AsButtonProps;
  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonStyles}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
