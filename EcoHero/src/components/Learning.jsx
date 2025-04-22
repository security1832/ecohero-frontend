import { useState } from 'react';
import { trackEvent } from '../utils/analytics';

function Learning() {
  const courses = [
    { id: 1, title: 'Intro to Sustainable Living', description: 'Learn eco-friendly habits.', premium: false },
    { id: 2, title: 'Advanced Zero-Waste Techniques', description: 'Master waste reduction.', premium: true },
  ];
  const quizzes = [
    { id: 1, question: 'What reduces carbon emissions most?', options: ['Solar panels', 'Driving', 'Flying'], answer: 'Solar panels' },
  ];
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e, correctAnswer) => {
    e.preventDefault();
    const isCorrect = quizAnswer === correctAnswer;
    setQuizResult(isCorrect ? 'Correct!' : 'Try again!');
    trackEvent('quiz_submission', { question: quizzes[0].question, isCorrect });
  };

  return (
    <section id="learning" className="py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Eco-Learning Hub</h2>
        <h3 className="text-xl mb-4 text-gray-700">Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {courses.map((course) => (
            <div key={course.id} className="p-4 bg-white rounded shadow">
              <h4 className="text-lg font-bold">{course.title}</h4>
              <p className="text-gray-700">{course.description}</p>
              {course.premium ? (
                <a
                  href="#subscribe"
                  className="text-green-600 underline"
                  onClick={() => trackEvent('premium_course_click', { course: course.title })}
                >
                  Unlock with Premium
                </a>
              ) : (
                <a href="#" className="text-green-600 underline">
                  Start Course
                </a>
              )}
            </div>
          ))}
        </div>
        <h3 className="text-xl mt-8 mb-4 text-gray-700">Quiz</h3>
        <form
          onSubmit={(e) => handleQuizSubmit(e, quizzes[0].answer)}
          className="max-w-md mx-auto"
        >
          <p className="text-gray-700 mb-2">{quizzes[0].question}</p>
          {quizzes[0].options.map((option) => (
            <label key={option} className="block mb-2">
              <input
                type="radio"
                name="quiz"
                value={option}
                onChange={(e) => setQuizAnswer(e.target.value)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Submit Answer
          </button>
          {quizResult && <p className="mt-4 text-gray-700">{quizResult}</p>}
        </form>
      </div>
    </section>
  );
}

export default Learning;