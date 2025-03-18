
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { DuoInput, DuoButton, DuoSelect, DuoCharacter } from '@/components/duolingo-ui';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'ru', label: 'Russian' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a mock authentication - would be replaced with actual auth logic
    if (isLogin) {
      // Login logic would go here
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      navigate('/');
    } else {
      // Sign up logic would go here
      toast({
        title: "Account Created",
        description: "Your account has been created successfully!",
      });
      navigate('/');
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setName('');
    setLanguage('');
  };

  return (
    <div className="min-h-screen bg-duo-softBlue flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <DuoCharacter character="duo" size="xl" />
        </div>
        
        <div className="duo-card bg-white p-8 rounded-3xl shadow-duo mb-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            {isLogin ? 'Log in to Duolingo' : 'Create your profile'}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <>
                <DuoInput
                  label="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  icon={<User size={20} />}
                />
                
                <DuoSelect
                  label="Learning language"
                  options={languageOptions}
                  placeholder="Choose a language"
                  value={language}
                  onValueChange={setLanguage}
                  fullWidth
                />
              </>
            )}
            
            <DuoInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              icon={<Mail size={20} />}
            />
            
            <DuoInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              icon={<Lock size={20} />}
              iconPosition="left"
              className="relative"
              hint={isLogin ? "" : "At least 8 characters with letters and numbers"}
            />
            
            <button
              type="button"
              className="absolute right-12 top-[46%] text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            
            <DuoButton type="submit" variant="primary" fullWidth size="lg">
              {isLogin ? 'Log in' : 'Create account'}
            </DuoButton>
          </form>
        </div>
        
        <div className="text-center">
          <p className="mb-4 text-gray-700">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <DuoButton
            variant="neutral"
            onClick={toggleAuthMode}
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </DuoButton>
        </div>
      </div>
    </div>
  );
};

export default Auth;
