import React from 'react';

export default function ExpensesTable() {
  const expenses = [
    { date: '2025-09-01', category: 'Crew', description: 'Director Salary', amount: 120000, status: 'Paid' },
    { date: '2025-09-03', category: 'Equipment', description: 'Camera Rental', amount: 50000, status: 'Paid' },
    { date: '2025-09-05', category: 'Location', description: 'Central Park Rental', amount: 30000, status: 'Pending' },
    { date: '2025-09-07', category: 'Catering', description: 'On Set Meals', amount: 15000, status: 'Paid' },
    { date: '2025-09-10', category: 'Post-Production', description: 'Editing Suite', amount: 20000, status: 'Overdue' },
  ];
  const statusColor = (status:string) => {
    if(status==='Paid') return 'bg-green-900/60 text-green-400';
    if(status==='Pending') return 'bg-yellow-900/60 text-yellow-300';
    if(status==='Overdue') return 'bg-red-900/60 text-red-400';
    return 'bg-slate-700 text-slate-300';
  };
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700 bg-slate-800/60">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-slate-400 text-left">
            <th className="px-6 py-3 font-semibold">Date</th>
            <th className="px-6 py-3 font-semibold">Category</th>
            <th className="px-6 py-3 font-semibold">Description</th>
            <th className="px-6 py-3 font-semibold">Amount</th>
            <th className="px-6 py-3 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e, i) => (
            <tr key={i} className="border-t border-slate-700 hover:bg-slate-800/80">
              <td className="px-6 py-3">{e.date}</td>
              <td className="px-6 py-3">{e.category}</td>
              <td className="px-6 py-3">{e.description}</td>
              <td className="px-6 py-3">${e.amount.toLocaleString()}</td>
              <td className="px-6 py-3">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColor(e.status)}`}>{e.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
