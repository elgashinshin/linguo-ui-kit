
import React from 'react';
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

interface DuoHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: HeadingSize;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'default' | 'muted' | 'primary' | 'error';
}

const sizeStyles: Record<HeadingSize, string> = {
  xs: 'text-base',
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
  '2xl': 'text-4xl',
  '3xl': 'text-5xl',
  '4xl': 'text-6xl',
};

const weightStyles = {
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

const DuoHeading = ({
  children,
  level = 2,
  size = 'lg',
  weight = 'bold',
  color = 'default',
  className,
  ...props
}: DuoHeadingProps) => {
  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
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

export default DuoHeading;
