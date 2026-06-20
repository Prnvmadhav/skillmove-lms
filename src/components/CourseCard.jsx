import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="card flex-col flex" style={{ padding: 0, overflow: 'hidden' }}>
      <img src={course.thumbnail} alt={course.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="flex justify-between items-center mb-2">
          <span className="badge badge-primary">{course.category}</span>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            ${course.price === 0 ? 'Free' : course.price.toFixed(2)}
          </span>
        </div>
        <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{course.title}</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', flex: 1 }}>{course.description.substring(0, 80)}...</p>
        
        <div className="flex items-center justify-between mt-4" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          <div className="flex items-center gap-1">
            <Star size={16} color="var(--warning)" fill="var(--warning)" />
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{course.studentsCount}</span>
          </div>
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <Link to={`/courses/${course.id}`} className="btn btn-outline" style={{ width: '100%' }}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
