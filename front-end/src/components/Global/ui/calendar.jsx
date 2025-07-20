import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/Global/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar bg-background p-3 [--cell-size,
        String.raw`rtl,
        String.raw`rtl,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown) =>
          date.toLocaleString("default", { month),
        ...formatters,
      }}
      classNames={{
        root, defaultClassNames.root),
        months,
          defaultClassNames.months,
        ),
        month, defaultClassNames.month),
        nav,
          defaultClassNames.nav,
        ),
        button_previous),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled,
          defaultClassNames.button_previous,
        ),
        button_next),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled,
          defaultClassNames.button_next,
        ),
        month_caption,
          defaultClassNames.month_caption,
        ),
        dropdowns,
          defaultClassNames.dropdowns,
        ),
        dropdown_root,
          defaultClassNames.dropdown_root,
        ),
        dropdown, defaultClassNames.dropdown),
        caption_label,
          captionLayout === "label"
            ? "text-sm"
            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table,
        weekdays, defaultClassNames.weekdays),
        weekday,
          defaultClassNames.weekday,
        ),
        week, defaultClassNames.week),
        week_number_header,
          defaultClassNames.week_number_header,
        ),
        week_number,
          defaultClassNames.week_number,
        ),
        day,
          defaultClassNames.day,
        ),
        range_start,
          defaultClassNames.range_start,
        ),
        range_middle, defaultClassNames.range_middle),
        range_end, defaultClassNames.range_end),
        today,
          defaultClassNames.today,
        ),
        outside,
          defaultClassNames.outside,
        ),
        disabled,
          defaultClassNames.disabled,
        ),
        hidden, defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        DayButton,
        WeekNumber, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-[--cell-size] items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({ className, day, modifiers, ...props }) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-end=true]:bg-primary data-[range-middle=true]:bg-accent data-[range-start=true]:bg-primary data-[selected-single=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:text-accent-foreground data-[range-start=true]:text-primary-foreground data-[selected-single=true]:text-primary-foreground group-data-[focused=true]/day,
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
