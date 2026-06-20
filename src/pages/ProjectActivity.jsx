import React from 'react';
import activityData from '../data/activity.json';
import { GitCommit, GitBranch, Tag } from 'lucide-react';

const ProjectActivity = () => {
  return (
    <div className="container main-content">
      <h1 className="mb-2">Project Activity Timeline</h1>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>Git commit history, releases, and branch management.</p>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <h3 className="mb-6 flex items-center gap-2"><GitCommit size={20} /> Commit History</h3>
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: '2px', backgroundColor: 'var(--border-color)' }}></div>
            {activityData.commits.map((commit, idx) => (
              <div key={commit.hash} style={{ position: 'relative', marginBottom: '2rem' }}>
                <div style={{ position: 'absolute', left: '-1.5rem', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--primary)', border: '4px solid var(--surface-color)', transform: 'translateX(-50%)' }}></div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 style={{ margin: 0 }}>{commit.message}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{commit.hash}</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  By <strong>{commit.author}</strong> on {new Date(commit.date).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="card">
            <h3 className="mb-4 flex items-center gap-2"><GitBranch size={20} /> Active Branches</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {activityData.branches.map(branch => (
                <li key={branch} style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)', fontSize: '0.875rem' }}>
                  <span className={`badge ${branch === 'main' ? 'badge-primary' : 'badge-neutral'}`}>{branch}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="card">
            <h3 className="mb-4 flex items-center gap-2"><Tag size={20} /> Releases</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {activityData.releases.map(release => (
                <li key={release} style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)', fontSize: '0.875rem' }}>
                  <span className="badge badge-success">{release}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectActivity;
