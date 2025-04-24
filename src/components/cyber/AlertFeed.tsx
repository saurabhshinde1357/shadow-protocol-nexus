
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, AlertTriangle, Shield, Terminal, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Alert {
  id: number;
  title: string;
  type: 'critical' | 'warning' | 'info';
  time: string;
  location: string;
}

const alerts: Alert[] = [
  {
    id: 1,
    title: 'Unauthorized Access Attempt',
    type: 'critical',
    time: '2 minutes ago',
    location: 'Server: SH-408X'
  },
  {
    id: 2,
    title: 'Malware Signature Detected',
    type: 'warning',
    time: '15 minutes ago',
    location: 'Endpoint: WS-127'
  },
  {
    id: 3,
    title: 'System Scan Complete',
    type: 'info',
    time: '42 minutes ago',
    location: 'Subnet: 192.168.0.0/24'
  },
  {
    id: 4,
    title: 'Suspicious Traffic Pattern',
    type: 'warning',
    time: '1 hour ago',
    location: 'Gateway: NX-01'
  },
  {
    id: 5,
    title: 'Encryption Protocol Upgraded',
    type: 'info',
    time: '3 hours ago',
    location: 'System-wide'
  },
];

const AlertIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'critical':
      return <AlertCircle className="h-5 w-5 text-cyber-alert-red" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-cyber-warning-yellow" />;
    case 'info':
      return <Shield className="h-5 w-5 text-cyber-terminal-green" />;
    default:
      return null;
  }
};

const AlertBadge = ({ type }: { type: string }) => {
  switch (type) {
    case 'critical':
      return <Badge className="bg-cyber-alert-red">Critical</Badge>;
    case 'warning':
      return <Badge className="bg-cyber-warning-yellow text-black">Warning</Badge>;
    case 'info':
      return <Badge className="bg-cyber-terminal-green text-black">Info</Badge>;
    default:
      return null;
  }
};

const AlertFeed: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyber-neon-blue">Latest Alerts</h2>
          <Button variant="outline" className="border-cyber-neon-blue text-cyber-neon-blue gap-2 hover:bg-cyber-neon-blue hover:text-cyber-dark-blue">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
        
        <div className="space-y-4">
          {alerts.map((alert) => (
            <Card key={alert.id} className="cyber-panel p-4 border-l-4 hover:bg-cyber-dark-blue transition-colors duration-300"
              style={{ 
                borderLeftColor: 
                  alert.type === 'critical' ? '#FF0000' : 
                  alert.type === 'warning' ? '#FFFF00' : 
                  '#00FF00' 
              }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <AlertIcon type={alert.type} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-medium">{alert.title}</h3>
                    <AlertBadge type={alert.type} />
                  </div>
                  
                  <div className="text-sm text-gray-400 mt-1">
                    <span>{alert.time}</span>
                    <span className="mx-2">•</span>
                    <span>{alert.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <Button variant="ghost" size="sm" className="text-cyber-neon-blue hover:text-white">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Button variant="outline" className="border-cyber-neon-blue text-cyber-neon-blue hover:bg-cyber-neon-blue hover:text-cyber-dark-blue">
            View All Alerts
          </Button>
        </div>
        
        <div className="mt-8 mx-auto max-w-xl">
          <Card className="cyber-panel p-4 border-cyber-neon-purple">
            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 text-cyber-neon-purple" />
              <div className="font-mono text-sm flex-1 terminal-text overflow-x-hidden">
                <div className="whitespace-nowrap animate-[typing_5s_steps(60)_infinite]">
                  &gt; SHADOW PROTOCOL active... monitoring network traffic...
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AlertFeed;
