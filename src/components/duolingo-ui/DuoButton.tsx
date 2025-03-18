
import React from 'react';
import { cn } from "@/lib/utils";

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';

interface DuoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-duo-green text-white hover:bg-duo-lightGreen',
  secondary: 'bg-duo-purple text-white hover:bg-opacity-90',
  success: 'bg-duo-blue text-white hover:bg-opacity-90',
  warning: 'bg-duo-orange text-white hover:bg-opacity-90',
  danger: 'bg-duo-red text-white hover:bg-opacity-90',
  neutral: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
};

const sizeStyles = {
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
        'duo-button',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
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
