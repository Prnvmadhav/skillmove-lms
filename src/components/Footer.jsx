import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--surface-color)', borderTop: '1px solid var(--border-color)', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4" style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--primary)' }}>
            <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>SM</span>
            SkillMove LMS
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Empowering learners worldwide with accessible, high-quality education and professional skills development.</p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Platform</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/catalog" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Course Catalog</Link></li>
            <li><Link to="/dashboard" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Dashboard</Link></li>
            <li><Link to="/certificates" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Certificates</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Contact</Link></li>
            <li><Link to="/faq" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem' }}>Admin Tools</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/admin/reports" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Browser Report</Link></li>
            <li><Link to="/admin/activity" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Project Activity</Link></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} SkillMove LMS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
