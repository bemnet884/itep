'use client'
// app/components/ContactForm.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', location: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        'service_yourServiceID',
        'template_yourTemplateID',
        formData,
        'yourUserID'
      )
      .then(
        () => alert('Message sent!'),
        () => alert('Failed to send message!')
      );
  };

  return (
    <section className="py-12 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6">Order Now</h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded mt-4"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded mt-4"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          className="w-full p-2 border rounded mt-4"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Additional Message"
          className="w-full p-2 border rounded mt-4"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 mt-4 rounded">
          Submit Order
        </button>
      </form>
    </section>
  );
}
