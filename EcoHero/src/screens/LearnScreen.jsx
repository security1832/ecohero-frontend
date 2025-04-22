// src/screens/LearnScreen.jsx
import React from 'react';

const courses = [
  { id: 1, title: 'Intro to Sustainable Living', price: 49.99, isFree: false },
  { id: 2, title: 'Eco-Friendly Habits', price: 0, isFree: true },
];

const LearnScreen = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Learn Sustainability</h2>
      {courses.map((course) => (
        <div key={course.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{course.title}</h3>
          <p className="text-gray-800">{course.isFree ? 'Free' : `$${course.price}`}</p>
          <button className="bg-green-600 text-white p-2 rounded mt-2">
            {course.isFree ? 'Start Now' : 'Enroll Now'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LearnScreen;