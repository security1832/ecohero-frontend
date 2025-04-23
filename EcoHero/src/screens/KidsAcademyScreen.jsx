import React from 'react';

const lessons = [
  { id: 1, title: 'Why Trees Are Awesome', reward: '10 Tokens' },
  { id: 2, title: 'Recycle Like a Hero', reward: '15 Tokens' },
  { id: 3, title: 'VR Eco-Lab', reward: '20 Tokens' },
];

const KidsAcademyScreen = () => {
  const startLesson = (title) => alert(`Starting ${title}`);
  const joinFair = () => alert('Joining virtual science fair');
  const joinSeniorClub = () => alert('Joining senior eco-club');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Kids’ Eco-Academy</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-green-700 font-semibold">Fun Lessons</h3>
        {lessons.map((lesson) => (
          <div key={lesson.id} className="mb-2">
            <p className="text-gray-800">
              {lesson.title} - {lesson.reward}
            </p>
            <button
              onClick={() => startLesson(lesson.title)}
              className="bg-green-600 text-white p-2 rounded"
              aria-label={`Start ${lesson.title}`}
            >
              Start Lesson
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={joinFair}
        className="bg-blue-600 text-white p-2 rounded mt-2"
        aria-label="Join science fair"
      >
        Join Science Fair (Free)
      </button>
      <button
        onClick={joinSeniorClub}
        className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Join senior club"
      >
        Senior Eco-Club (Free)
      </button>
    </div>
  );
};

export default KidsAcademyScreen;