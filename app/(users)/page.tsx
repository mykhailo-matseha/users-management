"use client";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import AddUserModal from "@/components/users/AddUserModal";
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
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

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
      <div className="flex gap-2 flex-wrap items-end justify-between">
        <UsersFilter
          filters={filters}
          setFilters={setFilters}
          onReset={() => setFilters(DEFAULT_FILTERS)}
        />
        <Button
          onClick={() => setIsAddUserOpen(true)}
          variant="md"
          className="shrink-0"
        >
          Add User
        </Button>
      </div>

      <UsersTable users={filteredUsers} onDelete={deleteUser} />
      <AddUserModal
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
      />
    </div>
  );
}
