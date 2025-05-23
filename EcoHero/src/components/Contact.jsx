import { useState } from 'react';
import { trackEvent } from '../utils/analytics';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    trackEvent('form_submission', { form: 'contact' });
    try {
      console.log('Form data:', formData);
      alert('Form submitted! (Awaiting backend integration)');
    } catch (error) {
      alert('Network error.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-green-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;