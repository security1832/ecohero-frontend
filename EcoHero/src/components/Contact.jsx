import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Placeholder: Replace with backend API
      console.log('Form data:', formData);
      alert('Form submitted! (Awaiting backend integration)');
      /*
      const response = await fetch('https://your-backend-api.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) alert('Message sent!');
      else alert('Error sending message.');
      */
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
// filepath: c:\projects\EcoHero\src\components\Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Placeholder: Replace with backend API
      console.log('Form data:', formData);
      alert('Form submitted! (Awaiting backend integration)');
      /*
      const response = await fetch('https://your-backend-api.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) alert('Message sent!');
      else alert('Error sending message.');
      */
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