import React from 'react';

export default function RemunerationSummary() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col items-start">
        <div className="text-xs text-slate-400 mb-1">Total Crew Salary</div>
        <div className="text-lg font-bold">595,000 SEK</div>
      </div>
      <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col items-start">
        <div className="text-xs text-slate-400 mb-1">Paid</div>
        <div className="text-lg font-bold text-green-400">390,000 SEK</div>
      </div>
      <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col items-start">
        <div className="text-xs text-slate-400 mb-1">Pending</div>
        <div className="text-lg font-bold text-yellow-300">205,000 SEK</div>
      </div>
      <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col items-start">
        <div className="text-xs text-slate-400 mb-1">Next Payroll</div>
        <div className="text-lg font-bold">July 20, 2024</div>
      </div>
    </div>
  );
}
