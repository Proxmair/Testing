import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkoutSection from './components/WorkoutSection';
import NutritionSection from './components/NutritionSection';
import TestimonialsSection from './components/TestimonialsSection';
import TrackingFeature from './components/TrackingFeature';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <WorkoutSection />
        <NutritionSection />
        <TestimonialsSection />
        <TrackingFeature />
      </main>
      <Footer />
    </div>
  );
};

export default App;