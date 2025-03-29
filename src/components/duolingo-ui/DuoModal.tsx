
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import DuoButton from './DuoButton';
import { X } from 'lucide-react';

interface DuoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  variant?: 'default' | 'warning' | 'danger' | 'success';
}

const DuoModal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  showCloseButton = true,
  variant = 'default'
}: DuoModalProps) => {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  };

  const variantClasses = {
    default: 'border-gray-200',
    warning: 'border-duo-orange',
    danger: 'border-duo-red',
    success: 'border-duo-green'
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className={cn(
          "border-2 p-0 overflow-hidden rounded-2xl",
          sizeClasses[size],
          variantClasses[variant]
        )}
      >
        <DialogHeader className="p-4 md:p-6 bg-gray-50 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
            {showCloseButton && (
              <DuoButton 
                variant="neutral" 
                size="xs" 
                iconOnly 
                icon={<X size={18} />} 
                onClick={onClose}
                className="ml-auto"
              />
            )}
          </div>
          {description && (
            <DialogDescription className="mt-2">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="p-4 md:p-6">
          {children}
        </div>

        {footer && (
          <DialogFooter className="p-4 md:p-6 border-t bg-gray-50">
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DuoModal;
