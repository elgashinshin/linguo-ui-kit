
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import DuoCard from './DuoCard';

interface FlashcardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  borderColor?: 'green' | 'purple' | 'blue' | 'orange' | 'yellow' | 'red' | 'gray';
}

const DuoFlashcard = ({
  front,
  back,
  onSwipeLeft,
  onSwipeRight,
  borderColor = 'gray'
}: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState<'none' | 'left' | 'right'>('none');

  const handleFlip = () => {
    if (!isDragging) {
      setIsFlipped(!isFlipped);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && onSwipeLeft) {
      handleSwipe('left');
    } else if (e.key === 'ArrowRight' && onSwipeRight) {
      handleSwipe('right');
    } else if (e.key === ' ' || e.key === 'Enter') {
      handleFlip();
    }
  };

  const handleSwipe = (dir: 'left' | 'right') => {
    setDirection(dir);
    setIsFlipped(false);
    
    // Short delay to allow animation to complete
    setTimeout(() => {
      if (dir === 'left' && onSwipeLeft) {
        onSwipeLeft();
      } else if (dir === 'right' && onSwipeRight) {
        onSwipeRight();
      }
      setDirection('none');
    }, 300);
  };

  // Mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const offsetX = e.clientX - dragStartX;
      setDragOffsetX(offsetX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (dragOffsetX < -75) {
        // Dragged left - reduced threshold
        handleSwipe('left');
      } else if (dragOffsetX > 75) {
        // Dragged right - reduced threshold
        handleSwipe('right');
      }
      setIsDragging(false);
      setDragOffsetX(0);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffsetX(0);
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchCurrentX = e.targetTouches[0].clientX;
    const offsetX = touchCurrentX - dragStartX;
    setDragOffsetX(offsetX);
  };

  const handleTouchEnd = () => {
    if (dragOffsetX < -75) {
      // Swiped left - reduced threshold for easier swiping
      handleSwipe('left');
    } else if (dragOffsetX > 75) {
      // Swiped right - reduced threshold for easier swiping
      handleSwipe('right');
    }
    setDragOffsetX(0);
  };

  return (
    <div className="relative h-80 w-full" tabIndex={0} onKeyDown={handleKeyDown}>
      {/* Card Stack Background Effect */}
      <div className="absolute bottom-0 w-full h-80 z-0">
        <div className="absolute bottom-0 w-[96%] h-[99%] left-[2%] bg-white rounded-2xl shadow-sm border-2 border-gray-100 z-10"></div>
        <div className="absolute bottom-0 w-[98%] h-[98%] left-[1%] bg-white rounded-2xl shadow-sm border-2 border-gray-100 z-0"></div>
      </div>
      
      <div 
        className={cn(
          "relative w-full h-full transition-all duration-500 cursor-pointer select-none z-20",
          isFlipped ? '[transform:rotateY(180deg)]' : '',
          direction === 'left' ? 'swipe-left' : direction === 'right' ? 'swipe-right' : ''
        )}
        onClick={handleFlip}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isDragging ? `translateX(${dragOffsetX}px) rotateY(${isFlipped ? '180deg' : '0'})` : (isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')
        }}
      >
        {/* Front */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden", 
            isFlipped ? 'invisible' : ''
          )}
        >
          <DuoCard 
            className="flex flex-col justify-center items-center h-full p-8"
            borderColor={isDragging && dragOffsetX > 50 ? 'green' : (isDragging && dragOffsetX < -50 ? 'red' : borderColor)}
          >
            {front}
          </DuoCard>
        </div>
        
        {/* Back */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden", 
            isFlipped ? '' : 'invisible'
          )}
          style={{ 
            transform: "rotateY(180deg)"
          }}
        >
          <DuoCard 
            className="flex flex-col justify-center items-center h-full p-8"
            borderColor={isDragging && dragOffsetX > 50 ? 'green' : (isDragging && dragOffsetX < -50 ? 'red' : borderColor)}
          >
            {back}
          </DuoCard>
        </div>
      </div>

      {/* Swipe Instructions for Desktop */}
      <div className="absolute bottom-[-50px] left-0 right-0 flex justify-between text-sm text-gray-500 px-2">
        <div>← Don't know</div>
        <div>Swipe or use arrow keys</div>
        <div>Know it →</div>
      </div>
    </div>
  );
};

export default DuoFlashcard;
