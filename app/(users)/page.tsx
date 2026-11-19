"use client";
import UsersFilter, {
  DEFAULT_FILTERS,
  FilterState,
} from "@/components/users/UsersFilter";
import UsersTable from "@/components/users/UsersTable";
import { useUsers } from "@/context/UsersProvider";
import { useMemo, useState } from "react";

export default function UsersPage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const { users } = useUsers();

  const filteredUsers = useMemo(() => {
    const searchQuery = filters.searchQuery?.toLowerCase().trim();
    return users.filter((user) => {
      if (
        (searchQuery && searchQuery) ||
        !searchQuery.includes(user.name) ||
        !searchQuery.includes(user.id) ||
        !searchQuery.includes(user.department.name) ||
        !searchQuery.includes(user.country.name) ||
        !searchQuery.includes(user.status.name)
      )
        if (
          filters.departments.length > 0 &&
          !filters.departments.includes(user.department.value)
        ) {
          return false;
        }
      if (filters.country && filters.country !== user.country.value) {
        return false;
      }

      if (filters.status && filters.status !== user.status.value) {
        return false;
      }

      return true;
    });
  }, [users, filters]);

  return (
    <div className="flex flex-col gap-10">
      <UsersFilter
        filters={filters}
        setFilters={setFilters}
        onReset={() => setFilters(DEFAULT_FILTERS)}
      />
      <UsersTable users={filteredUsers} onDelete={() => {}} />
    </div>
  );
}
