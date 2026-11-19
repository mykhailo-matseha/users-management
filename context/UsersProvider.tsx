"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types/user";
import { INITIAL_USERS } from "@/data/data";

const STORAGE_KEY = "users_management_data";

interface UsersContextType {
  users: User[];
  deleteUser: (id: string) => void;
  addUser: (userData: Omit<User, "id">) => void;
  updateUser: (updatedUser: User) => void;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setTimeout(() => {
            setUsers(parsed);
          }, 0);
        }
      } catch (e) {
        console.error("Error: ", e);
      }
    }
  }, []);

  const deleteUser = (id: string) => {
    setUsers((prev) => {
      const updated = prev.filter((user) => user.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const addUser = (userData: Omit<User, "id">) => {
    const newUser: User = {
      ...userData,
      id: crypto.randomUUID(),
    };

    setUsers((prev) => {
      const updated = [newUser, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prev) => {
      const updated = prev.map((user) =>
        user.id === updatedUser.id ? updatedUser : user,
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
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
