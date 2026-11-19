import { User, OptionItem } from "@/types/user";

export const DEPARTMENTS: OptionItem[] = [
  {
    name: "Human Resources",
    value: "HR",
  },
  {
    name: "Finance",
    value: "FIN",
  },
  {
    name: "Information Technology",
    value: "IT",
  },
  {
    name: "Marketing",
    value: "MKT",
  },
  {
    name: "Sales",
    value: "SAL",
  },
  {
    name: "Customer Support",
    value: "CS",
  },
  {
    name: "Research and Development",
    value: "R&D",
  },
  {
    name: "Operations",
    value: "OPS",
  },
  {
    name: "Legal",
    value: "LEG",
  },
  {
    name: "Product Management",
    value: "PM",
  },
];

export const COUNTRIES: OptionItem[] = [
  {
    name: "Ukraine",
    value: "UA",
  },
  {
    name: "United States",
    value: "US",
  },
  {
    name: "Canada",
    value: "CA",
  },
  {
    name: "Germany",
    value: "DE",
  },
  {
    name: "France",
    value: "FR",
  },
  {
    name: "Australia",
    value: "AU",
  },
  {
    name: "Japan",
    value: "JP",
  },
  {
    name: "United Kingdom",
    value: "GB",
  },
  {
    name: "China",
    value: "CN",
  },
  {
    name: "India",
    value: "IN",
  },
];

export const STATUSES: OptionItem[] = [
  {
    name: "All statuses",
    value: "ALL",
  },
  {
    name: "Active",
    value: "ACTIVE",
  },
  {
    name: "Disabled",
    value: "DISABLED",
  },
];

export const INITIAL_USERS: User[] = [
  {
    id: "1",
    name: "John Doe",
    status: {
      name: "Active",
      value: "ACTIVE",
    },
    department: {
      name: "Information Technology",
      value: "IT",
    },
    country: {
      name: "United States",
      value: "US",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    status: {
      name: "Disabled",
      value: "DISABLED",
    },
    department: {
      name: "Finance",
      value: "FIN",
    },
    country: {
      name: "Canada",
      value: "CA",
    },
  },
  {
    id: "3",
    name: "Alice Johnson",
    status: {
      name: "Active",
      value: "ACTIVE",
    },
    department: {
      name: "Marketing",
      value: "MKT",
    },
    country: {
      name: "United Kingdom",
      value: "GB",
    },
  },
  {
    id: "3",
    name: "Bob Brown",
    status: {
      name: "All statuses",
      value: "ALL",
    },
    department: {
      name: "Sales",
      value: "SAL",
    },
    country: {
      name: "Australia",
      value: "AU",
    },
  },
  {
    id: "3",
    name: "Charlie Davis",
    status: {
      name: "Active",
      value: "ACTIVE",
    },
    department: {
      name: "Customer Support",
      value: "CS",
    },
    country: {
      name: "Germany",
      value: "DE",
    },
  },
  {
    id: "4",
    name: "Eve Wilson",
    status: {
      name: "Disabled",
      value: "DISABLED",
    },
    department: {
      name: "Human Resources",
      value: "HR",
    },
    country: {
      name: "France",
      value: "FR",
    },
  },
  {
    id: "4",
    name: "Frank Moore",
    status: {
      name: "Active",
      value: "ACTIVE",
    },
    department: {
      name: "Operations",
      value: "OPS",
    },
    country: {
      name: "India",
      value: "IN",
    },
  },
  {
    id: "5",
    name: "Grace Lee",
    status: {
      name: "All statuses",
      value: "ALL",
    },
    department: {
      name: "Legal",
      value: "LEG",
    },
    country: {
      name: "China",
      value: "CN",
    },
  },
  {
    id: "6",
    name: "Henry White",
    status: {
      name: "Active",
      value: "ACTIVE",
    },
    department: {
      name: "Product Management",
      value: "PM",
    },
    country: {
      name: "Japan",
      value: "JP",
    },
  },
  {
    id: "7",
    name: "Isabella Green",
    status: {
      name: "Disabled",
      value: "DISABLED",
    },
    department: {
      name: "Research and Development",
      value: "R&D",
    },
    country: {
      name: "Ukraine",
      value: "UA",
    },
  },
  {
    id: "8",
    name: "Jack Black",
    status: {
      name: "Active",
      value: "ACTIVE",
    },
    department: {
      name: "Sales",
      value: "SAL",
    },
    country: {
      name: "Australia",
      value: "AU",
    },
  },
  {
    id: "8",
    name: "Lily Scott",
    status: {
      name: "All statuses",
      value: "ALL",
    },
    department: {
      name: "Information Technology",
      value: "IT",
    },
    country: {
      name: "Canada",
      value: "CA",
    },
  },
];
