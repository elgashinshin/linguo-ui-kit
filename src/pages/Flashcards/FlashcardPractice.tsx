
import React, { useState, useEffect } from 'react';
import { 
  DuoHeading,
  DuoText,
  DuoButton,
  DuoCard
} from '@/components/duolingo-ui';
import { ArrowRight, ThumbsUp, ThumbsDown, RotateCcw } from 'lucide-react';
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

  useEffect(() => {
    // In a real app, fetch from API or database
    setFlashcards(SAMPLE_FLASHCARDS);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
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
      </div>
      
      <div 
        className={cn(
          "relative h-80 w-full transition-transform duration-300",
          direction === 'left' ? 'translate-x-[-100%] opacity-0' : 
          direction === 'right' ? 'translate-x-[100%] opacity-0' : ''
        )}
        style={{ perspective: "1000px" }}
      >
        <div 
          className={cn(
            "relative w-full h-full transition-all duration-500 cursor-pointer",
            isFlipped ? 'rotate-y-180' : ''
          )}
          onClick={handleFlip}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div 
            className={cn(
              "absolute w-full h-full", 
              isFlipped ? 'invisible' : ''
            )}
            style={{ backfaceVisibility: "hidden" }}
          >
            <DuoCard className="flex flex-col justify-center items-center h-full p-8">
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
              "absolute w-full h-full", 
              isFlipped ? '' : 'invisible'
            )}
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <DuoCard className="flex flex-col justify-center items-center h-full p-8">
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
      
      <div className="flex justify-center space-x-6 mt-8">
        <DuoButton 
          variant="danger" 
          icon={<ThumbsDown size={18} />}
          onClick={() => handleSwipe('left')}
        >
          Don't Know
        </DuoButton>
        
        <DuoButton 
          variant="success" 
          icon={<ThumbsUp size={18} />}
          onClick={() => handleSwipe('right')}
        >
          Got It
        </DuoButton>
      </div>
    </div>
  );
};

export default FlashcardPractice;
