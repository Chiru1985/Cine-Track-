import React from 'react';

export default function ProducerDashboard({ onGoExpenses }: { onGoExpenses: () => void }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Producer's Dashboard</h1>
      <p className="text-slate-300 mb-8">Full project overview, with filters for department/vendor.</p>
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"><span className="material-symbols-outlined">download</span> Export Snapshot</button>
        <button className="border border-slate-700 text-slate-200 px-4 py-2 rounded hover:bg-slate-800">All Departments</button>
        <button className="border border-slate-700 text-slate-200 px-4 py-2 rounded hover:bg-slate-800">All Vendors</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-6 flex flex-col">
          <div className="text-slate-400 text-xs mb-1">Budget Used vs Remaining</div>
          <div className="text-2xl font-bold mb-2">250,000 / 750,000 SEK</div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400" style={{width:'25%'}}></div>
          </div>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-6 flex flex-col">
          <div className="text-slate-400 text-xs mb-1">Forecast at Completion</div>
          <div className="text-2xl font-bold mb-2">950,000 / 1,000,000 SEK</div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-300" style={{width:'95%'}}></div>
          </div>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-6 flex flex-col">
          <div className="text-slate-400 text-xs mb-1">Approvals Queue</div>
          <div className="text-2xl font-bold mb-2">5 Items</div>
          <a href="#" className="text-blue-400 text-sm hover:underline">View Queue</a>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-6 flex flex-col">
          <div className="text-slate-400 text-xs mb-1">Cash Runway</div>
          <div className="text-2xl font-bold mb-2">3 Months</div>
          <div className="text-xs text-slate-400">Based on current burn rate</div>
        </div>
      </div>
      <div className="mb-10">
        <div className="text-xl font-bold mb-3">Upcoming Shoots</div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-400">
                <th className="text-left py-2 px-4">SHOOT</th>
                <th className="text-left py-2 px-4">DATE</th>
                <th className="text-left py-2 px-4">LOCATION</th>
                <th className="text-left py-2 px-4">STATUS</th>
                <th className="text-left py-2 px-4">RISK FLAGS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-700">
                <td className="py-2 px-4 font-semibold">Scene 12</td>
                <td className="py-2 px-4">2024-07-15</td>
                <td className="py-2 px-4">Studio A</td>
                <td className="py-2 px-4"><span className="bg-green-900/60 text-green-400 px-2 py-0.5 rounded text-xs">Scheduled</span></td>
                <td className="py-2 px-4">None</td>
              </tr>
              <tr className="border-t border-slate-700">
                <td className="py-2 px-4 font-semibold">Scene 25</td>
                <td className="py-2 px-4">2024-07-20</td>
                <td className="py-2 px-4">Outdoor Set</td>
                <td className="py-2 px-4"><span className="bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded text-xs">Confirmed</span></td>
                <td className="py-2 px-4"><span className="text-yellow-300 flex items-center gap-1"><span className="material-symbols-outlined text-base align-middle">warning</span> Weather Risk</span></td>
              </tr>
              <tr className="border-t border-slate-700">
                <td className="py-2 px-4 font-semibold">Scene 30</td>
                <td className="py-2 px-4">2024-07-25</td>
                <td className="py-2 px-4">Studio B</td>
                <td className="py-2 px-4"><span className="bg-yellow-900/60 text-yellow-300 px-2 py-0.5 rounded text-xs">Pending</span></td>
                <td className="py-2 px-4"><span className="text-red-400 flex items-center gap-1"><span className="material-symbols-outlined text-base align-middle">error</span> Location Permit Risk</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-10">
        <div className="text-xl font-bold mb-3">Financial Overview</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <div className="font-semibold mb-2">Expenses Over Time</div>
            <svg width="100%" height="120" viewBox="0 0 320 120" fill="none">
              <rect x="10" y="80" width="30" height="30" fill="#38bdf8" />
              <rect x="50" y="60" width="30" height="50" fill="#22d3ee" />
              <rect x="90" y="90" width="30" height="20" fill="#a3e635" />
              <rect x="130" y="70" width="30" height="40" fill="#facc15" />
              <rect x="170" y="100" width="30" height="10" fill="#f472b6" />
            </svg>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <div className="font-semibold mb-2">Category Breakdown</div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between"><span>Crew</span><span>480,000 SEK</span></div>
              <div className="flex justify-between"><span>Equipment</span><span>360,000 SEK</span></div>
              <div className="flex justify-between"><span>Location</span><span>120,000 SEK</span></div>
              <div className="flex justify-between"><span>Catering</span><span>180,000 SEK</span></div>
              <div className="flex justify-between"><span>Post-Production</span><span>60,000 SEK</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-400 text-xs mt-8">Overall Project Budget: <span className="font-bold text-white">3,000,000 SEK</span></div>
    </main>
  );
}
