import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import coursesData from '../data/courses.json';
import { ArrowRight, BookOpen, Award, Users } from 'lucide-react';

const Home = () => {
  const featuredCourses = coursesData.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--surface-color)', padding: '4rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Unlock Your Potential with <span style={{ color: 'var(--primary)' }}>SkillMove LMS</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Access world-class courses, expert instructors, and a thriving community to accelerate your career growth.
            </p>
            <div className="flex gap-4">
              <Link to="/catalog" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1.125rem' }}>Explore Courses</Link>
              <Link to="/register" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '1.125rem' }}>Get Started</Link>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/seed/hero/800/600" alt="Hero" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="card">
            <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>100+</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Expert Instructors</p>
          </div>
          <div className="card">
            <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>500+</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Quality Courses</p>
          </div>
          <div className="card">
            <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>50k+</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Active Students</p>
          </div>
          <div className="card">
            <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>4.8</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Average Rating</p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container main-content">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 style={{ fontSize: '2rem' }}>Featured Courses</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Hand-picked courses to kickstart your journey</p>
          </div>
          <Link to="/catalog" className="btn btn-outline">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: 'var(--surface-color)', padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="SkillMove changed my life. The courses are structured perfectly for beginners and experts alike."
              author="Sarah Jenkins"
              role="Frontend Developer"
              avatar="https://i.pravatar.cc/150?u=sarah"
            />
            <TestimonialCard 
              quote="I was able to land my dream job after completing the Data Science bootcamp. Highly recommended!"
              author="Michael Chen"
              role="Data Analyst"
              avatar="https://i.pravatar.cc/150?u=michael"
            />
            <TestimonialCard 
              quote="The instructors are very knowledgeable and the community is incredibly supportive."
              author="Elena Rodriguez"
              role="UX Designer"
              avatar="https://i.pravatar.cc/150?u=elena"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
