import React from 'react';
import { Download } from 'lucide-react';

const CertificateCard = ({ certificate, courseTitle }) => {
  return (
    <div className="card flex-col flex items-center justify-center text-center" style={{ border: '2px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '60px', height: '60px', backgroundColor: 'var(--primary)', transform: 'rotate(45deg)', opacity: 0.1 }}></div>
      <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontFamily: 'serif' }}>Certificate of Completion</h3>
      <h4 style={{ marginBottom: '0.5rem' }}>{courseTitle}</h4>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Issued on: {certificate.issueDate}</p>
      <button className="btn btn-outline">
        <Download size={16} /> Download PDF
      </button>
    </div>
  );
};

export default CertificateCard;
