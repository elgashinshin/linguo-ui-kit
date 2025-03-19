
import React from 'react';
import { cn } from "@/lib/utils";

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface DuoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-duo-green text-white hover:bg-duo-lightGreen shadow-[0_2px_0_0_rgba(0,70,0,0.3)]',
  secondary: 'bg-duo-purple text-white hover:bg-opacity-90 shadow-[0_2px_0_0_rgba(78,0,92,0.3)]',
  success: 'bg-duo-blue text-white hover:bg-opacity-90 shadow-[0_2px_0_0_rgba(0,53,84,0.3)]',
  warning: 'bg-duo-orange text-white hover:bg-opacity-90 shadow-[0_2px_0_0_rgba(122,61,0,0.3)]',
  danger: 'bg-duo-red text-white hover:bg-opacity-90 shadow-[0_2px_0_0_rgba(103,0,0,0.3)]',
  neutral: 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-[0_2px_0_0_rgba(0,0,0,0.1)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'text-xs py-1 px-3',
  sm: 'text-sm py-2 px-3',
  md: 'text-base py-3 px-5',
  lg: 'text-lg py-4 px-6',
};

const DuoButton = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  children,
  ...props
}: DuoButtonProps) => {
  return (
    <button
      className={cn(
        'duo-button font-bold rounded-xl transition-all duration-150',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        'hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_rgba(0,0,0,0.2)]',
        'active:translate-y-0.5 active:shadow-none',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default DuoButton;
