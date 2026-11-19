import { useMemo } from "react";
import Select from "@/components/ui/Select";
import Field from "@/components/ui/Field";
import { User } from "@/types/user";

interface UserSelectProps {
  users: User[];
  selectedUserId: string;
  onSelect: (id: string) => void;
}

export default function UserSelect({
  users,
  selectedUserId,
  onSelect,
}: UserSelectProps) {
  const options = useMemo(() => {
    return users.map((u) => ({
      name: u.name,
      value: u.id,
    }));
  }, [users]);

  return (
    <div className="max-w-md">
      <Field label="User">
        <Select
          options={options}
          value={selectedUserId}
          onChange={onSelect}
          placeholder="Select user to edit"
        />
      </Field>
    </div>
  );
}
