
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface DuoRadioOption {
  value: string;
  label: string;
}

interface DuoRadioProps {
  options: DuoRadioOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  label?: string;
  error?: string;
  hint?: string;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

const DuoRadio = ({
  options,
  value,
  onValueChange,
  label,
  error,
  hint,
  className,
  orientation = 'vertical',
}: DuoRadioProps) => {
  return (
    <div className={cn("duo-radio", className)}>
      {label && (
        <label className="block mb-2 font-bold text-gray-700">
          {label}
        </label>
      )}
      
      <RadioGroup
        value={value}
        onValueChange={onValueChange}
        className={cn(
          orientation === 'vertical' ? 'flex flex-col space-y-2' : 'flex space-x-4'
        )}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem
              value={option.value}
              id={`radio-${option.value}`}
              className="h-5 w-5 border-2 border-gray-300 text-duo-green"
            />
            <label
              htmlFor={`radio-${option.value}`}
              className="text-base font-medium cursor-pointer"
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup>
      
      {error && (
        <p className="mt-1 text-sm text-duo-red font-medium">{error}</p>
      )}
      
      {hint && !error && (
        <p className="mt-1 text-sm text-gray-500">{hint}</p>
      )}
    </div>
  );
};

export default DuoRadio;
