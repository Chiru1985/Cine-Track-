import React, { useState } from 'react';

const tabs = [
  { key: 'editorial', label: 'Editorial' },
  { key: 'sound', label: 'Sound' },
  { key: 'vfx', label: 'VFX' },
  { key: 'color', label: 'Color Grading' },
  { key: 'deliverables', label: 'Deliverables' },
];

const progressData = {
  editorial: {
    progress: 75,
    status: 'On Schedule',
    statusColor: 'text-green-300',
    statusBg: 'bg-green-900',
    spent: 15000,
    remaining: 5000,
    vendor: 'Edit House Inc.',
    due: '2024-08-15',
    risks: 'None',
    riskColor: '',
    riskIcon: '',
  },
  sound: {
    progress: 50,
    status: 'Delayed',
    statusColor: 'text-yellow-300',
    statusBg: 'bg-yellow-900',
    spent: 8000,
    remaining: 2000,
    vendor: 'Audio Post Ltd.',
    due: '2024-08-22',
    risks: 'Potential delay due to vendor resource constraints',
    riskColor: 'text-red-400',
    riskIcon: '⚠️',
  },
  vfx: {
    progress: 25,
    status: 'On Schedule',
    statusColor: 'text-green-300',
    statusBg: 'bg-green-900',
    spent: 12000,
    remaining: 8000,
    vendor: 'Visual Effects Studio',
    due: '2024-09-05',
    risks: 'None',
    riskColor: '',
    riskIcon: '',
  },
};

const financials = [
  { vendor: 'Edit House Inc.', amount: 10000, status: 'Paid' },
  { vendor: 'Edit House Inc.', amount: 5000, status: 'Pending' },
  { vendor: 'Audio Post Ltd.', amount: 8000, status: 'Paid' },
];

const statusBadge = (status: string) => {
  if (status === 'Paid') return 'bg-green-900 text-green-300';
  if (status === 'Pending') return 'bg-yellow-900 text-yellow-300';
  return 'bg-slate-800 text-slate-300';
};

export default function PostProductionPage() {
  const [tab, setTab] = useState('editorial');
  const p = progressData[tab as keyof typeof progressData] || {};
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Post-Production Tracking</h1>
      <p className="text-slate-300 mb-8">Track progress, budget, and risks across all post-production stages.</p>
      <div className="flex gap-6 border-b border-slate-700 mb-8">
        {tabs.map(t => (
          <button
            key={t.key}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${tab===t.key ? 'border-blue-400 text-white' : 'border-transparent text-slate-400 hover:text-white'}`}
            onClick={()=>setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col gap-8">
          {tab==='editorial' && (
            <section className="rounded-xl border border-slate-700 bg-slate-800/60 p-6 mb-2">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-white">Editorial</div>
                <div className="text-slate-400 text-sm">Progress <span className="font-bold text-white">{p.progress}%</span></div>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-blue-400" style={{width:`${p.progress}%`}}></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Status</div>
                  <div className="font-semibold flex items-center gap-1 text-green-300"><span className="material-symbols-outlined text-base align-middle">check_circle</span> On Schedule</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Budget Spent</div>
                  <div className="font-bold text-white">$15,000</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Remaining</div>
                  <div className="font-bold text-white">$5,000</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Vendor</div>
                  <div className="font-bold text-white">Edit House Inc.</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Due Date</div>
                  <div className="font-bold text-white">2024-08-15</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Risks</div>
                  <div className="font-bold text-white">None</div>
                </div>
              </div>
            </section>
          )}
          {tab==='sound' && (
            <section className="rounded-xl border border-slate-700 bg-slate-800/60 p-6 mb-2">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-white">Sound</div>
                <div className="text-slate-400 text-sm">Progress <span className="font-bold text-white">50%</span></div>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-blue-400" style={{width:'50%'}}></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Status</div>
                  <div className="font-semibold flex items-center gap-1 text-yellow-300"><span className="material-symbols-outlined text-base align-middle">warning</span> Delayed</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Budget Spent</div>
                  <div className="font-bold text-white">$8,000</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Remaining</div>
                  <div className="font-bold text-white">$2,000</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Vendor</div>
                  <div className="font-bold text-white">Audio Post Ltd.</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Due Date</div>
                  <div className="font-bold text-white">2024-08-22</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Risks</div>
                  <div className="font-bold text-red-400">Potential delay due to vendor resource constraints</div>
                </div>
              </div>
            </section>
          )}
          {tab==='vfx' && (
            <section className="rounded-xl border border-slate-700 bg-slate-800/60 p-6 mb-2">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-white">VFX</div>
                <div className="text-slate-400 text-sm">Progress <span className="font-bold text-white">25%</span></div>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-blue-400" style={{width:'25%'}}></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Status</div>
                  <div className="font-semibold flex items-center gap-1 text-green-300"><span className="material-symbols-outlined text-base align-middle">check_circle</span> On Schedule</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Budget Spent</div>
                  <div className="font-bold text-white">$12,000</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Remaining</div>
                  <div className="font-bold text-white">$8,000</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Vendor</div>
                  <div className="font-bold text-white">Visual Effects Studio</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Due Date</div>
                  <div className="font-bold text-white">2024-09-05</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Risks</div>
                  <div className="font-bold text-white">None</div>
                </div>
              </div>
            </section>
          )}
        </div>
        <div className="flex flex-col gap-8">
          <section className="rounded-xl border border-slate-700 bg-slate-800/60 p-6">
            <div className="font-bold text-white mb-4">Financial Oversight</div>
            <table className="w-full text-sm mb-4">
              <thead>
                <tr className="text-slate-400">
                  <th className="text-left py-2">Vendor</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {financials.map((f, i) => (
                  <tr key={f.vendor + f.amount} className="border-t border-slate-700">
                    <td className="py-2">{f.vendor}</td>
                    <td className="py-2">${f.amount.toLocaleString()}</td>
                    <td className="py-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${statusBadge(f.status)}`}>{f.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className="rounded-xl border border-slate-700 bg-slate-800/60 p-6 flex flex-col gap-4">
            <div className="font-bold text-white mb-2">Actions</div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">Approve New Expenditure</button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 py-2 rounded">Access Delivery Checklist</button>
          </section>
        </div>
      </div>
    </main>
  );
}
