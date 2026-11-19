"use client";
import Heading from "@/components/ui/Heading";
import UsersFilter, {
  DEFAULT_FILTERS,
  FilterState,
} from "@/components/users/UsersFilter";
import UsersTable from "@/components/users/UsersTable";
import { useUsers } from "@/context/UsersProvider";
import { useMemo, useState } from "react";

export default function UsersPage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const { users, deleteUser } = useUsers();

  const filteredUsers = useMemo(() => {
    const searchQuery = filters.searchQuery?.toLowerCase().trim();
    return users.filter((user) => {
      if (searchQuery) {
        const matchesName = user.name.toLowerCase().includes(searchQuery);
        const matchesDept = user.department.name
          .toLowerCase()
          .includes(searchQuery);
        const matchesCountry = user.country.name
          .toLowerCase()
          .includes(searchQuery);
        if (!matchesName && !matchesDept && !matchesCountry) {
          return false;
        }
      }
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
      <Heading as="h1" variation="section">
        USERS
      </Heading>
      <UsersFilter
        filters={filters}
        setFilters={setFilters}
        onReset={() => setFilters(DEFAULT_FILTERS)}
      />
      <UsersTable users={filteredUsers} onDelete={deleteUser} />
    </div>
  );
}
