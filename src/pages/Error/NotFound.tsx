
import React from 'react';
import { Link } from 'react-router-dom';
import { DuoHeading, DuoText, DuoButton, DuoCharacter } from '@/components/duolingo-ui';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <DuoCharacter size="xl" mood="sad" />
      
      <div className="text-center max-w-md mt-8">
        <DuoHeading level={1} size="xl" className="mb-4">
          404 - Page Not Found
        </DuoHeading>
        
        <DuoText size="lg" className="mb-8">
          Oops! It looks like the page you're looking for doesn't exist.
        </DuoText>
        
        <Link to="/">
          <DuoButton 
            variant="primary" 
            icon={<Home size={18} />}
          >
            Return to Home
          </DuoButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
