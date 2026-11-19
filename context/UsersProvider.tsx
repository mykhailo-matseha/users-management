"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "@/types/user";
import { INITIAL_USERS } from "@/data/data";

interface UsersContextType {
  users: User[];
  deleteUser: (id: string) => void;
  addUser: (userData: Omit<User, "id">) => void;
  updateUser: (updatedUser: User) => void;
}
const UsersContext = createContext<UsersContextType | undefined>(undefined);
export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);

  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const addUser = (userData: Omit<User, "id">) => {
    const newUser: User = {
      ...userData,
      id: crypto.randomUUID(),
    };
    setUsers((prev) => [newUser, ...prev]);
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );
  };

  return (
    <UsersContext.Provider value={{ users, deleteUser, addUser, updateUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used inside UsersProvider");
  }
  return context;
}
