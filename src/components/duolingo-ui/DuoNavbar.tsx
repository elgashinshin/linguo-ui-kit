
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Home, BookOpen, Trophy, User, Menu, X } from 'lucide-react';
import { DuoButton } from './DuoButton';

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const DuoNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Lessons', path: '/lessons', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Achievements', path: '/achievements', icon: <Trophy className="w-5 h-5" /> },
    { name: 'Profile', path: '/profile', icon: <User className="w-5 h-5" /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold">
            Duo<span className="text-duo-purple">lingo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 rounded-lg font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-duo-green bg-opacity-10 text-duo-green"
                    : "text-gray-600 hover:text-duo-green hover:bg-duo-green hover:bg-opacity-5"
                )}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <DuoButton variant="primary" size="sm">Log In</DuoButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg font-medium",
                    location.pathname === item.path
                      ? "bg-duo-green bg-opacity-10 text-duo-green"
                      : "text-gray-600 hover:text-duo-green"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-100">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <DuoButton variant="primary" fullWidth>
                    Log In / Sign Up
                  </DuoButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DuoNavbar;
