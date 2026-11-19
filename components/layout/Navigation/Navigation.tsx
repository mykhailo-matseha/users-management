import { ROUTES } from "@/config/navigation";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center gap-2 w-full">
      {ROUTES.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
