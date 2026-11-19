"use client";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/config/navigation";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pagePath = usePathname();
  return (
    <nav className="flex items-center justify-center gap-5 w-full">
      {ROUTES.map((item) => (
        <Button
          variant="lg"
          key={item.href}
          href={item.href}
          isActive={pagePath === item.href}
        >
          {item.title}
        </Button>
      ))}
    </nav>
  );
}
