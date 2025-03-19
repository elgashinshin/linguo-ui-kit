
import React from 'react';
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface DuoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const DuoInput = ({
  label,
  error,
  hint,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...props
}: DuoInputProps) => {
  return (
    <div className={cn(
      'duo-input w-full',
      fullWidth && 'max-w-full',
      className
    )}>
      {label && (
        <label className="block mb-2 font-bold text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-duo-darkBlue opacity-70">
            {icon}
          </div>
        )}
        
        <Input
          className={cn(
            "border-2 rounded-xl transition-all duration-200 bg-white text-base h-12",
            "focus-visible:ring-duo-green focus-visible:border-duo-green focus-visible:ring-opacity-50",
            "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400",
            error ? "border-duo-red focus-visible:ring-duo-red focus-visible:border-duo-red" : "border-gray-300",
            icon && iconPosition === 'left' ? "pl-10" : "",
            icon && iconPosition === 'right' ? "pr-10" : ""
          )}
          disabled={disabled}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-duo-darkBlue opacity-70">
            {icon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-duo-red font-medium">{error}</p>
      )}
      
      {hint && !error && (
        <p className="mt-1 text-sm text-gray-500">{hint}</p>
      )}
    </div>
  );
};

export default DuoInput;
