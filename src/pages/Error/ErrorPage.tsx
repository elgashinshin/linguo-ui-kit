
import React from 'react';
import { Link } from 'react-router-dom';
import { DuoHeading, DuoText, DuoButton, DuoCharacter } from '@/components/duolingo-ui';
import { Home, AlertTriangle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <DuoCharacter size="xl" mood="surprised" />
      
      <div className="text-center max-w-md mt-8">
        <div className="mb-4 flex justify-center">
          <div className="p-4 bg-duo-orange bg-opacity-10 rounded-full">
            <AlertTriangle className="h-12 w-12 text-duo-orange" />
          </div>
        </div>
        
        <DuoHeading level={1} size="xl" className="mb-4">
          Oops! Something Went Wrong
        </DuoHeading>
        
        <DuoText size="lg" className="mb-8">
          We encountered an unexpected error. Our team has been notified and is working on a fix.
        </DuoText>
        
        <div className="flex justify-center space-x-4">
          <Link to="/">
            <DuoButton 
              variant="primary" 
              icon={<Home size={18} />}
            >
              Return to Home
            </DuoButton>
          </Link>
          
          <DuoButton 
            variant="neutral" 
            onClick={() => window.location.reload()}
          >
            Try Again
          </DuoButton>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
