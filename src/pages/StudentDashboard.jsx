import React from 'react';
import ProgressCard from '../components/ProgressCard';
import ProgressChart from '../components/ProgressChart';
import usersData from '../data/users.json';
import coursesData from '../data/courses.json';
import { BookOpen, Award, Clock } from 'lucide-react';

const StudentDashboard = () => {
  const currentUser = usersData[0]; // mock logged in user
  
  const getCourseDetails = (courseId) => {
    return coursesData.find(c => c.id === courseId) || {};
  };

  return (
    <div className="container main-content">
      <div className="mb-8">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome back, {currentUser.name}!</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Ready to continue your learning journey?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card flex items-center gap-4">
          <div style={{ padding: '1rem', backgroundColor: 'rgba(79, 70, 229, 0.1)', borderRadius: 'var(--radius-md)', color: 'var(--primary)' }}>
            <BookOpen size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{currentUser.enrolledCourses.length}</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Enrolled Courses</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div style={{ padding: '1rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-md)', color: 'var(--success)' }}>
            <Award size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>3</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Certificates Earned</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div style={{ padding: '1rem', backgroundColor: 'rgba(245, 159, 11, 0.71)', borderRadius: 'var(--radius-md)', color: 'var(--warning)' }}>
            <Clock size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>120h</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Learning Hours</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <ProgressChart />
        </div>
        <div className="flex flex-col gap-6">
          <h3 style={{ marginBottom: '0.5rem' }}>Current Courses</h3>
          {currentUser.enrolledCourses.map(enrolled => {
            const course = getCourseDetails(enrolled.courseId);
            return (
              <ProgressCard 
                key={enrolled.courseId} 
                courseTitle={course.title} 
                progress={enrolled.progress} 
                lastAccessed="2 hours ago" 
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
