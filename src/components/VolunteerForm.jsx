import React, { useState } from 'react';

const VolunteerForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering!");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section">p
      <div className="section-content">
        <h1>Volunteer With Us</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <button type="submit" className="cta-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
