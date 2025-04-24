
import React from 'react';
import Logo from './Logo';
import { Bell, Shield, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="border-b border-cyber-neon-blue bg-cyber-dark-blue bg-opacity-90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {['Dashboard', 'Threats', 'Analytics', 'Reports'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-cyber-neon-blue hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-cyber-neon-blue hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-cyber-neon-blue hover:text-white">
            <Shield className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-cyber-neon-blue hover:text-white md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden md:flex items-center gap-2 border border-cyber-neon-blue rounded-full px-3 py-1">
            <User className="h-5 w-5 text-cyber-neon-blue" />
            <span className="text-sm text-cyber-neon-blue">Operative</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
