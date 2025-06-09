"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3 bg-white rounded-lg border border-kpds-gray-200 shadow-kpds-md",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-semibold text-kpds-purple-700",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({
            color: "secondary",
            styling: "text",
            size: "icon-sm",
          }),
          "h-7 w-7 bg-transparent p-0 hover:bg-kpds-gray-50 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full table-fixed border-collapse space-y-1",
        head_cell: "text-center text-kpds-purple-600 font-normal text-[0.8rem]",
        cell: "h-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-kpds-purple-50 focus-within:relative focus-within:z-20",
        day_selected:
          "bg-kpds-purple-700 text-white hover:bg-kpds-purple-600 hover:text-white focus:bg-kpds-purple-700 focus:text-white",
        day_today: "bg-kpds-purple-100 text-kpds-purple-700",
        day_outside: "text-kpds-gray-400 opacity-50",
        day_disabled: "text-kpds-gray-400 opacity-50",
        day_range_middle:
          "aria-selected:bg-kpds-purple-50 aria-selected:text-kpds-purple-700",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
