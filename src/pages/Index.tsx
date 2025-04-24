
import React from 'react';
import Header from '@/components/cyber/Header';
import Hero from '@/components/cyber/Hero';
import DashboardStats from '@/components/cyber/DashboardStats';
import ThreatGraph from '@/components/cyber/ThreatGraph';
import AlertFeed from '@/components/cyber/AlertFeed';
import Footer from '@/components/cyber/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <DashboardStats />
        <ThreatGraph />
        <AlertFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
