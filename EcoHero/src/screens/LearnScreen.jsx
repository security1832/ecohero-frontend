import React from 'react';

const courses = [
  { id: 1, title: 'VR Rainforest Adventure', price: 99.99, isFree: false, isVR: true, isKids: false },
  { id: 2, title: 'Eco Habits 101', price: 0, isFree: true, isVR: false, isKids: false },
  { id: 3, title: 'Sustainability Micro-Degree', price: 499, isFree: false, isVR: false, isKids: false },
  { id: 4, title: 'Kids’ Eco-Academy', price: 0, isFree: true, isVR: false, isKids: true },
  { id: 5, title: 'Virtual Science Fair', price: 0, isFree: true, isVR: false, isKids: true },
  { id: 6, title: 'AI Eco-University', price: 0, isFree: true, isVR: false, isKids: false },
  { id: 7, title: 'Aweer Knowledge Hub', price: 0, isFree: true, isVR: false, isKids: false },
];

const LearnScreen = () => {
  const startCourse = (title) => alert(`Starting ${title}`);
  const getCertificate = (title) => alert(`Issuing blockchain certificate for ${title}`);
  const joinFieldTrip = () => alert('Joining VR field trip');
  const takeQuiz = () => alert('Taking quantum eco-quiz');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Learning Universe</h2>
      {courses.map((course) => (
        <div key={course.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{course.title}</h3>
          <p className="text-gray-800">{course.isFree ? 'Free' : `$${course.price}`}</p>
          {course.isVR && <p className="text-blue-600">VR Experience</p>}
          {course.isKids && <p className="text-blue-600">For Kids</p>}
          <button
            onClick={() => startCourse(course.title)}
            className="bg-green-600 text-white p-2 rounded mt-2"
            aria-label={`Start ${course.title}`}
          >
            {course.isFree ? 'Start Now' : 'Enroll Now'}
          </button>
          {!course.isFree && (
            <button
              onClick={() => getCertificate(course.title)}
              className="bg-blue-600 text-white p-2 rounded mt-2 ml-2"
              aria-label={`Get certificate for ${course.title}`}
            >
              Get Certificate
            </button>
          )}
          {course.isVR && (
            <button
              onClick={joinFieldTrip}
              className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
              aria-label="Join VR field trip"
            >
              VR Field Trip {course.isFree ? '(Free)' : '($12.99)'}
            </button>
          )}
          {course.title.includes('University') && (
            <button
              onClick={takeQuiz}
              className="bg-pink-600 text-white p-2 rounded mt-2 ml-2"
              aria-label="Take eco-quiz"
            >
              Quantum Quiz
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearnScreen;