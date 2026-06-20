import React from 'react';
import usersData from '../data/users.json';
import { User, Mail, Shield, BookOpen, Award } from 'lucide-react';

const Profile = () => {
  const currentUser = usersData[0];

  return (
    <div className="container main-content">
      <h1 className="mb-8">My Profile</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card text-center flex-col flex items-center justify-center">
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
            {currentUser.name.charAt(0)}
          </div>
          <h2 style={{ marginBottom: '0.25rem' }}>{currentUser.name}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Student</p>
          <button className="btn btn-outline" style={{ width: '100%' }}>Edit Profile</button>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="card">
            <h3 className="mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Full Name</label>
                <div className="flex items-center gap-2" style={{ padding: '0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <User size={18} color="var(--text-muted)" />
                  <span>{currentUser.name}</span>
                </div>
              </div>
              <div>
                <label className="form-label">Email</label>
                <div className="flex items-center gap-2" style={{ padding: '0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <Mail size={18} color="var(--text-muted)" />
                  <span>{currentUser.email}</span>
                </div>
              </div>
              <div>
                <label className="form-label">Role</label>
                <div className="flex items-center gap-2" style={{ padding: '0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <Shield size={18} color="var(--text-muted)" />
                  <span>Student</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="mb-4">Learning Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4" style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <BookOpen size={24} color="var(--primary)" />
                <div>
                  <h4 style={{ margin: 0 }}>{currentUser.enrolledCourses.length}</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Enrolled Courses</span>
                </div>
              </div>
              <div className="flex items-center gap-4" style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <Award size={24} color="var(--success)" />
                <div>
                  <h4 style={{ margin: 0 }}>3</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
