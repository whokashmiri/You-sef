import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS, Mailchimp, or backend API here
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-light uppercase mb-8">
          Subscribe to Our Newsletter
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-96 px-4 py-3 text-black bg-[#e5e5e5] placeholder-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-500 px-6 py-3 uppercase text-sm tracking-widest text-white"
          >
            Sign Up
          </button>
        </form>

        {/* Hint */}
        <p className="text-sm text-gray-400 mt-2">Format: example@mail.com</p>
      </div>
    </section>
  );
};

export default NewsletterSection;
