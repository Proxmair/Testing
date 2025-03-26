import React from 'react';

interface NutritionCardProps {
  imageUrl: string;
  title: string;
  description: string;
  mealType: string;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ imageUrl, title, description, mealType }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-orange-500 text-white py-1 px-3 rounded-bl-lg">
          {mealType}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition duration-300">
          View Recipe
        </button>
      </div>
    </div>
  );
};

const NutritionSection: React.FC = () => {
  const nutritionCards = [
    {
      imageUrl: "https://picsum.photos/id/292/500/300",
      title: "Protein-Packed Breakfast Bowl",
      description: "Start your day right with this nutritious and delicious breakfast option.",
      mealType: "Breakfast"
    },
    {
      imageUrl: "https://picsum.photos/id/488/500/300",
      title: "Green Power Smoothie",
      description: "Boost your energy with this vitamin-rich green smoothie.",
      mealType: "Snack"
    },
    {
      imageUrl: "https://picsum.photos/id/493/500/300",
      title: "Lean Chicken & Veggie Meal Prep",
      description: "A perfect balanced meal for busy weekdays that keeps you on track.",
      mealType: "Lunch"
    },
    {
      imageUrl: "https://picsum.photos/id/429/500/300",
      title: "Salmon with Roasted Vegetables",
      description: "Omega-3 rich dinner option that's both healthy and satisfying.",
      mealType: "Dinner"
    }
  ];

  return (
    <section id="nutrition" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Nutrition Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fuel your fitness journey with our nutritionist-approved meal plans and recipes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nutritionCards.map((card, index) => (
            <NutritionCard 
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              mealType={card.mealType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;