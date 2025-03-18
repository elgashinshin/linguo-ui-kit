
import React from 'react';
import { 
  DuoButton, 
  DuoCard, 
  DuoProgress, 
  DuoBadge, 
  DuoCharacter,
  DuoLessonCard 
} from '@/components/duolingo-ui';
import { Heart, Flag, MessageCircle, Book, Star, Check, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const showToast = (message: string) => {
    toast({
      title: "Duolingo Message",
      description: message,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-duo-darkBlue">Duolingo UI Kit</h1>
        <p className="text-lg text-gray-600">A collection of components inspired by Duolingo's design</p>
      </header>

      <main className="max-w-5xl mx-auto space-y-12">
        {/* Character Section */}
        <section>
          <div className="flex justify-center mb-8">
            <DuoCharacter size="xl" animate mood="happy" />
          </div>
        </section>

        {/* Buttons Section */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-duo-darkBlue">Buttons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DuoButton onClick={() => showToast("Primary button clicked!")}>
              Primary Button
            </DuoButton>
            
            <DuoButton variant="secondary" onClick={() => showToast("Secondary button clicked!")}>
              Secondary Button
            </DuoButton>
            
            <DuoButton variant="success" onClick={() => showToast("Success button clicked!")}>
              Success Button
            </DuoButton>
            
            <DuoButton variant="warning" onClick={() => showToast("Warning button clicked!")}>
              Warning Button
            </DuoButton>
            
            <DuoButton variant="danger" onClick={() => showToast("Danger button clicked!")}>
              Danger Button
            </DuoButton>
            
            <DuoButton variant="neutral" onClick={() => showToast("Neutral button clicked!")}>
              Neutral Button
            </DuoButton>
            
            <DuoButton icon={<Check size={16} />} iconPosition="left" onClick={() => showToast("Check button clicked!")}>
              With Left Icon
            </DuoButton>
            
            <DuoButton variant="secondary" icon={<Heart size={16} />} iconPosition="right" onClick={() => showToast("Heart button clicked!")}>
              With Right Icon
            </DuoButton>
            
            <DuoButton size="sm" onClick={() => showToast("Small button clicked!")}>
              Small Button
            </DuoButton>
            
            <DuoButton size="lg" onClick={() => showToast("Large button clicked!")}>
              Large Button
            </DuoButton>
            
            <DuoButton fullWidth onClick={() => showToast("Full width button clicked!")}>
              Full Width Button
            </DuoButton>
          </div>
        </section>

        {/* Cards Section */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-duo-darkBlue">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DuoCard borderColor="green">
              <h3 className="text-xl font-bold mb-2">Green Card</h3>
              <p className="text-gray-600">This is a card with green border.</p>
            </DuoCard>
            
            <DuoCard borderColor="purple">
              <h3 className="text-xl font-bold mb-2">Purple Card</h3>
              <p className="text-gray-600">This is a card with purple border.</p>
            </DuoCard>
            
            <DuoCard borderColor="blue">
              <h3 className="text-xl font-bold mb-2">Blue Card</h3>
              <p className="text-gray-600">This is a card with blue border.</p>
            </DuoCard>
            
            <DuoCard hover onClick={() => showToast("Hoverable card clicked!")}>
              <h3 className="text-xl font-bold mb-2">Hoverable Card</h3>
              <p className="text-gray-600">This card has hover effects. Try hovering and clicking!</p>
            </DuoCard>
            
            <DuoCard borderColor="orange">
              <h3 className="text-xl font-bold mb-2">Orange Card</h3>
              <p className="text-gray-600">This is a card with orange border.</p>
            </DuoCard>
            
            <DuoCard borderColor="red">
              <h3 className="text-xl font-bold mb-2">Red Card</h3>
              <p className="text-gray-600">This is a card with red border.</p>
            </DuoCard>
          </div>
        </section>

        {/* Progress Bars Section */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-duo-darkBlue">Progress Bars</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 mb-2">Green (Default)</p>
              <DuoProgress value={70} max={100} showValue />
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">Purple</p>
              <DuoProgress value={50} max={100} color="purple" showValue />
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">Blue</p>
              <DuoProgress value={30} max={100} color="blue" showValue />
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">Orange</p>
              <DuoProgress value={90} max={100} color="orange" showValue />
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">Red</p>
              <DuoProgress value={20} max={100} color="red" showValue />
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">Small</p>
              <DuoProgress value={60} max={100} size="sm" />
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">Large</p>
              <DuoProgress value={45} max={100} size="lg" />
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-duo-darkBlue">Badges</h2>
          
          <div className="flex flex-wrap gap-4">
            <DuoBadge variant="green">Green</DuoBadge>
            <DuoBadge variant="purple">Purple</DuoBadge>
            <DuoBadge variant="blue">Blue</DuoBadge>
            <DuoBadge variant="orange">Orange</DuoBadge>
            <DuoBadge variant="yellow">Yellow</DuoBadge>
            <DuoBadge variant="red">Red</DuoBadge>
            <DuoBadge variant="gray">Gray</DuoBadge>
            
            <DuoBadge variant="green" size="sm">Small</DuoBadge>
            <DuoBadge variant="green" size="lg">Large</DuoBadge>
            
            <DuoBadge variant="purple" glow>Glowing</DuoBadge>
          </div>
        </section>

        {/* Lesson Cards Section */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-duo-darkBlue">Lesson Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DuoLessonCard
              title="Basics"
              icon={<Book size={20} />}
              progress={3}
              maxProgress={5}
              level={1}
              onClick={() => showToast("Basics lesson clicked!")}
            />
            
            <DuoLessonCard
              title="Phrases"
              icon={<MessageCircle size={20} />}
              progress={5}
              maxProgress={5}
              level={1}
              completed
              onClick={() => showToast("Phrases lesson clicked!")}
            />
            
            <DuoLessonCard
              title="Travel"
              icon={<Flag size={20} />}
              progress={2}
              maxProgress={5}
              level={2}
              onClick={() => showToast("Travel lesson clicked!")}
            />
            
            <DuoLessonCard
              title="Family"
              icon={<Heart size={20} />}
              progress={0}
              maxProgress={5}
              level={3}
              locked
            />
            
            <DuoLessonCard
              title="Food"
              icon={<Star size={20} />}
              progress={0}
              maxProgress={5}
              level={3}
              locked
            />
          </div>
        </section>
      </main>

      <footer className="mt-16 text-center text-gray-500">
        <p>Duolingo-inspired UI Kit • Created with 💚</p>
      </footer>
    </div>
  );
};

export default Index;
