
import React from 'react';
import { 
  DuoHeading, 
  DuoText, 
  DuoButton, 
  DuoCheckbox, 
  DuoBadge, 
  DuoInput, 
  DuoCard, 
  DuoCharacter,
  DuoRadio,
  DuoProgress
} from '@/components/duolingo-ui';
import { Link } from 'react-router-dom';
import { Home, Edit, Trash, Save, X, Settings } from 'lucide-react';

const UIShowcase = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <DuoHeading level={1} size="xl">Duolingo UI Components</DuoHeading>
        <Link to="/">
          <DuoButton icon={<Home />}>Return Home</DuoButton>
        </Link>
      </div>

      {/* Buttons Section */}
      <section className="mb-12">
        <DuoHeading level={2} size="lg" className="mb-4">Buttons</DuoHeading>
        <DuoCard className="p-6">
          <DuoHeading level={3} size="md" className="mb-4">Button Variants</DuoHeading>
          <div className="flex flex-wrap gap-4 mb-8">
            <DuoButton variant="primary">Primary</DuoButton>
            <DuoButton variant="secondary">Secondary</DuoButton>
            <DuoButton variant="success">Success</DuoButton>
            <DuoButton variant="warning">Warning</DuoButton>
            <DuoButton variant="danger">Danger</DuoButton>
            <DuoButton variant="neutral">Neutral</DuoButton>
          </div>

          <DuoHeading level={3} size="md" className="mb-4">Button Sizes</DuoHeading>
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <DuoButton variant="primary" size="xs">Extra Small</DuoButton>
            <DuoButton variant="primary" size="sm">Small</DuoButton>
            <DuoButton variant="primary" size="md">Medium</DuoButton>
            <DuoButton variant="primary" size="lg">Large</DuoButton>
          </div>

          <DuoHeading level={3} size="md" className="mb-4">Buttons with Icons</DuoHeading>
          <div className="flex flex-wrap gap-4 mb-8">
            <DuoButton variant="primary" icon={<Home size={18} />}>Home</DuoButton>
            <DuoButton variant="primary" icon={<Home size={18} />} iconPosition="right">Home</DuoButton>
            <DuoButton variant="success" icon={<Save size={18} />}>Save</DuoButton>
            <DuoButton variant="danger" icon={<Trash size={18} />}>Delete</DuoButton>
          </div>

          <DuoHeading level={3} size="md" className="mb-4">Icon-only Buttons</DuoHeading>
          <div className="flex flex-wrap gap-4 mb-8">
            <DuoButton variant="primary" icon={<Home size={18} />} iconOnly />
            <DuoButton variant="secondary" icon={<Settings size={18} />} iconOnly />
            <DuoButton variant="success" icon={<Save size={18} />} iconOnly />
            <DuoButton variant="danger" icon={<Trash size={18} />} iconOnly />
            <DuoButton variant="warning" icon={<Edit size={18} />} iconOnly />
            <DuoButton variant="neutral" icon={<X size={18} />} iconOnly />
          </div>

          <DuoHeading level={3} size="md" className="mb-4">Compact Buttons</DuoHeading>
          <div className="flex flex-wrap gap-4 mb-8">
            <DuoButton variant="primary" padding="compact">Compact</DuoButton>
            <DuoButton variant="secondary" padding="compact" icon={<Settings size={18} />}>Settings</DuoButton>
            <DuoButton variant="success" padding="compact" size="sm">Small Compact</DuoButton>
          </div>
          
          <DuoHeading level={3} size="md" className="mb-4">Full Width Button</DuoHeading>
          <div className="mb-8">
            <DuoButton variant="primary" fullWidth>Full Width Button</DuoButton>
          </div>
        </DuoCard>
      </section>

      {/* Form Elements Section */}
      <section className="mb-12">
        <DuoHeading level={2} size="lg" className="mb-4">Form Elements</DuoHeading>
        
        <DuoCard className="p-6 mb-6">
          <DuoHeading level={3} size="md" className="mb-4">Checkboxes</DuoHeading>
          <div className="flex flex-col gap-4">
            <DuoCheckbox label="Default Checkbox" />
            <DuoCheckbox label="Checked Checkbox" defaultChecked />
            <DuoCheckbox label="With hint text" hint="This is additional information about the checkbox" />
            <DuoCheckbox label="With error message" error="This field is required" />
          </div>
        </DuoCard>

        <DuoCard className="p-6 mb-6">
          <DuoHeading level={3} size="md" className="mb-4">Radio Buttons</DuoHeading>
          <DuoRadio 
            label="Select an option" 
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" }
            ]}
            value="option1"
          />
        </DuoCard>

        <DuoCard className="p-6">
          <DuoHeading level={3} size="md" className="mb-4">Text Inputs</DuoHeading>
          <div className="flex flex-col gap-6">
            <DuoInput label="Default Input" placeholder="Enter text..." />
            <DuoInput 
              label="With Icon" 
              placeholder="Search..." 
              icon={<Settings size={18} />} 
            />
            <DuoInput 
              label="With Error" 
              placeholder="Email address" 
              error="Please enter a valid email address" 
              value="invalid-email"
            />
            <DuoInput 
              label="With Hint" 
              placeholder="Username" 
              hint="Username must be 3-16 characters" 
            />
          </div>
        </DuoCard>
      </section>

      {/* Display Elements */}
      <section className="mb-12">
        <DuoHeading level={2} size="lg" className="mb-4">Display Elements</DuoHeading>
        
        <DuoCard className="p-6 mb-6">
          <DuoHeading level={3} size="md" className="mb-4">Progress Bars</DuoHeading>
          <div className="flex flex-col gap-6">
            <DuoProgress value={25} max={100} showValue />
            <DuoProgress value={50} max={100} color="blue" showValue />
            <DuoProgress value={75} max={100} color="purple" showValue />
            <DuoProgress value={100} max={100} color="green" showValue />
          </div>
        </DuoCard>

        <DuoCard className="p-6 mb-6">
          <DuoHeading level={3} size="md" className="mb-4">Badges</DuoHeading>
          <div className="flex flex-wrap gap-3">
            <DuoBadge variant="green">Green</DuoBadge>
            <DuoBadge variant="purple">Purple</DuoBadge>
            <DuoBadge variant="blue">Blue</DuoBadge>
            <DuoBadge variant="orange">Orange</DuoBadge>
            <DuoBadge variant="yellow">Yellow</DuoBadge>
            <DuoBadge variant="red">Red</DuoBadge>
            <DuoBadge variant="gray">Gray</DuoBadge>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <DuoBadge variant="green" glow>Glowing</DuoBadge>
            <DuoBadge variant="purple" size="lg">Large</DuoBadge>
            <DuoBadge variant="blue" size="sm">Small</DuoBadge>
          </div>
        </DuoCard>

        <DuoCard className="p-6">
          <DuoHeading level={3} size="md" className="mb-4">Characters</DuoHeading>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex flex-col items-center">
              <DuoCharacter mood="happy" size="lg" />
              <DuoText className="mt-2">Happy</DuoText>
            </div>
            <div className="flex flex-col items-center">
              <DuoCharacter mood="sad" size="lg" />
              <DuoText className="mt-2">Sad</DuoText>
            </div>
            <div className="flex flex-col items-center">
              <DuoCharacter mood="excited" size="lg" />
              <DuoText className="mt-2">Excited</DuoText>
            </div>
            <div className="flex flex-col items-center">
              <DuoCharacter mood="neutral" size="lg" />
              <DuoText className="mt-2">Neutral</DuoText>
            </div>
          </div>
        </DuoCard>
      </section>

      {/* Typography Section */}
      <section className="mb-12">
        <DuoHeading level={2} size="lg" className="mb-4">Typography</DuoHeading>
        <DuoCard className="p-6">
          <div className="mb-6">
            <DuoHeading level={1} size="4xl">Heading 1 (4XL)</DuoHeading>
            <DuoHeading level={1} size="3xl">Heading 1 (3XL)</DuoHeading>
            <DuoHeading level={1} size="2xl">Heading 1 (2XL)</DuoHeading>
            <DuoHeading level={1} size="xl">Heading 1 (XL)</DuoHeading>
            <DuoHeading level={2} size="lg">Heading 2 (LG)</DuoHeading>
            <DuoHeading level={3} size="md">Heading 3 (MD)</DuoHeading>
            <DuoHeading level={4} size="sm">Heading 4 (SM)</DuoHeading>
            <DuoHeading level={5} size="xs">Heading 5 (XS)</DuoHeading>
          </div>
          
          <div>
            <DuoText size="2xl" weight="bold" className="mb-2">Text 2XL Bold</DuoText>
            <DuoText size="xl" weight="semibold" className="mb-2">Text XL Semibold</DuoText>
            <DuoText size="lg" weight="medium" className="mb-2">Text LG Medium</DuoText>
            <DuoText size="md" className="mb-2">Text MD Normal</DuoText>
            <DuoText size="sm" className="mb-2">Text SM Normal</DuoText>
            <DuoText size="xs" className="mb-2">Text XS Normal</DuoText>
            
            <DuoText size="lg" color="primary" className="mb-2">Primary Text</DuoText>
            <DuoText size="lg" color="error" className="mb-2">Error Text</DuoText>
            <DuoText size="lg" color="muted" className="mb-2">Muted Text</DuoText>
          </div>
        </DuoCard>
      </section>
    </div>
  );
};

export default UIShowcase;
