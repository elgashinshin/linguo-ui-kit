
import React, { useState } from 'react';
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

interface DuoDatePickerProps {
  value?: Date;
  onValueChange?: (date: Date | undefined) => void;
  label?: string;
  error?: string;
  hint?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const DuoDatePicker = ({
  value,
  onValueChange,
  label,
  error,
  hint,
  placeholder = "Select date",
  disabled,
  className,
}: DuoDatePickerProps) => {
  return (
    <div className={cn("duo-datepicker w-full", className)}>
      {label && (
        <label className="block mb-2 font-bold text-gray-700">
          {label}
        </label>
      )}
      
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "w-full flex items-center justify-between rounded-xl h-12 px-3 border-2 bg-white",
              "focus:outline-none focus:ring-2 focus:ring-duo-green focus:ring-opacity-50",
              disabled ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300 cursor-pointer",
              error ? "border-duo-red focus:ring-duo-red" : "focus:border-duo-green"
            )}
            disabled={disabled}
          >
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5 text-duo-darkBlue opacity-70" />
              {value ? (
                <span className="text-base">{format(value, "PP")}</span>
              ) : (
                <span className="text-base text-gray-500">{placeholder}</span>
              )}
            </div>
            <span className="opacity-70">▼</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0 bg-white border-2 border-gray-200 rounded-xl shadow-lg" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onValueChange}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
      
      {error && (
        <p className="mt-1 text-sm text-duo-red font-medium">{error}</p>
      )}
      
      {hint && !error && (
        <p className="mt-1 text-sm text-gray-500">{hint}</p>
      )}
    </div>
  );
};

export default DuoDatePicker;
