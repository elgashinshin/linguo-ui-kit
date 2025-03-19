
import React, { useState } from 'react';
import { 
  DuoInput, 
  DuoButton, 
  DuoTextarea,
  DuoHeading,
  DuoText,
  DuoCard
} from '@/components/duolingo-ui';
import { PlusCircle, Edit, Trash2, Save, X } from 'lucide-react';

interface Flashcard {
  id: string;
  word: string;
  translation: string;
}

const CreateFlashcards = () => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editWord, setEditWord] = useState('');
  const [editTranslation, setEditTranslation] = useState('');

  const handleAddFlashcard = () => {
    if (word.trim() === '' || translation.trim() === '') return;
    
    const newFlashcard: Flashcard = {
      id: Date.now().toString(),
      word: word.trim(),
      translation: translation.trim()
    };
    
    setFlashcards([...flashcards, newFlashcard]);
    setWord('');
    setTranslation('');
  };

  const handleDeleteFlashcard = (id: string) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  const startEditing = (card: Flashcard) => {
    setEditingId(card.id);
    setEditWord(card.word);
    setEditTranslation(card.translation);
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  const saveEditing = () => {
    if (editingId && editWord.trim() !== '' && editTranslation.trim() !== '') {
      setFlashcards(flashcards.map(card => 
        card.id === editingId 
          ? { ...card, word: editWord.trim(), translation: editTranslation.trim() } 
          : card
      ));
      setEditingId(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 pt-8">
      <DuoHeading level={1} size="xl" className="mb-6 text-center">
        Create Flashcards
      </DuoHeading>
      
      <DuoCard className="mb-8">
        <DuoHeading level={2} size="md" className="mb-4">
          Add New Flashcard
        </DuoHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DuoInput
            label="Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Enter a word in English"
            fullWidth
          />
          
          <DuoTextarea
            label="Translation"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            placeholder="Enter the translation"
            fullWidth
          />
        </div>
        
        <div className="mt-4 flex justify-end">
          <DuoButton 
            variant="primary" 
            icon={<PlusCircle size={18} />} 
            onClick={handleAddFlashcard}
            disabled={!word.trim() || !translation.trim()}
          >
            Add Flashcard
          </DuoButton>
        </div>
      </DuoCard>
      
      <DuoHeading level={2} size="md" className="mb-4">
        Your Flashcards ({flashcards.length})
      </DuoHeading>
      
      {flashcards.length === 0 ? (
        <DuoCard className="p-8 text-center">
          <DuoText color="muted">
            You haven't created any flashcards yet. Add some above!
          </DuoText>
        </DuoCard>
      ) : (
        <div className="space-y-4">
          {flashcards.map(card => (
            <DuoCard key={card.id} className="p-4 flex flex-col md:flex-row md:items-center">
              {editingId === card.id ? (
                // Edit mode
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DuoInput
                    label="Word"
                    value={editWord}
                    onChange={(e) => setEditWord(e.target.value)}
                    fullWidth
                  />
                  
                  <DuoInput
                    label="Translation"
                    value={editTranslation}
                    onChange={(e) => setEditTranslation(e.target.value)}
                    fullWidth
                  />
                  
                  <div className="md:col-span-2 flex justify-end space-x-2 mt-2">
                    <DuoButton 
                      variant="success" 
                      size="sm" 
                      icon={<Save size={16} />}
                      onClick={saveEditing}
                    >
                      Save
                    </DuoButton>
                    
                    <DuoButton 
                      variant="neutral" 
                      size="sm" 
                      icon={<X size={16} />}
                      onClick={cancelEditing}
                    >
                      Cancel
                    </DuoButton>
                  </div>
                </div>
              ) : (
                // View mode
                <>
                  <div className="flex-1">
                    <DuoHeading level={3} size="md">
                      {card.word}
                    </DuoHeading>
                    <DuoText color="muted">
                      {card.translation}
                    </DuoText>
                  </div>
                  
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    <DuoButton 
                      variant="neutral" 
                      size="sm" 
                      icon={<Edit size={16} />}
                      onClick={() => startEditing(card)}
                    >
                      Edit
                    </DuoButton>
                    
                    <DuoButton 
                      variant="danger" 
                      size="sm" 
                      icon={<Trash2 size={16} />}
                      onClick={() => handleDeleteFlashcard(card.id)}
                    >
                      Delete
                    </DuoButton>
                  </div>
                </>
              )}
            </DuoCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateFlashcards;
