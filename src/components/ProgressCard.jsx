import React from 'react';

const ProgressCard = ({ courseTitle, progress, lastAccessed }) => {
  return (
    <div className="card">
      <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{courseTitle}</h4>
      <div className="flex justify-between items-center mb-2" style={{ fontSize: '0.875rem' }}>
        <span style={{ color: 'var(--text-secondary)' }}>Overall Progress</span>
        <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{progress}%</span>
      </div>
      <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '999px', overflow: 'hidden', marginBottom: '1rem' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--primary)', transition: 'width 0.5s ease-in-out' }}></div>
      </div>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last accessed: {lastAccessed}</p>
    </div>
  );
};

export default ProgressCard;
