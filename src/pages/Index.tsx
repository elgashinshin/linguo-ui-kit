
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DuoHeading, 
  DuoText, 
  DuoButton, 
  DuoCard, 
  DuoCharacter, 
  DuoBadge 
} from '@/components/duolingo-ui';
import { 
  Book, 
  Languages, 
  Brain, 
  Lightbulb, 
  Sparkles, 
  Palette, 
  ArrowRight, 
  Wand2
} from 'lucide-react';

const Index = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 mb-16">
        <div className="flex-1 text-center lg:text-left">
          <DuoBadge variant="green" size="md" className="mb-4">Duolingo-Inspired Flashcards</DuoBadge>
          <DuoHeading level={1} size="3xl" className="mb-4">
            Boost Your Language Learning with Flashcards
          </DuoHeading>
          <DuoText size="xl" className="mb-8 text-gray-600">
            Create custom flashcards, practice translations, and track your progress—all with a 
            familiar Duolingo-inspired interface.
          </DuoText>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link to="/create-flashcards">
              <DuoButton variant="primary" size="lg" icon={<Book />}>
                Create Flashcards
              </DuoButton>
            </Link>
            <Link to="/ui">
              <DuoButton variant="secondary" size="lg" icon={<Palette />}>
                Explore UI Components
              </DuoButton>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <DuoCharacter size="xl" mood="excited" className="animate-bounce-small" />
            <div className="absolute -top-4 -right-4">
              <DuoBadge variant="yellow" glow>Fun Learning!</DuoBadge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <DuoHeading level={2} size="xl" className="text-center mb-12">
          Key Features
        </DuoHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DuoCard className="p-6">
            <div className="p-3 bg-duo-green bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Book className="h-7 w-7 text-duo-green" />
            </div>
            <DuoHeading level={3} size="md" className="mb-2">
              Custom Flashcards
            </DuoHeading>
            <DuoText className="text-gray-600">
              Create personalized flashcards with your own content in any language pair.
            </DuoText>
          </DuoCard>
          
          <DuoCard className="p-6">
            <div className="p-3 bg-duo-blue bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Languages className="h-7 w-7 text-duo-blue" />
            </div>
            <DuoHeading level={3} size="md" className="mb-2">
              Translation Practice
            </DuoHeading>
            <DuoText className="text-gray-600">
              Practice translating your flashcards with an intuitive, game-like experience.
            </DuoText>
          </DuoCard>
          
          <DuoCard className="p-6">
            <div className="p-3 bg-duo-purple bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Brain className="h-7 w-7 text-duo-purple" />
            </div>
            <DuoHeading level={3} size="md" className="mb-2">
              Spaced Repetition
            </DuoHeading>
            <DuoText className="text-gray-600">
              Review cards at optimized intervals to improve long-term memory retention.
            </DuoText>
          </DuoCard>
          
          <DuoCard className="p-6">
            <div className="p-3 bg-duo-red bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Sparkles className="h-7 w-7 text-duo-red" />
            </div>
            <DuoHeading level={3} size="md" className="mb-2">
              Interactive Learning
            </DuoHeading>
            <DuoText className="text-gray-600">
              Engage with cards through swipes, flips, and interactive feedback.
            </DuoText>
          </DuoCard>
          
          <DuoCard className="p-6">
            <div className="p-3 bg-duo-orange bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Lightbulb className="h-7 w-7 text-duo-orange" />
            </div>
            <DuoHeading level={3} size="md" className="mb-2">
              Progress Tracking
            </DuoHeading>
            <DuoText className="text-gray-600">
              Monitor your learning journey with intuitive progress indicators.
            </DuoText>
          </DuoCard>
          
          <DuoCard className="p-6">
            <div className="p-3 bg-duo-yellow bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Wand2 className="h-7 w-7 text-duo-yellow" />
            </div>
            <DuoHeading level={3} size="md" className="mb-2">
              Beautiful UI
            </DuoHeading>
            <DuoText className="text-gray-600">
              Enjoy a delightful user experience with Duolingo-inspired design elements.
            </DuoText>
          </DuoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <DuoCard className="p-8 bg-gradient-to-r from-duo-green to-duo-blue">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <DuoHeading level={2} size="xl" className="text-white mb-2">
                Ready to Start Learning?
              </DuoHeading>
              <DuoText size="lg" className="text-white text-opacity-90">
                Create your first set of flashcards and begin practicing today.
              </DuoText>
            </div>
            <Link to="/create-flashcards">
              <DuoButton 
                variant="warning" 
                size="lg" 
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Get Started
              </DuoButton>
            </Link>
          </div>
        </DuoCard>
      </section>

      {/* Links Section */}
      <section className="text-center">
        <DuoHeading level={2} size="lg" className="mb-6">
          Explore More
        </DuoHeading>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/flashcard-practice">
            <DuoButton variant="primary" padding="compact">
              Flashcard Practice
            </DuoButton>
          </Link>
          <Link to="/translation-practice">
            <DuoButton variant="primary" padding="compact">
              Translation Practice
            </DuoButton>
          </Link>
          <Link to="/ui">
            <DuoButton variant="primary" padding="compact">
              UI Components
            </DuoButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
