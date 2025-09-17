import React from 'react';

export default function ExpensesFilters() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input className="rounded bg-slate-900 border border-slate-700 px-4 py-2 text-slate-200" placeholder="Search expenses..." />
      <select className="rounded bg-slate-900 border border-slate-700 px-4 py-2 text-slate-200">
        <option>All Categories</option>
        <option>Crew</option>
        <option>Equipment</option>
        <option>Location</option>
        <option>Catering</option>
        <option>Post-Production</option>
      </select>
      <select className="rounded bg-slate-900 border border-slate-700 px-4 py-2 text-slate-200">
        <option>All Statuses</option>
        <option>Paid</option>
        <option>Pending</option>
        <option>Overdue</option>
      </select>
      <input type="date" className="rounded bg-slate-900 border border-slate-700 px-4 py-2 text-slate-200" />
      <input type="date" className="rounded bg-slate-900 border border-slate-700 px-4 py-2 text-slate-200" />
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">Filter</button>
    </div>
  );
}
