
import React, { useState, useEffect } from 'react';
import { 
  DuoHeading,
  DuoText,
  DuoButton,
  DuoFlashcard
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
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // In a real app, fetch from API or database
    setFlashcards(SAMPLE_FLASHCARDS);
  }, []);

  const handleSwipeLeft = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetPractice = () => {
    setCurrentIndex(0);
    setCompleted(false);
  };

  if (flashcards.length === 0) {
    return (
      <div className="max-w-md mx-auto p-4 pt-8 text-center">
        <DuoHeading level={1} size="xl" className="mb-6">
          Flashcard Practice
        </DuoHeading>
        <DuoFlashcard
          front={<DuoText>No flashcards available. Create some first!</DuoText>}
          back={<DuoText>Please create some flashcards</DuoText>}
        />
        <DuoButton 
          variant="primary" 
          className="mt-4"
          onClick={() => window.location.href = '/create-flashcards'}
        >
          Create Flashcards
        </DuoButton>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="max-w-md mx-auto p-4 pt-8 text-center">
        <DuoHeading level={1} size="xl" className="mb-6">
          Practice Complete!
        </DuoHeading>
        <DuoFlashcard
          front={
            <>
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
            </>
          }
          back={
            <>
              <DuoText size="lg" className="mb-4">
                Great job!
              </DuoText>
              <DuoButton 
                variant="primary" 
                icon={<RotateCcw size={18} />}
                onClick={resetPractice}
              >
                Practice Again
              </DuoButton>
            </>
          }
        />
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
      
      <DuoFlashcard
        front={
          <>
            <DuoHeading level={2} size="xl" className="mb-6">
              {currentCard.word}
            </DuoHeading>
            <DuoText color="muted">
              Tap to reveal translation
            </DuoText>
          </>
        }
        back={
          <>
            <DuoHeading level={2} size="xl" className="mb-6">
              {currentCard.translation}
            </DuoHeading>
            <DuoText color="muted">
              Tap to see word
            </DuoText>
          </>
        }
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
      />
    </div>
  );
};

export default FlashcardPractice;
