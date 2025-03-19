
import React, { useState } from 'react';
import { 
  DuoButton, 
  DuoCard, 
  DuoProgress, 
  DuoBadge, 
  DuoCharacter,
  DuoLessonCard,
  DuoInput,
  DuoSelect,
  DuoCheckbox,
  DuoRadio,
  DuoText,
  DuoHeading
} from '@/components/duolingo-ui';
import { Heart, Flag, MessageCircle, Book, Star, Check, X, Search, Mail, Globe, User, Lock, Plus, Minus, Save, Link, ChevronRight, ArrowRight, Edit } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Link as RouterLink } from 'react-router-dom';

const Index = () => {
  const { toast } = useToast();
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");

  const showToast = (message: string) => {
    toast({
      title: "Duolingo Message",
      description: message,
    });
  };

  const languageOptions = [
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "it", label: "Italian" },
    { value: "ja", label: "Japanese" },
    { value: "ko", label: "Korean" },
  ];

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

        {/* Input and Select Section */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-duo-darkBlue">Forms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-duo-darkBlue">Inputs</h3>
              
              <DuoInput 
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                icon={<Mail size={18} />}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              
              <DuoInput 
                label="Search"
                placeholder="Search lessons"
                icon={<Search size={18} />}
              />
              
              <DuoInput 
                label="Password"
                type="password"
                icon={<Lock size={18} />}
                placeholder="Enter password"
                error="Password must be at least 8 characters"
              />
              
              <DuoInput 
                label="Username"
                icon={<User size={18} />}
                placeholder="Your username"
                hint="Choose a unique username"
              />
              
              <DuoInput 
                label="Disabled Input"
                disabled
                placeholder="This input is disabled"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-duo-darkBlue">Selects</h3>
              
              <DuoSelect
                label="Language"
                options={languageOptions}
                icon={<Globe size={18} />}
                placeholder="Choose a language"
                value={selectValue}
                onValueChange={setSelectValue}
              />
              
              <DuoSelect
                label="Level"
                options={[
                  { value: "beginner", label: "Beginner" },
                  { value: "intermediate", label: "Intermediate" },
                  { value: "advanced", label: "Advanced" },
                ]}
                placeholder="Select your level"
              />
              
              <DuoSelect
                label="Select with Error"
                options={languageOptions}
                placeholder="Choose language"
                error="Please select a language"
              />
              
              <DuoSelect
                label="Select with Hint"
                options={languageOptions}
                placeholder="Choose language"
                hint="This will be your learning language"
              />
              
              <DuoSelect
                label="Disabled Select"
                options={languageOptions}
                disabled
                placeholder="This select is disabled"
              />
            </div>
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

          <DuoHeading level={3} size="md" className="mt-8 mb-4">Button Variants</DuoHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DuoButton size="xs" onClick={() => showToast("Extra small button clicked!")}>
              Extra Small Button
            </DuoButton>
            
            <DuoButton padding="compact" onClick={() => showToast("Compact padding button clicked!")}>
              Compact Padding
            </DuoButton>
            
            <DuoButton size="sm" padding="compact" onClick={() => showToast("Small compact button clicked!")}>
              Small Compact
            </DuoButton>
            
            <DuoButton variant="primary" iconOnly icon={<Plus size={16} />} onClick={() => showToast("Icon only button clicked!")} />
            
            <DuoButton variant="danger" iconOnly icon={<Minus size={16} />} onClick={() => showToast("Icon only button clicked!")} />
            
            <DuoButton variant="success" iconOnly size="sm" icon={<Save size={14} />} onClick={() => showToast("Small icon only button clicked!")} />
          </div>

          <DuoHeading level={3} size="md" className="mt-8 mb-4">Additional Button Styles</DuoHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DuoButton variant="primary" size="xs" padding="compact" onClick={() => showToast("XS compact button clicked!")}>
              XS Compact
            </DuoButton>
            
            <DuoButton variant="secondary" size="sm" padding="compact" icon={<ChevronRight size={14} />} onClick={() => showToast("SM compact with icon clicked!")}>
              SM Compact with Icon
            </DuoButton>
            
            <DuoButton variant="success" padding="compact" icon={<ArrowRight size={16} />} onClick={() => showToast("MD compact with icon clicked!")}>
              MD Compact with Icon
            </DuoButton>
            
            <DuoButton variant="warning" size="lg" padding="compact" onClick={() => showToast("LG compact button clicked!")}>
              LG Compact
            </DuoButton>
            
            <DuoButton variant="neutral" size="xs" icon={<Edit size={12} />} iconPosition="right" padding="compact" onClick={() => showToast("XS compact with right icon clicked!")}>
              XS Right Icon
            </DuoButton>
            
            <RouterLink to="/error">
              <DuoButton variant="danger" padding="compact">
                Error Page
              </DuoButton>
            </RouterLink>
          </div>
          
          <div className="mt-4 flex gap-4">
            <RouterLink to="/forbidden">
              <DuoButton variant="warning" padding="compact">
                Forbidden Page
              </DuoButton>
            </RouterLink>
            
            <RouterLink to="/non-existent-page">
              <DuoButton variant="neutral" padding="compact">
                404 Page
              </DuoButton>
            </RouterLink>
          </div>
        </section>

        {/* Checkbox and Radio Section */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <DuoHeading level={2} size="lg" className="mb-6">
            Checkboxes and Radios
          </DuoHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <DuoHeading level={3} size="md" className="mb-4">Checkboxes</DuoHeading>
              
              <DuoCheckbox 
                label="Basic Checkbox"
                checked={checkboxValue}
                onCheckedChange={(checked) => setCheckboxValue(!!checked)}
              />
              
              <DuoCheckbox 
                label="Checkbox with Hint"
                hint="This is a helpful description"
                checked={false}
              />
              
              <DuoCheckbox 
                label="Checkbox with Error"
                error="This field is required"
                checked={false}
              />
              
              <DuoCheckbox 
                label="Disabled Checkbox"
                disabled
                checked={true}
              />

              <div className="flex items-center space-x-4">
                <DuoCheckbox checked={true} />
                <DuoCheckbox checked={false} />
                <DuoCheckbox checked={true} disabled />
                <DuoCheckbox checked={false} disabled />
              </div>
            </div>
            
            <div className="space-y-6">
              <DuoHeading level={3} size="md" className="mb-4">Radio Buttons</DuoHeading>
              
              <DuoRadio
                label="Favorite Language"
                options={[
                  { value: "option1", label: "Spanish" },
                  { value: "option2", label: "French" },
                  { value: "option3", label: "German" }
                ]}
                value={radioValue}
                onValueChange={setRadioValue}
              />
              
              <DuoRadio
                label="Display Orientation"
                orientation="horizontal"
                options={[
                  { value: "list", label: "List" },
                  { value: "grid", label: "Grid" }
                ]}
                value="list"
              />
              
              <DuoRadio
                label="Radio with Error"
                error="Please select an option"
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" }
                ]}
              />
            </div>
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
