
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis,
  YAxis
} from 'recharts';

const data = [
  { name: '00:00', threats: 21, attacks: 12 },
  { name: '04:00', threats: 25, attacks: 15 },
  { name: '08:00', threats: 18, attacks: 8 },
  { name: '12:00', threats: 30, attacks: 20 },
  { name: '16:00', threats: 48, attacks: 25 },
  { name: '20:00', threats: 40, attacks: 22 },
  { name: '24:00', threats: 33, attacks: 18 },
];

const attackSourceData = [
  { name: 'NA', value: 35 },
  { name: 'EU', value: 25 },
  { name: 'ASIA', value: 20 },
  { name: 'SA', value: 10 },
  { name: 'AFR', value: 8 },
  { name: 'OCE', value: 2 },
];

const ThreatGraph: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-cyber-neon-blue">Threat Intelligence</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main threat chart */}
          <Card className="cyber-panel col-span-1 lg:col-span-2 p-4">
            <h3 className="text-lg font-bold mb-4 text-cyber-neon-blue">Threat Activity (Last 24h)</h3>
            <div className="h-64 relative">
              {/* Scanning effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-neon-blue to-transparent opacity-10 animate-scanning" 
                style={{backgroundSize: '100% 10px', animationDuration: '4s'}}></div>
                
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                  <defs>
                    <linearGradient id="gradientThreats" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00FFFF" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#00FFFF" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="gradientAttacks" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF10F0" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#FF10F0" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1a3a" />
                  <XAxis dataKey="name" stroke="#8884d8" tick={{fill: '#8884d8'}} />
                  <YAxis stroke="#8884d8" tick={{fill: '#8884d8'}} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(5, 7, 31, 0.9)', 
                      border: '1px solid #00FFFF',
                      borderRadius: '4px',
                      boxShadow: '0 0 10px #00FFFF'
                    }}
                    itemStyle={{ color: '#00FFFF' }}
                    labelStyle={{ color: '#FFFFFF' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="threats" 
                    stroke="#00FFFF" 
                    fillOpacity={1} 
                    fill="url(#gradientThreats)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="attacks" 
                    stroke="#FF10F0" 
                    fillOpacity={1} 
                    fill="url(#gradientAttacks)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-4 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-cyber-neon-blue inline-block mr-2"></span>
                <span>Detected Threats</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-cyber-neon-pink inline-block mr-2"></span>
                <span>Attack Attempts</span>
              </div>
            </div>
          </Card>
          
          {/* Attack sources */}
          <Card className="cyber-panel p-4">
            <h3 className="text-lg font-bold mb-4 text-cyber-neon-blue">Attack Sources</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attackSourceData} margin={{ top: 5, right: 5, bottom: 20, left: 0 }}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9D00FF" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#0080FF" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1a3a" />
                  <XAxis dataKey="name" stroke="#8884d8" tick={{fill: '#8884d8'}} />
                  <YAxis stroke="#8884d8" tick={{fill: '#8884d8'}} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(5, 7, 31, 0.9)', 
                      border: '1px solid #9D00FF',
                      borderRadius: '4px',
                      boxShadow: '0 0 10px #9D00FF'
                    }}
                    itemStyle={{ color: '#9D00FF' }}
                    labelStyle={{ color: '#FFFFFF' }}
                  />
                  <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThreatGraph;
