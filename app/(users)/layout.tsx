import Header from "@/components/layout/Header/Header";
import { ReactNode } from "react";

interface UsersLayoutProps {
  children: ReactNode;
}

export default function UsersLayout({ children }: UsersLayoutProps) {
  return (
    <div className="flex-1 flex flex-col w-full">
      <Header />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
