
import React, { useState, useEffect } from 'react';
import { 
  DuoHeading,
  DuoText,
  DuoButton,
  DuoCard
} from '@/components/duolingo-ui';
import { RotateCcw } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Flashcard {
  id: string;
  word: string;
  translation: string;
}

// Sample data (this would come from a database in a real app)
const SAMPLE_FLASHCARDS: Flashcard[] = [
  { id: '1', word: 'Hello', translation: 'Привет' },
  { id: '2', word: 'Goodbye', translation: 'До свидания' },
  { id: '3', word: 'Thank you', translation: 'Спасибо' },
  { id: '4', word: 'Yes', translation: 'Да' },
  { id: '5', word: 'No', translation: 'Нет' },
];

const FlashcardPractice = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState<'none' | 'left' | 'right'>('none');
  const [completed, setCompleted] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // In a real app, fetch from API or database
    setFlashcards(SAMPLE_FLASHCARDS);
  }, []);

  const handleFlip = () => {
    if (!isDragging) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleSwipe = (dir: 'left' | 'right') => {
    setDirection(dir);
    setIsFlipped(false);
    
    // Short delay to allow animation to complete
    setTimeout(() => {
      if (currentIndex < flashcards.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCompleted(true);
      }
      setDirection('none');
    }, 300);
  };

  const resetPractice = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setDirection('none');
    setCompleted(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left - reduced threshold for easier swiping
      handleSwipe('left');
    } else if (touchEnd - touchStart > 75) {
      // Swiped right - reduced threshold for easier swiping
      handleSwipe('right');
    }
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

  if (flashcards.length === 0) {
    return (
      <div className="max-w-md mx-auto p-4 pt-8 text-center">
        <DuoHeading level={1} size="xl" className="mb-6">
          Flashcard Practice
        </DuoHeading>
        <DuoCard className="p-8">
          <DuoText>No flashcards available. Create some first!</DuoText>
          <DuoButton 
            variant="primary" 
            className="mt-4"
            onClick={() => window.location.href = '/create-flashcards'}
          >
            Create Flashcards
          </DuoButton>
        </DuoCard>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="max-w-md mx-auto p-4 pt-8 text-center">
        <DuoHeading level={1} size="xl" className="mb-6">
          Practice Complete!
        </DuoHeading>
        <DuoCard className="p-8">
          <DuoText size="lg" className="mb-4">
            You've completed this set of flashcards!
          </DuoText>
          <DuoButton 
            variant="primary" 
            icon={<RotateCcw size={18} />}
            onClick={resetPractice}
          >
            Practice Again
          </DuoButton>
        </DuoCard>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div className="max-w-md mx-auto p-4 pt-8">
      <DuoHeading level={1} size="xl" className="mb-6 text-center">
        Flashcard Practice
      </DuoHeading>
      
      <div className="mb-4 text-center">
        <DuoText color="muted">
          Card {currentIndex + 1} of {flashcards.length}
        </DuoText>
        <DuoText color="muted" className="mt-2">
          Swipe right if you know it, left if you don't
        </DuoText>
      </div>
      
      <div 
        className={cn(
          "relative h-80 w-full transition-opacity duration-300",
          direction === 'left' ? 'opacity-0' : 
          direction === 'right' ? 'opacity-0' : ''
        )}
      >
        <div 
          className={cn(
            "relative w-full h-full transition-all duration-500 cursor-pointer select-none",
            isFlipped ? '[transform:rotateY(180deg)]' : ''
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
              isFlipped ? 'invisible' : '',
              direction === 'left' ? 'swipe-left' : 
              direction === 'right' ? 'swipe-right' : ''
            )}
          >
            <DuoCard 
              className="flex flex-col justify-center items-center h-full p-8"
              borderColor={isDragging && dragOffsetX > 50 ? 'green' : (isDragging && dragOffsetX < -50 ? 'red' : 'gray')}
            >
              <DuoHeading level={2} size="xl" className="mb-6">
                {currentCard.word}
              </DuoHeading>
              <DuoText color="muted">
                Tap to reveal translation
              </DuoText>
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
              borderColor={isDragging && dragOffsetX > 50 ? 'green' : (isDragging && dragOffsetX < -50 ? 'red' : 'gray')}
            >
              <DuoHeading level={2} size="xl" className="mb-6">
                {currentCard.translation}
              </DuoHeading>
              <DuoText color="muted">
                Tap to see word
              </DuoText>
            </DuoCard>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        @keyframes swipeLeft {
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        @keyframes swipeRight {
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .swipe-left {
          animation: swipeLeft 0.3s forwards;
        }
        .swipe-right {
          animation: swipeRight 0.3s forwards;
        }
        `}
      </style>
    </div>
  );
};

export default FlashcardPractice;
