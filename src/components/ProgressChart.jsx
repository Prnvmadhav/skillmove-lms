import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProgressChart = () => {
  const data = [
    { name: 'Week 1', progress: 20 },
    { name: 'Week 2', progress: 45 },
    { name: 'Week 3', progress: 65 },
    { name: 'Week 4', progress: 85 },
    { name: 'Week 5', progress: 100 },
  ];

  return (
    <div className="card">
      <h3 className="mb-4">Learning Progress (Hours)</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
            <XAxis dataKey="name" stroke="var(--text-muted)" />
            <YAxis stroke="var(--text-muted)" />
            <Tooltip 
              cursor={{ fill: 'var(--surface-color)' }}
              contentStyle={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
            />
            <Bar dataKey="progress" fill="var(--primary)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;
