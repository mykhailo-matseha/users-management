import { cn } from "@/lib/utils";
import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function ChevronDown({
  size = 16,
  ref,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V7H2V5H22V7H20ZM6 7V20H18V7H6ZM7 2H17V4H7V2Z"
        fill="currentColor"
      />
    </svg>
  );
}
