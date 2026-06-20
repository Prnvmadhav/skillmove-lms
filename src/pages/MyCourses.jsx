import React from 'react';
import usersData from '../data/users.json';
import coursesData from '../data/courses.json';
import CourseCard from '../components/CourseCard';

const MyCourses = () => {
  const currentUser = usersData[0];
  const myCoursesIds = currentUser.enrolledCourses.map(e => e.courseId);
  const enrolledCourses = coursesData.filter(c => myCoursesIds.includes(c.id));

  return (
    <div className="container main-content">
      <h1 className="mb-2">My Courses</h1>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>Pick up where you left off and continue your learning.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-span-full text-center py-12" style={{ color: 'var(--text-muted)' }}>
            You haven't enrolled in any courses yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
