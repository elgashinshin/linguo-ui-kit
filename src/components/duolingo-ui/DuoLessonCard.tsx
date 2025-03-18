
import React from 'react';
import { cn } from "@/lib/utils";
import DuoProgress from './DuoProgress';
import DuoBadge from './DuoBadge';

interface DuoLessonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  progress?: number;
  maxProgress?: number;
  level?: number;
  locked?: boolean;
  completed?: boolean;
}

const DuoLessonCard = ({
  title,
  icon,
  progress = 0,
  maxProgress = 5,
  level = 1,
  locked = false,
  completed = false,
  className,
  onClick,
  ...props
}: DuoLessonCardProps) => {
  return (
    <div
      className={cn(
        'duo-card flex flex-col gap-3 hover:-translate-y-1 transition-all duration-200',
        locked ? 'bg-gray-100 opacity-80' : 'cursor-pointer hover:shadow-lg',
        completed ? 'border-duo-green' : 'border-gray-200',
        className
      )}
      onClick={!locked ? onClick : undefined}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && (
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">
              {icon}
            </div>
          )}
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        
        {level > 0 && (
          <DuoBadge
            variant={completed ? "green" : "blue"}
            size="sm"
          >
            Level {level}
          </DuoBadge>
        )}
      </div>
      
      {!locked && !completed && progress > 0 && (
        <DuoProgress value={progress} max={maxProgress} showValue size="sm" />
      )}
      
      {completed && (
        <div className="flex justify-center">
          <DuoBadge variant="green" glow>Completed!</DuoBadge>
        </div>
      )}
      
      {locked && (
        <div className="flex justify-center">
          <span className="text-gray-500 flex items-center gap-1">
            🔒 Locked
          </span>
        </div>
      )}
    </div>
  );
};

export default DuoLessonCard;
