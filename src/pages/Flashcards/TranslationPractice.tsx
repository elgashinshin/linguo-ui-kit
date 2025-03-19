
import React, { useState, useEffect } from 'react';
import { 
  DuoHeading,
  DuoText,
  DuoInput,
  DuoButton,
  DuoCard
} from '@/components/duolingo-ui';
import { ArrowRight, Check, X, RotateCcw } from 'lucide-react';
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

const TranslationPractice = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userTranslation, setUserTranslation] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // In a real app, fetch from API or database
    setFlashcards(SAMPLE_FLASHCARDS);
  }, []);

  const checkTranslation = () => {
    // Simple check - in a real app, might use more sophisticated comparison
    const isCorrect = userTranslation.trim().toLowerCase() === 
                      flashcards[currentIndex].translation.toLowerCase();
    
    setIsCorrect(isCorrect);
    setIsChecked(true);
  };

  const handleNextCard = () => {
    setUserTranslation('');
    setIsChecked(false);
    
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetPractice = () => {
    setCurrentIndex(0);
    setUserTranslation('');
    setIsChecked(false);
    setIsCorrect(false);
    setCompleted(false);
  };

  if (flashcards.length === 0) {
    return (
      <div className="max-w-md mx-auto p-4 pt-8 text-center">
        <DuoHeading level={1} size="xl" className="mb-6">
          Translation Practice
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
            You've completed this set of translations!
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
        Translation Practice
      </DuoHeading>
      
      <div className="mb-4 text-center">
        <DuoText color="muted">
          Card {currentIndex + 1} of {flashcards.length}
        </DuoText>
      </div>
      
      <DuoCard className={cn(
        "p-6 transition-colors duration-300", 
        isChecked && isCorrect ? "border-duo-green" : 
        isChecked && !isCorrect ? "border-duo-red" : ""
      )}>
        <DuoHeading level={2} size="lg" className="mb-6 text-center">
          {currentCard.word}
        </DuoHeading>
        
        <form 
          onSubmit={(e) => { 
            e.preventDefault(); 
            if (isChecked) {
              handleNextCard();
            } else {
              checkTranslation();
            }
          }}
          className="space-y-4"
        >
          <DuoInput
            label="Your Translation"
            value={userTranslation}
            onChange={(e) => setUserTranslation(e.target.value)}
            placeholder="Type the translation"
            disabled={isChecked}
            fullWidth
          />
          
          {isChecked && (
            <div className={cn(
              "p-4 rounded-lg my-4",
              isCorrect ? "bg-duo-green bg-opacity-10" : "bg-duo-red bg-opacity-10"
            )}>
              <div className="flex items-center">
                {isCorrect ? (
                  <Check className="text-duo-green mr-2" size={20} />
                ) : (
                  <X className="text-duo-red mr-2" size={20} />
                )}
                <DuoText weight="bold" color={isCorrect ? "primary" : "error"}>
                  {isCorrect ? "Correct!" : "Incorrect!"}
                </DuoText>
              </div>
              
              {!isCorrect && (
                <DuoText className="mt-2">
                  The correct translation is: <span className="font-bold">{currentCard.translation}</span>
                </DuoText>
              )}
            </div>
          )}
          
          <DuoButton 
            variant={isChecked ? "success" : "primary"} 
            icon={isChecked ? <ArrowRight size={18} /> : <Check size={18} />}
            type="submit"
            fullWidth
            disabled={!isChecked && userTranslation.trim() === ''}
          >
            {isChecked ? "Next Card" : "Check Translation"}
          </DuoButton>
        </form>
      </DuoCard>
    </div>
  );
};

export default TranslationPractice;
