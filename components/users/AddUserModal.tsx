"use client";

import { useState } from "react";
import { useUsers } from "@/context/UsersProvider";
import { DEPARTMENTS, COUNTRIES, STATUSES } from "@/data/data";
import { OptionItem } from "@/types/user";
import Heading from "@/components/ui/Heading";
import Field from "@/components/ui/Field";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddUserModal({ isOpen, onClose }: AddUserModalProps) {
  const { addUser } = useUsers();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState<OptionItem | null>(null);
  const [country, setCountry] = useState<OptionItem | null>(null);
  const [status, setStatus] = useState<OptionItem | null>(null);
  const [isTouched, setIsTouched] = useState(false);

  if (!isOpen) return null;

  const handleReset = () => {
    setName("");
    setDepartment(null);
    setCountry(null);
    setStatus(null);
    setIsTouched(false);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTouched(true);

    if (!name.trim() || !department || !country || !status) {
      return;
    }

    addUser({
      name: name.trim(),
      department,
      country,
      status,
    });

    handleClose();
  };

  const isNameEmpty = isTouched && name.trim().length === 0;
  const isDeptEmpty = isTouched && !department;
  const isCountryEmpty = isTouched && !country;
  const isStatusEmpty = isTouched && !status;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#7D7D7D]/50 p-4"
    >
      <div className="bg-white border border-text py-10 px-15 max-w-180 w-full flex flex-col gap-15">
        <Heading as="h2" variation="section" className="text-center">
          ADD USER
        </Heading>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <Field
              label="Full Name"
              error={isNameEmpty ? "Full name is required" : undefined}
            >
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
              />
            </Field>

            <Field
              label="Department"
              error={isDeptEmpty ? "Department is required" : undefined}
            >
              <Select
                options={DEPARTMENTS}
                value={department?.value || ""}
                onChange={(val) => {
                  const found = DEPARTMENTS.find((d) => d.value === val);
                  if (found) setDepartment(found);
                }}
                placeholder="Select department"
              />
            </Field>

            <Field
              label="Country"
              error={isCountryEmpty ? "Country is required" : undefined}
            >
              <Select
                options={COUNTRIES}
                value={country?.value || ""}
                onChange={(val) => {
                  const found = COUNTRIES.find((c) => c.value === val);
                  if (found) setCountry(found);
                }}
                placeholder="Select country"
              />
            </Field>

            <Field
              label="Status"
              error={isStatusEmpty ? "Status is required" : undefined}
            >
              <Select
                options={STATUSES}
                value={status?.value || ""}
                onChange={(val) => {
                  const found = STATUSES.find((s) => s.value === val);
                  if (found) setStatus(found);
                }}
                placeholder="Select status"
              />
            </Field>
          </div>

          <div className="flex justify-end items-center gap-5">
            <Button type="button" onClick={handleClose} variant="sm">
              Cancel
            </Button>
            <Button type="submit" variant="md">
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
