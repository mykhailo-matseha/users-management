"use client";

import * as Popover from "@radix-ui/react-popover";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";
import Checkbox from "@/components/ui/Checkbox";
import ChevronDown from "@/components/ui/icons/ChevronDown";
import { OptionItem } from "@/types/user";
import { useMemo, useState } from "react";

interface BaseSelectProps {
  options: OptionItem[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

interface SingleSelectProps extends BaseSelectProps {
  multiple?: false;
  value: string;
  onChange: (value: string) => void;
}

interface MultiSelectProps extends BaseSelectProps {
  multiple: true;
  value: string[];
  onChange: (value: string[]) => void;
}

export type SelectProps = SingleSelectProps | MultiSelectProps;

export default function Select({
  options,
  value,
  onChange,
  placeholder = "Select...",
  multiple = false,
  disabled = false,
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const displayedOptions = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!multiple) {
      return options.filter((opt) => opt.name.toLowerCase().includes(query));
    }

    const selectedValues = (value as string[]) || [];

    const selected = options.filter((opt) =>
      selectedValues.includes(opt.value),
    );
    const unselected = options
      .filter((opt) => !selectedValues.includes(opt.value))
      .filter((opt) => opt.name.toLowerCase().includes(query));

    return [...selected, ...unselected];
  }, [options, value, search, multiple]);

  const handleSelect = (itemValue: string) => {
    if (multiple) {
      const currentValues = (value as string[]) || [];
      const isSelected = currentValues.includes(itemValue);
      const nextValues = isSelected
        ? currentValues.filter((v) => v !== itemValue)
        : [...currentValues, itemValue];

      (onChange as (val: string[]) => void)(nextValues);
    } else {
      (onChange as (val: string) => void)(itemValue);
      setOpen(false);
      setSearch("");
    }
  };

  const getText = () => {
    if (multiple) {
      const selected = (value as string[]) || [];
      return selected.length > 0
        ? `Selected (${selected.length})`
        : placeholder;
    }
    const found = options.find((opt) => opt.value === value);
    return found ? found.name : placeholder;
  };

  const hasValue = multiple
    ? ((value as string[]) || []).length > 0
    : Boolean(value);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <div
          className={cn(
            "w-full min-h-12 min-w-55 px-6 py-3.5 border border-border bg-white text-sm font-light transition-colors select-none",
            "flex items-center justify-between gap-3 text-left cursor-pointer",
            "hover:border-text focus:outline-none focus:border-text",
            open && "border-text",
            disabled &&
              "opacity-40 cursor-not-allowed pointer-events-none bg-neutral-50",
            className,
          )}
        >
          {open ? (
            <input
              type="text"
              autoFocus
              value={search}
              size={1}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              placeholder="Type to search..."
              className="w-full min-w-0 bg-transparent outline-none text-sm font-light text-text placeholder:text-muted/70 p-0"
            />
          ) : (
            <span
              className={cn(
                "truncate",
                !hasValue ? "text-muted/70" : "text-text",
              )}
            >
              {getText()}
            </span>
          )}
          <ChevronDown
            className={cn(
              "text-muted transition-transform shrink-0",
              open ? "text-text" : "rotate-180",
            )}
          />
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={-1}
          style={{ width: "var(--radix-popover-trigger-width)" }}
          className={cn(
            "bg-white border border-border shadow-md z-50 flex flex-col focus:outline-none",
            open && "border-t-0 border-text",
          )}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <ScrollArea.Root className="w-full h-52 overflow-hidden">
            <ScrollArea.Viewport className="w-full h-full">
              <div>
                {displayedOptions.length === 0 ? (
                  <div className="p-4 text-xs text-center text-muted">
                    No results found
                  </div>
                ) : (
                  displayedOptions.map((opt) => {
                    const isSelected = multiple
                      ? ((value as string[]) || []).includes(opt.value)
                      : value === opt.value;

                    return (
                      <div
                        key={opt.value}
                        onClick={() => handleSelect(opt.value)}
                        className={cn(
                          "px-6 py-2 text-sm font-light cursor-pointer transition-colors flex items-center justify-between",
                          "hover:bg-neutral-100",
                          isSelected && "font-normal",
                        )}
                      >
                        {multiple ? (
                          <div
                            className="flex items-center w-full"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Checkbox
                              checked={isSelected}
                              onChange={() => handleSelect(opt.value)}
                              label={opt.name}
                              className="w-full"
                            />
                          </div>
                        ) : (
                          <span className="truncate text-text">{opt.name}</span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              orientation="vertical"
              className="flex select-none touch-none rounded-ful bg-[#e7ebf4] transition-colors w-1 mr-3 my-1"
            >
              <ScrollArea.Thumb className="flex-1 bg-text rounded-full" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
