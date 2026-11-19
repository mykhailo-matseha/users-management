import Header from "@/components/layout/Header/Header";
import { UsersProvider } from "@/context/UsersProvider";
import { ReactNode } from "react";

interface UsersLayoutProps {
  children: ReactNode;
}

export default function UsersLayout({ children }: UsersLayoutProps) {
  return (
    <UsersProvider>
      <div className="flex-1 flex flex-col w-full">
        <Header />
        <main className="flex-1 px-5 py-20">
          <div className="p-20 pt-15 border border-text max-w-310 mx-auto">
            {children}
          </div>
        </main>
      </div>
    </UsersProvider>
  );
}
