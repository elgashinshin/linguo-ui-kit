
import React from 'react';
import { cn } from "@/lib/utils";

interface DuoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  borderColor?: 'green' | 'purple' | 'blue' | 'orange' | 'yellow' | 'red' | 'gray';
  hover?: boolean;
  onClick?: () => void;
}

const borderColorStyles = {
  green: 'border-duo-green',
  purple: 'border-duo-purple',
  blue: 'border-duo-blue',
  orange: 'border-duo-orange',
  yellow: 'border-duo-yellow',
  red: 'border-duo-red',
  gray: 'border-gray-200',
};

const DuoCard = ({
  borderColor = 'gray',
  hover = false,
  onClick,
  className,
  children,
  ...props
}: DuoCardProps) => {
  return (
    <div
      className={cn(
        'duo-card',
        borderColorStyles[borderColor],
        hover && 'hover:-translate-y-1 hover:shadow-lg cursor-pointer transition-all duration-200',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default DuoCard;
