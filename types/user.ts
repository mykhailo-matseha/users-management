export type UserStatus = "Active" | "Inactive";

export interface User {
  id: string;
  name: string;
  department: OptionItem;
  country: OptionItem;
  status: OptionItem;
}

export interface OptionItem {
  name: string;
  value: string;
}
