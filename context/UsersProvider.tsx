"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "@/types/user";
import { INITIAL_USERS } from "@/data/data";

interface UsersContextType {
  users: User[];
}
const UsersContext = createContext<UsersContextType | undefined>(undefined);
export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used inside UsersProvider");
  }
  return context;
}
