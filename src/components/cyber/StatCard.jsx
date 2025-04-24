
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const StatCard = ({ icon, title, value, change, trend = 'neutral', color = 'blue' }) => {
  const colorClasses = {
    blue: 'border-cyber-neon-blue shadow-[0_0_10px_theme(colors.cyber.neon-blue)] text-cyber-neon-blue',
    pink: 'border-cyber-neon-pink shadow-[0_0_10px_theme(colors.cyber.neon-pink)] text-cyber-neon-pink',
    purple: 'border-cyber-neon-purple shadow-[0_0_10px_theme(colors.cyber.neon-purple)] text-cyber-neon-purple',
    green: 'border-cyber-terminal-green shadow-[0_0_10px_theme(colors.cyber.terminal-green)] text-cyber-terminal-green',
    yellow: 'border-cyber-warning-yellow shadow-[0_0_10px_theme(colors.cyber.warning-yellow)] text-cyber-warning-yellow',
    red: 'border-cyber-alert-red shadow-[0_0_10px_theme(colors.cyber.alert-red)] text-cyber-alert-red'
  };
  
  const trendClasses = {
    up: 'text-cyber-terminal-green',
    down: 'text-cyber-alert-red',
    neutral: 'text-gray-400'
  };
  
  return (
    <Card className={cn(
      'bg-cyber-darker-blue bg-opacity-80 backdrop-blur border p-4 h-full',
      colorClasses[color]
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <div className="text-2xl font-bold mt-1">{value}</div>
          
          {change && (
            <div className={cn('text-xs flex items-center mt-2', trendClasses[trend])}>
              {trend === 'up' && '↑'}
              {trend === 'down' && '↓'}
              {trend === 'neutral' && '→'} {change}
            </div>
          )}
        </div>
        
        <div className={cn('p-2 rounded-md', `bg-${color}-500/10`)}>
          {icon}
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 border rounded-md opacity-30 animate-pulse-border" 
          style={{animationDelay: '0.5s'}}></div>
      </div>
    </Card>
  );
};

export default StatCard;
