
import React from 'react';
import { cn } from "@/lib/utils";

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

interface DuoTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  weight?: TextWeight;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'default' | 'muted' | 'primary' | 'error';
}

const sizeStyles: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
};

const weightStyles: Record<TextWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

const colorStyles = {
  default: 'text-gray-900',
  muted: 'text-gray-600',
  primary: 'text-duo-green',
  error: 'text-duo-red',
};

const DuoText = ({
  children,
  size = 'md',
  weight = 'normal',
  as = 'p',
  color = 'default',
  className,
  ...props
}: DuoTextProps) => {
  const Component = as;
  
  return (
    <Component
      className={cn(
        sizeStyles[size],
        weightStyles[weight],
        colorStyles[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default DuoText;
