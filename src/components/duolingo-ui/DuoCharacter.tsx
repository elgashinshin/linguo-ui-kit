
import React from 'react';
import { cn } from "@/lib/utils";

interface DuoCharacterProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mood?: 'happy' | 'sad' | 'excited' | 'neutral';
  animate?: boolean;
}

const sizeStyles = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32',
};

const moodColors = {
  happy: 'text-duo-green',
  sad: 'text-duo-blue',
  excited: 'text-duo-orange',
  neutral: 'text-gray-700',
};

const DuoCharacter = ({
  size = 'md',
  mood = 'happy',
  animate = false,
  className,
  ...props
}: DuoCharacterProps) => {
  // In a real app, we would use different SVGs for different moods
  return (
    <div
      className={cn(
        'bg-duo-green rounded-full flex items-center justify-center overflow-hidden',
        sizeStyles[size],
        animate && 'animate-bounce-small',
        className
      )}
      {...props}
    >
      {/* Simple Owl Face - In real app, use proper SVG illustrations */}
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <div className="absolute top-1/4 w-3/4 h-2/5 bg-white rounded-full flex justify-between items-center px-2">
          <div className={`rounded-full bg-black w-1/4 aspect-square ${mood === 'excited' ? 'animate-wiggle' : ''}`}></div>
          <div className={`rounded-full bg-black w-1/4 aspect-square ${mood === 'excited' ? 'animate-wiggle' : ''}`}></div>
        </div>
        <div className={`absolute bottom-1/4 w-1/3 h-1/6 ${moodColors[mood]} rounded-full ${mood === 'happy' || mood === 'excited' ? 'bg-duo-orange' : 'bg-gray-800'}`}></div>
      </div>
    </div>
  );
};

export default DuoCharacter;
