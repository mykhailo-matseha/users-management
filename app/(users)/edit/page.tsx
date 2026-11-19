"use client";

import { useState } from "react";
import { useUsers } from "@/context/UsersProvider";
import UserSelect from "@/components/edit/UserSelect";
import UserEditForm from "@/components/edit/UserEditForm";
import Heading from "@/components/ui/Heading";

export default function UsersEditPage() {
  const { users, updateUser } = useUsers();
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const activeUserId = selectedUserId || users[0]?.id || "";
  const currentUser = users.find((u) => u.id === activeUserId);

  return (
    <div className="flex flex-col gap-15">
      <Heading variation="section" className="not-last:mb-5" as="h1">
        USERS
      </Heading>
      <UserSelect
        users={users}
        selectedUserId={activeUserId}
        onSelect={setSelectedUserId}
      />
      {currentUser && (
        <UserEditForm
          key={currentUser.id}
          user={currentUser}
          onSave={updateUser}
        />
      )}
    </div>
  );
}
