import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, avatar }) => {
  return (
    <div className="card" style={{ position: 'relative' }}>
      <Quote size={32} color="var(--primary)" style={{ opacity: 0.2, position: 'absolute', top: '1rem', right: '1rem' }} />
      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <img src={avatar} alt={author} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <h4 style={{ fontSize: '0.875rem', margin: 0, color: 'var(--text-primary)' }}>{author}</h4>
          <p style={{ fontSize: '0.75rem', margin: 0, color: 'var(--text-muted)' }}>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
