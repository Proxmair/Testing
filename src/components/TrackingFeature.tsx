import React, { useState } from 'react';

interface WorkoutLog {
  id: number;
  exercise: string;
  sets: number;
  reps: number;
  date: string;
}

const TrackingFeature: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workouts' | 'nutrition'>('workouts');
  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([
    { id: 1, exercise: 'Squats', sets: 3, reps: 12, date: '2023-07-10' },
    { id: 2, exercise: 'Push-ups', sets: 4, reps: 15, date: '2023-07-12' },
    { id: 3, exercise: 'Pull-ups', sets: 3, reps: 8, date: '2023-07-13' }
  ]);
  
  const [newLog, setNewLog] = useState({
    exercise: '',
    sets: 0,
    reps: 0,
    date: new Date().toISOString().slice(0, 10)
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewLog({
      ...newLog,
      [name]: name === 'sets' || name === 'reps' ? parseInt(value) || 0 : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newWorkoutLog = {
      id: Date.now(),
      ...newLog
    };
    
    setWorkoutLogs([...workoutLogs, newWorkoutLog]);
    setNewLog({
      exercise: '',
      sets: 0,
      reps: 0,
      date: new Date().toISOString().slice(0, 10)
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Track Your Progress
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Monitor your fitness journey and stay motivated by tracking your workouts and nutrition.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 text-center font-semibold ${
                activeTab === 'workouts' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('workouts')}
            >
              Workout Tracker
            </button>
            <button
              className={`flex-1 py-4 text-center font-semibold ${
                activeTab === 'nutrition' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('nutrition')}
            >
              Nutrition Tracker
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'workouts' ? (
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Workout Log</h3>
                
                <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Exercise</label>
                    <input
                      type="text"
                      name="exercise"
                      value={newLog.exercise}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Exercise name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Sets</label>
                    <input
                      type="number"
                      name="sets"
                      value={newLog.sets || ''}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="0"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Reps</label>
                    <input
                      type="number"
                      name="reps"
                      value={newLog.reps || ''}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="0"
                      required
                    />
                  </div>
                  <div className="md:flex md:items-end">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 md:mt-6"
                    >
                      Add Workout
                    </button>
                  </div>
                </form>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700">
                        <th className="py-2 px-4 text-left">Exercise</th>
                        <th className="py-2 px-4 text-left">Sets</th>
                        <th className="py-2 px-4 text-left">Reps</th>
                        <th className="py-2 px-4 text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workoutLogs.map((log) => (
                        <tr key={log.id} className="border-t">
                          <td className="py-2 px-4">{log.exercise}</td>
                          <td className="py-2 px-4">{log.sets}</td>
                          <td className="py-2 px-4">{log.reps}</td>
                          <td className="py-2 px-4">{log.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6">
                  <svg className="w-16 h-16 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Nutrition Tracker Coming Soon!</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We're working on an amazing nutrition tracking feature to help you monitor your diet and reach your goals faster.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingFeature;