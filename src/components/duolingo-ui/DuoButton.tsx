
import React from 'react';
import { cn } from "@/lib/utils";

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
type ButtonPadding = 'compact' | 'normal';

interface DuoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  padding?: ButtonPadding;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-duo-green text-white hover:bg-duo-lightGreen shadow-[0_2px_0_0_#417505]',
  secondary: 'bg-duo-purple text-white hover:bg-opacity-90 shadow-[0_2px_0_0_#9c55cc]',
  success: 'bg-duo-blue text-white hover:bg-opacity-90 shadow-[0_2px_0_0_#0784b5]',
  warning: 'bg-duo-orange text-white hover:bg-opacity-90 shadow-[0_2px_0_0_#cc7200]',
  danger: 'bg-duo-red text-white hover:bg-opacity-90 shadow-[0_2px_0_0_#c13030]',
  neutral: 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-[0_2px_0_0_#a0a0a0]',
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'text-xs h-6',
  sm: 'text-sm h-8',
  md: 'text-base h-10',
  lg: 'text-lg h-12',
};

const paddingStyles: Record<ButtonPadding, string> = {
  compact: 'px-2',
  normal: 'px-4',
};

const DuoButton = ({
  variant = 'primary',
  size = 'md',
  padding = 'normal',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  iconOnly = false,
  className,
  children,
  ...props
}: DuoButtonProps) => {
  return (
    <button
      className={cn(
        'duo-button font-bold rounded-xl transition-all duration-150 inline-flex items-center justify-center',
        variantStyles[variant],
        sizeStyles[size],
        !iconOnly && paddingStyles[padding],
        iconOnly && 'aspect-square',
        fullWidth ? 'w-full' : '',
        'hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_rgba(0,0,0,0.2)]',
        'active:translate-y-0.5 active:shadow-none',
        className
      )}
      {...props}
    >
      {icon && (iconPosition === 'left' || iconOnly) && 
        <span className={cn("flex-shrink-0", !iconOnly && iconPosition === 'left' && "mr-2")}>{icon}</span>
      }
      {!iconOnly && children}
      {icon && iconPosition === 'right' && !iconOnly && 
        <span className="ml-2 flex-shrink-0">{icon}</span>
      }
    </button>
  );
};

export default DuoButton;
