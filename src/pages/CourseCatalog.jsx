import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses.json';
import { Search, Filter } from 'lucide-react';

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Marketing', 'Business'];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || course.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container main-content">
      <div className="mb-8 text-center">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Course Catalog</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Browse our extensive library of high-quality courses taught by industry experts.
        </p>
      </div>

      <div className="card mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="form-group" style={{ margin: 0, gridColumn: 'span 2' }}>
            <div style={{ position: 'relative' }}>
              <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                className="form-input" 
                placeholder="Search courses..." 
                style={{ paddingLeft: '3rem' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <select 
              className="form-input"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            No courses found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCatalog;
