import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://picsum.photos/id/684/1600/900')" 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Achieve Your Fitness Goals
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Transform your life with our comprehensive fitness app. Get personalized workouts, 
            nutrition plans, and expert guidance to help you reach your fitness potential.
          </p>
          <a 
            href="#workouts" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
          >
            Explore Workouts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;