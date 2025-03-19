
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface DuoTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

const DuoTextarea = ({
  label,
  error,
  hint,
  fullWidth = false,
  className,
  disabled,
  ...props
}: DuoTextareaProps) => {
  return (
    <div className={cn(
      'duo-textarea w-full',
      fullWidth && 'max-w-full',
      className
    )}>
      {label && (
        <label className="block mb-2 font-bold text-gray-700">
          {label}
        </label>
      )}
      
      <Textarea
        className={cn(
          "border-2 rounded-xl transition-all duration-200 bg-white text-base min-h-[100px]",
          "focus-visible:ring-duo-green focus-visible:border-duo-green focus-visible:ring-opacity-50",
          "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400",
          error ? "border-duo-red focus-visible:ring-duo-red focus-visible:border-duo-red" : "border-gray-300",
        )}
        disabled={disabled}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-duo-red font-medium">{error}</p>
      )}
      
      {hint && !error && (
        <p className="mt-1 text-sm text-gray-500">{hint}</p>
      )}
    </div>
  );
};

export default DuoTextarea;
