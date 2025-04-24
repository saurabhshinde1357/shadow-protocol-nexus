
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden py-20">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-hex-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark-blue via-cyber-darker-blue to-cyber-dark-blue opacity-80"></div>
      
      {/* Data streams - decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute top-0 text-cyber-neon-blue opacity-20 text-xs font-mono animate-stream-data"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j}>
                {Math.random().toString(36).substring(2, 4)}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Floating icons - decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Shield 
          className="absolute text-cyber-neon-blue opacity-10 animate-float"
          style={{ 
            top: '20%', 
            left: '15%', 
            height: '80px', 
            width: '80px',
            animationDelay: '0s' 
          }} 
        />
        <Lock 
          className="absolute text-cyber-neon-pink opacity-10 animate-float"
          style={{ 
            top: '60%', 
            left: '80%', 
            height: '60px', 
            width: '60px',
            animationDelay: '1s' 
          }} 
        />
        <Eye 
          className="absolute text-cyber-neon-purple opacity-10 animate-float"
          style={{ 
            top: '30%', 
            left: '70%', 
            height: '70px', 
            width: '70px',
            animationDelay: '2s' 
          }} 
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-cyber-neon-blue animate-glow">SHADOW</span>{' '}
          <span className="text-cyber-neon-pink animate-glow">PROTOCOL</span>{' '}
          <span className="text-cyber-neon-blue animate-glow">NEXUS</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
          Advanced threat monitoring and cybersecurity intelligence network for the digital frontier
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="cyber-button">
            Initialize System
          </Button>
          <Button className="bg-transparent border border-cyber-neon-pink text-cyber-neon-pink hover:bg-cyber-neon-pink hover:text-cyber-dark-blue transition-all duration-300">
            Access Terminal
          </Button>
        </div>
        
        <div className="mt-12 text-xs font-mono text-cyber-neon-blue">
          <div>System status: <span className="text-cyber-terminal-green">ACTIVE</span></div>
          <div>Security protocol: <span className="text-cyber-terminal-green">ENGAGED</span></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
