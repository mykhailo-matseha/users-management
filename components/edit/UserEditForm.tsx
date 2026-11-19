"use client";

import { useState, useMemo } from "react";
import { DEPARTMENTS, COUNTRIES, STATUSES } from "@/data/data";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Field from "@/components/ui/Field";
import { User } from "@/types/user";
import Heading from "../ui/Heading";

interface UserEditFormProps {
  user: User;
  onSave: (updatedUser: User) => void;
}

export default function UserEditForm({ user, onSave }: UserEditFormProps) {
  const [formData, setFormData] = useState<User>(user);

  const hasChanges = useMemo(() => {
    return (
      formData.name !== user.name ||
      formData.department.value !== user.department.value ||
      formData.country.value !== user.country.value ||
      formData.status.value !== user.status.value
    );
  }, [formData, user]);

  const handleUndo = () => {
    setFormData(user);
  };

  const handleSave = () => {
    if (hasChanges) {
      onSave(formData);
    }
  };

  const isNameValid = formData.name.trim().length > 0;
  const nameError = !isNameValid ? "Full name is required" : undefined;

  return (
    <div className="flex flex-col gap-10">
      <Heading as="h3">User Information</Heading>
      <div className="grid grid-cols-2 gap-x-20 gap-y-10">
        <Field label="Full Name" error={nameError}>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter full name"
          />
        </Field>

        <Field label="Department">
          <Select
            options={DEPARTMENTS}
            value={formData.department.value}
            onChange={(deptVal) => {
              const found = DEPARTMENTS.find((d) => d.value === deptVal);
              if (found) setFormData({ ...formData, department: found });
            }}
            placeholder="Select department"
          />
        </Field>

        <Field label="Country">
          <Select
            options={COUNTRIES}
            value={formData.country.value}
            onChange={(countryVal) => {
              const found = COUNTRIES.find((c) => c.value === countryVal);
              if (found) setFormData({ ...formData, country: found });
            }}
            placeholder="Select country"
          />
        </Field>

        <Field label="Status">
          <Select
            options={STATUSES}
            value={formData.status.value}
            onChange={(statusVal) => {
              const found = STATUSES.find((s) => s.value === statusVal);
              if (found) setFormData({ ...formData, status: found });
            }}
            placeholder="Select status"
          />
        </Field>
      </div>
      <div className="flex items-center justify-end gap-5 mt-10">
        {hasChanges && (
          <Button onClick={handleUndo} variant="sm">
            Undo
          </Button>
        )}

        <Button
          onClick={handleSave}
          disabled={!hasChanges || Boolean(nameError)}
          variant="lg"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
