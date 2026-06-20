import React from 'react';
import reportsData from '../data/reports.json';
import { CheckCircle } from 'lucide-react';

const BrowserReport = () => {
  return (
    <div className="container main-content">
      <h1 className="mb-2">Browser Compatibility Report</h1>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>Admin dashboard tracking cross-browser testing results.</p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h3 className="mb-4">Tested Browsers</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {reportsData.testedBrowsers.map((browser, idx) => (
              <li key={idx} className="flex items-center gap-2 mb-2">
                <CheckCircle size={16} color="var(--success)" /> {browser}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="mb-4">Compatibility Status</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {Object.entries(reportsData.compatibilityStatus).map(([browser, status]) => (
              <li key={browser} className="mb-3">
                <strong>{browser}:</strong> 
                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <h3 className="mb-4">Known Issues & Fixes</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
              <th style={{ padding: '0.75rem' }}>Issue</th>
              <th style={{ padding: '0.75rem' }}>Fix Applied</th>
              <th style={{ padding: '0.75rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {reportsData.knownIssues.map((issue, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '0.75rem' }}>{issue.issue}</td>
                <td style={{ padding: '0.75rem' }}>{issue.fix}</td>
                <td style={{ padding: '0.75rem' }}>
                  <span className="badge badge-success">{issue.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowserReport;
