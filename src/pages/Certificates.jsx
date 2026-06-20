import React from 'react';
import certificatesData from '../data/certificates.json';
import coursesData from '../data/courses.json';
import CertificateCard from '../components/CertificateCard';

const Certificates = () => {
  const myCertificates = certificatesData.filter(cert => cert.userId === 'user-1');

  return (
    <div className="container main-content">
      <h1 className="mb-2">My Certificates</h1>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>View and download your earned certificates.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCertificates.map(cert => {
          const course = coursesData.find(c => c.id === cert.courseId);
          return (
            <CertificateCard key={cert.id} certificate={cert} courseTitle={course ? course.title : 'Unknown Course'} />
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
