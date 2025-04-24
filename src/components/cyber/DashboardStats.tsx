
import React from 'react';
import StatCard from './StatCard';
import { 
  Shield, 
  AlertTriangle, 
  Server, 
  Zap,
  UserCheck,
  Lock
} from 'lucide-react';

const DashboardStats: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-cyber-neon-blue">Security Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard 
            icon={<Shield className="h-6 w-6 text-cyber-neon-blue" />}
            title="Security Rating"
            value="87%"
            change="+2% from last week"
            trend="up"
            color="blue"
          />
          
          <StatCard 
            icon={<AlertTriangle className="h-6 w-6 text-cyber-warning-yellow" />}
            title="Active Threats"
            value="12"
            change="+3 new threats"
            trend="down"
            color="yellow"
          />
          
          <StatCard 
            icon={<Server className="h-6 w-6 text-cyber-neon-purple" />}
            title="Protected Servers"
            value="248"
            change="All systems operational"
            trend="neutral"
            color="purple"
          />
          
          <StatCard 
            icon={<Zap className="h-6 w-6 text-cyber-neon-pink" />}
            title="System Uptime"
            value="99.98%"
            change="23d without incidents"
            trend="up"
            color="pink"
          />
          
          <StatCard 
            icon={<UserCheck className="h-6 w-6 text-cyber-terminal-green" />}
            title="Active Users"
            value="1,842"
            change="+128 this week"
            trend="up"
            color="green"
          />
          
          <StatCard 
            icon={<Lock className="h-6 w-6 text-cyber-alert-red" />}
            title="Blocked Attempts"
            value="13.4k"
            change="+22% from last month"
            trend="up"
            color="red"
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;
