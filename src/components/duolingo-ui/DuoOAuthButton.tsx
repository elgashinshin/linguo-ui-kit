
import React from 'react';
import { cn } from "@/lib/utils";

interface DuoOAuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'github' | 'facebook' | 'twitter';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const providerStyles = {
  google: 'bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-50',
  github: 'bg-gray-900 text-white hover:bg-black',
  facebook: 'bg-[#1877F2] text-white hover:bg-[#0a66c2]',
  twitter: 'bg-[#1DA1F2] text-white hover:bg-[#0c85d0]',
};

const DuoOAuthButton = ({
  children,
  provider,
  icon,
  fullWidth = false,
  className,
  ...props
}: DuoOAuthButtonProps) => {
  return (
    <button
      className={cn(
        'duo-oauth-button flex items-center justify-center font-bold py-3 px-5 rounded-xl shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-150',
        providerStyles[provider],
        fullWidth ? 'w-full' : '',
        'hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_rgba(0,0,0,0.2)]',
        'active:translate-y-0.5 active:shadow-none',
        className
      )}
      {...props}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </button>
  );
};

export default DuoOAuthButton;
