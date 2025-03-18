
import React from 'react';
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface DuoSelectOption {
  value: string;
  label: string;
}

interface DuoSelectProps extends React.ComponentPropsWithoutRef<typeof Select> {
  options: DuoSelectOption[];
  label?: string;
  error?: string;
  hint?: string;
  placeholder?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const DuoSelect = ({
  options,
  label,
  error,
  hint,
  placeholder = "Select an option",
  fullWidth = false,
  icon,
  className,
  disabled,
  ...props
}: DuoSelectProps) => {
  return (
    <div className={cn(
      'duo-select w-full max-w-sm',
      fullWidth && 'max-w-full',
      className
    )}>
      {label && (
        <label className="block mb-2 font-bold text-gray-700">
          {label}
        </label>
      )}
      
      <Select disabled={disabled} {...props}>
        <SelectTrigger 
          className={cn(
            "border-2 rounded-xl transition-all duration-200 bg-white text-base h-12",
            "focus:ring-duo-green focus:border-duo-green focus:ring-opacity-50",
            "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400",
            error ? "border-duo-red focus:ring-duo-red focus:border-duo-red" : "border-gray-300",
            icon ? "pl-10" : ""
          )}
        >
          {icon && (
            <span className="absolute left-3 text-duo-darkBlue opacity-70">
              {icon}
            </span>
          )}
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        
        <SelectContent className="bg-white border-2 border-gray-200 rounded-xl shadow-lg">
          {options.map((option) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100 rounded-lg my-1 font-medium"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {error && (
        <p className="mt-1 text-sm text-duo-red font-medium">{error}</p>
      )}
      
      {hint && !error && (
        <p className="mt-1 text-sm text-gray-500">{hint}</p>
      )}
    </div>
  );
};

export default DuoSelect;
