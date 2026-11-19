import Header from "@/components/layout/Header/Header";
import { ReactNode } from "react";

interface UsersLayoutProps {
  children: ReactNode;
}

export default function UsersLayout({ children }: UsersLayoutProps) {
  return (
    <div className="flex-1 flex flex-col w-full">
      <Header />
      <main className="flex-1 px-25 py-20">
        <div className="p-20 pt-15 border border-text ">{children}</div>
      </main>
    </div>
  );
}
