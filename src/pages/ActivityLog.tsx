import React, { useState } from 'react';

const activityData = [
  { timestamp: '2024-03-15 14:30', user: 'Emily Carter', action: 'Expense Approved', actionColor: 'bg-green-100 text-green-600', module: 'Expenses', description: 'Approved expense report for Scene 12' },
  { timestamp: '2024-03-15 12:00', user: 'David Lee', action: 'Script Updated', actionColor: 'bg-blue-100 text-blue-600', module: 'Scene 12', description: 'Updated script version for Scene 12' },
  { timestamp: '2024-03-14 18:45', user: 'Sophia Clark', action: 'User Invited', actionColor: 'bg-purple-100 text-purple-600', module: 'People', description: 'Invited Alex Turner to the production team' },
  { timestamp: '2024-03-14 10:15', user: 'Michael Brown', action: 'Budget Reallocated', actionColor: 'bg-yellow-100 text-yellow-700', module: 'Budget', description: 'Reallocated budget for Scene 12' },
  { timestamp: '2024-03-13 16:20', user: 'Olivia Green', action: 'Expense Approved', actionColor: 'bg-green-100 text-green-600', module: 'Expenses', description: 'Approved expense report for Scene 12' },
  { timestamp: '2024-03-13 09:00', user: 'Ethan White', action: 'Script Updated', actionColor: 'bg-blue-100 text-blue-600', module: 'Scene 12', description: 'Updated script version for Scene 12' },
  { timestamp: '2024-03-12 20:00', user: 'Ava Harris', action: 'User Invited', actionColor: 'bg-purple-100 text-purple-600', module: 'People', description: 'Invited Ryan Johnson to the production team' },
  { timestamp: '2024-03-12 11:30', user: 'Noah Williams', action: 'Budget Reallocated', actionColor: 'bg-yellow-100 text-yellow-700', module: 'Budget', description: 'Reallocated budget for Scene 12' },
  { timestamp: '2024-03-11 17:45', user: 'Isabella Scott', action: 'Expense Approved', actionColor: 'bg-green-100 text-green-600', module: 'Expenses', description: 'Approved expense report for Scene 12' },
  { timestamp: '2024-03-11 08:00', user: 'Liam Davis', action: 'Script Updated', actionColor: 'bg-blue-100 text-blue-600', module: 'Scene 12', description: 'Updated script version for Scene 12' },
];

export default function ActivityLogPage() {
  const [search, setSearch] = useState('');
  // Filtering logic can be added here if needed
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">User Activity Log</h1>
      <p className="text-slate-500 mb-8">Monitor all user actions within the CineTrack application.</p>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">search</span>
          <input
            className="w-full rounded border border-slate-200 bg-white pl-10 pr-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400"
            placeholder="Search by user, action, or module..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="rounded border border-slate-200 bg-white px-3 py-2 text-slate-800">
          <option>User</option>
        </select>
        <select className="rounded border border-slate-200 bg-white px-3 py-2 text-slate-800">
          <option>Action Type</option>
        </select>
        <select className="rounded border border-slate-200 bg-white px-3 py-2 text-slate-800">
          <option>Date Range</option>
        </select>
        <select className="rounded border border-slate-200 bg-white px-3 py-2 text-slate-800">
          <option>Production</option>
        </select>
      </div>
      <div className="rounded-lg border border-slate-700 bg-slate-800/60 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-300 bg-slate-900">
              <th className="text-left py-3 px-4 font-semibold">Timestamp</th>
              <th className="text-left py-3 px-4 font-semibold">User</th>
              <th className="text-left py-3 px-4 font-semibold">Action Type</th>
              <th className="text-left py-3 px-4 font-semibold">Affected Module/Item</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((row, i) => (
              <tr key={i} className="border-t border-slate-700 hover:bg-slate-700/40">
                <td className="py-3 px-4 whitespace-nowrap text-slate-100">{row.timestamp}</td>
                <td className="py-3 px-4 whitespace-nowrap text-slate-100">{row.user}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded font-semibold text-xs ${row.actionColor}`}>{row.action}</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-slate-100">{row.module}</td>
                <td className="py-3 px-4 text-slate-100">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
