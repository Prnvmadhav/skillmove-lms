import React from 'react';

const About = () => {
  return (
    <div className="container main-content">
      <div className="text-center mb-12">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About SkillMove LMS</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          We are on a mission to democratize education and provide high-quality learning experiences for everyone, everywhere.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
        <div>
          <img src="https://picsum.photos/seed/about/600/400" alt="Our Mission" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} />
        </div>
        <div>
          <h2 className="mb-4">Our Vision</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            We envision a world where anyone, anywhere has the power to transform their life through learning. SkillMove LMS was founded on the belief that education is a fundamental human right.
          </p>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
            By leveraging modern technology, we aim to break down barriers to education, connecting passionate instructors with eager learners globally.
          </p>
        </div>
      </div>

      <div className="card text-center">
        <h2 className="mb-6">Meet Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src="https://i.pravatar.cc/150?u=ceo" alt="CEO" style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1rem auto', objectFit: 'cover' }} />
            <h4 style={{ margin: 0 }}>Jane Smith</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>CEO & Founder</p>
          </div>
          <div>
            <img src="https://i.pravatar.cc/150?u=cto" alt="CTO" style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1rem auto', objectFit: 'cover' }} />
            <h4 style={{ margin: 0 }}>John Doe</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Chief Technology Officer</p>
          </div>
          <div>
            <img src="https://i.pravatar.cc/150?u=cmo" alt="CMO" style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1rem auto', objectFit: 'cover' }} />
            <h4 style={{ margin: 0 }}>Emily Chen</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Chief Marketing Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
