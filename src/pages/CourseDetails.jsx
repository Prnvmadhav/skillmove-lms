import React from 'react';
import { useParams, Link } from 'react-router-dom';
import coursesData from '../data/courses.json';
import instructorsData from '../data/instructors.json';
import { Clock, Users, Star, CheckCircle } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === id) || coursesData[0];
  const instructor = instructorsData.find(i => i.id === course.instructorId) || instructorsData[0];

  return (
    <div className="container main-content">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <img src={course.thumbnail} alt={course.title} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }} />
          <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>{course.title}</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>{course.description}</p>
          
          <div className="card mb-8">
            <h3 className="mb-4">What you'll learn</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Build real-world projects', 'Understand core concepts', 'Best practices and patterns', 'Deploy to production'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle size={20} color="var(--success)" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="mb-4">About the Instructor</h3>
            <div className="flex items-center gap-4 mb-4">
              <img src={instructor.avatar} alt={instructor.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ margin: 0, fontSize: '1.25rem' }}>{instructor.name}</h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{instructor.coursesTaught} courses taught</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>{instructor.bio}</p>
          </div>
        </div>

        <div>
          <div className="card" style={{ position: 'sticky', top: '100px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              ${course.price === 0 ? 'Free' : course.price.toFixed(2)}
            </h2>
            <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', marginBottom: '1rem' }}>
              Enroll Now
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              30-day money-back guarantee
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li className="flex justify-between pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}><Clock size={18}/> Duration</span>
                <strong>{course.duration}</strong>
              </li>
              <li className="flex justify-between pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}><Users size={18}/> Students</span>
                <strong>{course.studentsCount}</strong>
              </li>
              <li className="flex justify-between pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}><Star size={18}/> Rating</span>
                <strong>{course.rating} / 5.0</strong>
              </li>
              <li className="flex justify-between pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>Level</span>
                <strong>{course.difficulty}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
