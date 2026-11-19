import { COUNTRIES, DEPARTMENTS, STATUSES } from "@/data/data";
import Select from "../ui/Select";
import Button from "../ui/Button";
import Trash from "../ui/icons/Trash";
import Input from "../ui/Input";

export interface FilterState {
  searchQuery: string;
  departments: string[];
  country: string;
  status: string;
}
export const DEFAULT_FILTERS: FilterState = {
  searchQuery: "",
  departments: [],
  country: "",
  status: "",
};

interface UsersFilterProps {
  filters: FilterState;
  setFilters: (newFilters: FilterState) => void;
  onReset: () => void;
}

function UsersFilter({ filters, setFilters, onReset }: UsersFilterProps) {
  const isEnoughDeps = filters.departments.length >= 3;

  const handleDepartmentsChange = (newDeps: string[]) => {
    if (newDeps.length < 3) {
      setFilters({
        ...DEFAULT_FILTERS,
        departments: newDeps,
      });
    } else {
      setFilters({
        ...filters,
        departments: newDeps,
      });
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="font-light text-sm">
        Please add at least 3 departmetns to be able to proceed next steps.{" "}
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex gap-3 items-center">
          <Input
            value={filters.searchQuery}
            placeholder="Search..."
            onChange={(e) => {
              setFilters({
                ...filters,
                searchQuery: e.target.value,
              });
            }}
          />
          <Select
            multiple
            options={DEPARTMENTS}
            value={filters.departments}
            onChange={(newDeps) => handleDepartmentsChange(newDeps)}
            placeholder="All Departments"
          />
          <Select
            options={COUNTRIES}
            value={filters.country}
            onChange={(newCountry) => {
              setFilters({
                ...filters,
                country: newCountry,
              });
            }}
            placeholder="All Counties"
            disabled={!isEnoughDeps}
          />
          <Select
            options={STATUSES}
            value={filters.status}
            onChange={(newStatus) => {
              setFilters({
                ...filters,
                status: newStatus,
              });
            }}
            placeholder="Select Status"
            disabled={!isEnoughDeps}
          />
        </div>
        <Button isIcon={true} onClick={onReset}>
          <Trash />
        </Button>
      </div>
    </div>
  );
}

export default UsersFilter;
