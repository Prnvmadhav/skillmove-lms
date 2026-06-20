import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container main-content flex items-center justify-center">
      <div className="card" style={{ maxWidth: '400px', width: '100%', padding: '2rem' }}>
        <h2 className="text-center mb-6">Create an Account</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="you@example.com" />
          </div>
          <div className="form-group mb-6">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Sign Up</button>
        </form>
        <p className="text-center mt-4" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 500 }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
