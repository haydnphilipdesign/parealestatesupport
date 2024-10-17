import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-section py-20 bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-800">
      <h2 className="text-center text-white text-4xl font-bold mb-10">Contact Us</h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative mb-6">
          <input
            type="text"
            name="name"
            required
            className="floating-input"
            value={formData.name}
            onChange={handleChange}
          />
          <label className="floating-label">Your Name</label>
        </div>

        <div className="relative mb-6">
          <input
            type="email"
            name="email"
            required
            className="floating-input"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="floating-label">Your Email</label>
        </div>

        <div className="relative mb-6">
          <textarea
            name="message"
            required
            className="floating-input"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <label className="floating-label">Your Message</label>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-800 transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default ContactSection;