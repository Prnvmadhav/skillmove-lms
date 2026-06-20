import React from 'react';

const Contact = () => {
  return (
    <div className="container main-content grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="mb-4">Get in Touch</h1>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>Have questions about our courses or platform? Send us a message and our team will get back to you within 24 hours.</p>
        
        <div className="card">
          <h3 className="mb-4">Contact Information</h3>
          <p><strong>Email:</strong> support@skillmove.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Education Ave, Tech City, TC 90210</p>
        </div>
      </div>
      
      <div className="card">
        <h2 className="mb-6">Send a Message</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <select className="form-input">
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Billing Question</option>
            </select>
          </div>
          <div className="form-group mb-6">
            <label className="form-label">Message</label>
            <textarea className="form-input" rows="5" placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
