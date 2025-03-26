import React from 'react';

interface WorkoutCategoryProps {
  imageUrl: string;
  title: string;
  description: string;
}

const WorkoutCategory: React.FC<WorkoutCategoryProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300">
          View Workouts
        </button>
      </div>
    </div>
  );
};

const WorkoutSection: React.FC = () => {
  const workoutCategories = [
    {
      imageUrl: "https://picsum.photos/id/176/500/300",
      title: "Cardio",
      description: "Boost your endurance and heart health with our energizing cardio workouts."
    },
    {
      imageUrl: "https://picsum.photos/id/175/500/300",
      title: "Strength",
      description: "Build muscle, increase power, and enhance your overall physical performance."
    },
    {
      imageUrl: "https://picsum.photos/id/177/500/300",
      title: "Flexibility",
      description: "Improve your range of motion, posture, and prevent injuries with flexibility training."
    }
  ];

  return (
    <section id="workouts" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Workout Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from a variety of workout categories designed to help you reach your specific fitness goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workoutCategories.map((category, index) => (
            <WorkoutCategory 
              key={index}
              imageUrl={category.imageUrl}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSection;