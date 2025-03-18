
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DuoInput, DuoButton, DuoSelect, DuoCharacter } from '@/components/duolingo-ui';
import { Mail, Lock, User } from 'lucide-react';

const Auth = () => {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, name, language });
  };

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'korean', label: 'Korean' },
    { value: 'russian', label: 'Russian' },
  ];

  return (
    <div className="min-h-screen bg-duo-softBlue flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="mb-8 flex flex-col items-center">
          <Link to="/" className="text-3xl font-extrabold text-duo-green mb-4">
            Duo<span className="text-duo-purple">lingo</span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">
            {authMode === 'login' ? 'Welcome back!' : 'Create an account'}
          </h1>
          <p className="text-gray-600 text-center">
            {authMode === 'login' 
              ? 'Log in to continue your language journey' 
              : 'Join millions of people learning languages for free'}
          </p>
        </div>

        <div className="duo-card relative overflow-hidden">
          <div className="absolute -top-6 right-4">
            <DuoCharacter size="xl" mood="happy" />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-12">
            {authMode === 'signup' && (
              <>
                <DuoInput 
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  icon={<User />}
                />
                <DuoSelect 
                  label="Language to Learn"
                  options={languageOptions}
                  value={language}
                  onValueChange={setLanguage}
                  placeholder="Choose a language"
                />
              </>
            )}
            
            <DuoInput 
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              icon={<Mail />}
            />
            
            <DuoInput 
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              icon={<Lock />}
            />
            
            <DuoButton 
              variant="primary" 
              fullWidth 
              type="submit"
              className="mt-8"
            >
              {authMode === 'login' ? 'Log In' : 'Sign Up'}
            </DuoButton>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={toggleAuthMode} 
                className="ml-1 text-duo-blue font-bold hover:underline"
              >
                {authMode === 'login' ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
