
import React from 'react';
import { Link } from 'react-router-dom';
import { DuoHeading, DuoText, DuoButton, DuoCharacter } from '@/components/duolingo-ui';
import { Home, Lock } from 'lucide-react';

const Forbidden = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <DuoCharacter size="xl" mood="sad" />
      
      <div className="text-center max-w-md mt-8">
        <div className="mb-4 flex justify-center">
          <div className="p-4 bg-duo-red bg-opacity-10 rounded-full">
            <Lock className="h-12 w-12 text-duo-red" />
          </div>
        </div>
        
        <DuoHeading level={1} size="xl" className="mb-4">
          403 - Access Forbidden
        </DuoHeading>
        
        <DuoText size="lg" className="mb-8">
          Sorry, you don't have permission to access this page.
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

export default Forbidden;
