
import React from 'react';
import Logo from './Logo';
import { Github, Twitter, Shield, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyber-neon-blue bg-cyber-dark-blue bg-opacity-90 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-400">
              Advanced cybersecurity monitoring and threat intelligence platform for the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-neon-blue hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-neon-blue hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-cyber-neon-blue font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              {['Dashboard', 'Threat Intelligence', 'Security Reports', 'System Status'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-cyber-neon-blue font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {['Documentation', 'API Reference', 'Security Blog', 'Community'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-cyber-neon-blue font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Careers', 'Contact', 'Legal'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shadow Protocol Nexus. All rights reserved.
          </div>
          <div className="flex items-center text-sm text-gray-500 mt-4 md:mt-0">
            <Shield className="h-4 w-4 text-cyber-neon-blue mr-2" />
            Protected by quantum encryption
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
