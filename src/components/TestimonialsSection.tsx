import React, { useState } from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="flex items-center mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "This fitness app has completely transformed my workout routine. I've seen more progress in 3 months than I did in an entire year on my own!",
      name: "Sarah Johnson",
      role: "Lost 30 lbs in 6 months",
      imageUrl: "https://picsum.photos/id/64/200/200"
    },
    {
      quote: "The nutrition plans are fantastic! Easy to follow and I never feel like I'm on a diet. Highly recommend to anyone looking to eat healthier.",
      name: "Michael Rodriguez",
      role: "Gained 15 lbs of muscle",
      imageUrl: "https://picsum.photos/id/91/200/200"
    },
    {
      quote: "As a busy mom, I needed something flexible and effective. This app delivers both! The workouts are challenging but doable, and I can fit them into my schedule.",
      name: "Jennifer Smith",
      role: "Increased strength by 40%",
      imageUrl: "https://picsum.photos/id/26/200/200"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our community has achieved with dedication and the right guidance.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Testimonial 
              quote={testimonials[currentIndex].quote}
              name={testimonials[currentIndex].name}
              role={testimonials[currentIndex].role}
              imageUrl={testimonials[currentIndex].imageUrl}
            />
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrev}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`mx-1 w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;