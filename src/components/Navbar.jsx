import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Bell, Menu, X } from 'lucide-react';
import '../styles/components.css';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <nav style={{ backgroundColor: 'var(--surface-color)', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container flex justify-between items-center" style={{ padding: '1rem 1.5rem' }}>
        <Link to="/" className="flex items-center gap-2" style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--primary)' }}>
          <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>SM</span>
          SkillMove LMS
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-6" style={{ display: 'flex' }}>
           <Link to="/catalog" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Catalog</Link>
           <Link to="/dashboard" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Dashboard</Link>
           
           <div style={{ position: 'relative' }}>
             <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
               <Bell size={20} />
             </button>
             {isNotificationsOpen && (
               <div style={{ position: 'absolute', right: 0, top: '100%', marginTop: '0.5rem', width: '300px', backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', boxShadow: 'var(--shadow-md)' }}>
                 <h4 style={{ marginBottom: '0.5rem' }}>Notifications</h4>
                 <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>New course available: Advanced React</div>
                 <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', padding: '0.5rem 0' }}>Your certificate is ready to download!</div>
               </div>
             )}
           </div>

           <button onClick={() => setIsDark(!isDark)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
           </button>
           
           <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
