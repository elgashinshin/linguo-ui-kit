
import React from 'react';
import { cn } from "@/lib/utils";

interface DuoProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max: number;
  color?: 'green' | 'purple' | 'blue' | 'orange' | 'yellow' | 'red';
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const colorStyles = {
  green: 'bg-duo-green',
  purple: 'bg-duo-purple',
  blue: 'bg-duo-blue',
  orange: 'bg-duo-orange',
  yellow: 'bg-duo-yellow',
  red: 'bg-duo-red',
};

const sizeStyles = {
  sm: 'h-2',
  md: 'h-4',
  lg: 'h-6',
};

const DuoProgress = ({
  value,
  max,
  color = 'green',
  showValue = false,
  size = 'md',
  animated = true,
  className,
  ...props
}: DuoProgressProps) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className={cn('w-full flex flex-col gap-1', className)} {...props}>
      <div className="w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={cn(
            colorStyles[color],
            sizeStyles[size],
            animated && 'transition-all duration-500 ease-in-out',
            'rounded-full'
          )}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showValue && (
        <div className="text-sm text-gray-500 self-end">
          {value}/{max}
        </div>
      )}
    </div>
  );
};

export default DuoProgress;
