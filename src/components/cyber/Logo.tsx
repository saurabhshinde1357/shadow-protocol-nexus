
import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <ShieldAlert className="h-8 w-8 text-cyber-neon-blue animate-pulse" />
        <div className="absolute inset-0 bg-cyber-neon-blue opacity-50 blur-md rounded-full animate-pulse-border"></div>
      </div>
      <div className="font-bold tracking-wider text-xl">
        <span className="text-cyber-neon-blue">SHADOW</span>
        <span className="text-cyber-neon-pink">NEXUS</span>
      </div>
    </div>
  );
};

export default Logo;
