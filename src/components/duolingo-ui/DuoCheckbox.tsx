
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface DuoCheckboxProps extends React.ComponentPropsWithoutRef<typeof Checkbox> {
  label?: string;
  error?: string;
  hint?: string;
}

const DuoCheckbox = ({
  label,
  error,
  hint,
  className,
  id,
  ...props
}: DuoCheckboxProps) => {
  const checkboxId = id || `duo-checkbox-${Math.random().toString(36).substring(2, 11)}`;
  
  return (
    <div className={cn("duo-checkbox flex items-start space-x-2", className)}>
      <Checkbox
        id={checkboxId}
        className="h-5 w-5 mt-0.5 rounded-[2px] border-2 border-gray-300 text-duo-green data-[state=checked]:border-duo-green"
        {...props}
      />
      
      {label && (
        <div className="flex flex-col">
          <label
            htmlFor={checkboxId}
            className="text-base font-medium cursor-pointer"
          >
            {label}
          </label>
          
          {error && (
            <p className="mt-1 text-sm text-duo-red font-medium">{error}</p>
          )}
          
          {hint && !error && (
            <p className="mt-1 text-sm text-gray-500">{hint}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DuoCheckbox;
