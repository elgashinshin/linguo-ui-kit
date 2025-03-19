
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  DuoInput, 
  DuoButton, 
  DuoSelect, 
  DuoCharacter,
  DuoHeading,
  DuoText,
  DuoCheckbox,
  DuoOAuthButton
} from '@/components/duolingo-ui';
import { Mail, Lock, User, Globe, Github } from 'lucide-react';

const Auth = () => {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="mb-8 flex flex-col items-center">
          <Link to="/" className="text-3xl font-extrabold text-duo-green mb-4">
            Duo<span className="text-duo-purple">lingo</span>
          </Link>
          <DuoHeading level={1} size="xl" className="mb-2">
            {authMode === 'login' ? 'Welcome back!' : 'Create an account'}
          </DuoHeading>
          <DuoText color="muted" className="text-center">
            {authMode === 'login' 
              ? 'Log in to continue your language journey' 
              : 'Join millions of people learning languages for free'}
          </DuoText>
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
                  fullWidth
                />
                <DuoSelect 
                  label="Language to Learn"
                  options={languageOptions}
                  value={language}
                  onValueChange={setLanguage}
                  placeholder="Choose a language"
                  icon={<Globe />}
                  fullWidth
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
              fullWidth
            />
            
            <DuoInput 
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              icon={<Lock />}
              fullWidth
            />
            
            {authMode === 'login' && (
              <div className="flex items-center justify-between">
                <DuoCheckbox 
                  label="Remember me" 
                  checked={rememberMe}
                  onCheckedChange={() => setRememberMe(!rememberMe)}
                />
                <Link to="/forgot-password" className="text-duo-blue font-medium hover:underline">
                  Forgot Password?
                </Link>
              </div>
            )}
            
            <DuoButton 
              variant="primary" 
              fullWidth 
              type="submit"
              className="mt-8"
              size="md"
            >
              {authMode === 'login' ? 'Log In' : 'Sign Up'}
            </DuoButton>
            
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <DuoText size="sm" color="muted" className="mx-4">or continue with</DuoText>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <DuoOAuthButton 
                provider="google" 
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                    <path fill="none" d="M1 1h22v22H1z" />
                  </svg>
                }
                fullWidth
              >
                Google
              </DuoOAuthButton>
              
              <DuoOAuthButton 
                provider="github" 
                icon={<Github className="w-5 h-5" />}
                fullWidth
              >
                GitHub
              </DuoOAuthButton>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <DuoText color="muted">
              {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={toggleAuthMode} 
                className="ml-1 text-duo-blue font-bold hover:underline"
              >
                {authMode === 'login' ? 'Sign Up' : 'Log In'}
              </button>
            </DuoText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
