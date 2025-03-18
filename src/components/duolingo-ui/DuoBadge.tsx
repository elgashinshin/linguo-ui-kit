
import React from 'react';
import { cn } from "@/lib/utils";

interface DuoBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'green' | 'purple' | 'blue' | 'orange' | 'yellow' | 'red' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

const variantStyles = {
  green: 'bg-duo-green text-white',
  purple: 'bg-duo-purple text-white',
  blue: 'bg-duo-blue text-white',
  orange: 'bg-duo-orange text-white',
  yellow: 'bg-duo-yellow text-black',
  red: 'bg-duo-red text-white',
  gray: 'bg-gray-200 text-gray-800',
};

const sizeStyles = {
  sm: 'text-xs py-0.5 px-2',
  md: 'text-sm py-1 px-3',
  lg: 'text-base py-1.5 px-4',
};

const DuoBadge = ({
  variant = 'green',
  size = 'md',
  glow = false,
  className,
  children,
  ...props
}: DuoBadgeProps) => {
  return (
    <div
      className={cn(
        'font-bold rounded-full inline-flex items-center justify-center',
        variantStyles[variant],
        sizeStyles[size],
        glow && `shadow-[0_0_8px_rgba(var(--${variant}-rgb),0.7)]`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default DuoBadge;
