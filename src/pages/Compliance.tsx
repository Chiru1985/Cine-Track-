import React, { useState } from 'react';

const tabs = [
  { key: 'all', label: 'All Documents' },
  { key: 'permits', label: 'Permits' },
  { key: 'contracts', label: 'Contracts' },
  { key: 'insurance', label: 'Insurance' },
  { key: 'ndas', label: 'NDAs' },
  { key: 'regulations', label: 'Regulations' },
];

const documents = [
  {
    name: 'Location Permit - Downtown',
    type: 'Permit',
    tags: [
      { label: 'Production', color: 'bg-blue-900 text-blue-200' },
      { label: 'Scene 5', color: 'bg-purple-900 text-purple-200' },
    ],
    status: { label: 'Approved', color: 'text-green-300', dot: 'bg-green-300' },
    expiry: '2024-12-31',
  },
  {
    name: 'Cast Agreement – Lead Actor',
    type: 'Contract',
    tags: [
      { label: 'Talent', color: 'bg-pink-900 text-pink-200' },
    ],
    status: { label: 'Signed', color: 'text-cyan-300', dot: 'bg-cyan-300' },
    expiry: '2025-06-15',
  },
  {
    name: 'Production Insurance Policy',
    type: 'Insurance',
    tags: [
      { label: 'Finance', color: 'bg-yellow-900 text-yellow-200' },
    ],
    status: { label: 'Active', color: 'text-yellow-300', dot: 'bg-yellow-300' },
    expiry: '2025-01-31',
  },
  {
    name: 'Confidentiality Agreement – Crew',
    type: 'NDA',
    tags: [
      { label: 'All', color: 'bg-slate-700 text-slate-200' },
    ],
    status: { label: 'Signed', color: 'text-cyan-300', dot: 'bg-cyan-300' },
    expiry: '2024-11-30',
  },
  {
    name: 'Health & Safety Guidelines',
    type: 'Regulation',
    tags: [
      { label: 'Safety', color: 'bg-red-900 text-red-200' },
    ],
    status: { label: 'Active', color: 'text-yellow-300', dot: 'bg-yellow-300' },
    expiry: '2024-12-31',
  },
];

export default function CompliancePage() {
  const [tab, setTab] = useState('all');
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-extrabold mb-1">Compliance & Legal Documents</h1>
          <p className="text-slate-300">Manage all legal and compliance-related documents for your production.</p>
        </div>
        <button className="border border-cyan-400 text-cyan-200 px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-900/20 transition"><span className="material-symbols-outlined">upload</span> Upload Document</button>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <input className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400" placeholder="Search documents by name, type, or tag..." />
        <button className="flex items-center gap-1 text-slate-400 hover:text-white font-semibold"><span className="material-symbols-outlined">filter_alt</span> Filter</button>
        <button className="flex items-center gap-1 text-slate-400 hover:text-white font-semibold"><span className="material-symbols-outlined">notifications</span> Reminders</button>
      </div>
      <div className="flex gap-6 border-b border-slate-700 mb-2">
        {tabs.map(t => (
          <button
            key={t.key}
            className={`pb-2 px-2 font-semibold border-b-2 transition-colors ${tab===t.key ? 'border-cyan-400 text-white' : 'border-transparent text-slate-400 hover:text-white'}`}
            onClick={()=>setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-0 mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="text-left px-6 py-3">Document Name</th>
              <th className="text-left px-6 py-3">Type</th>
              <th className="text-left px-6 py-3">Tags</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Expiry Date</th>
              <th className="px-3"></th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, i) => (
              <tr key={doc.name} className="border-t border-slate-700 hover:bg-slate-800/80 transition">
                <td className="px-6 py-3 text-white font-semibold">{doc.name}</td>
                <td className="px-6 py-3 text-slate-300">{doc.type}</td>
                <td className="px-6 py-3">
                  <div className="flex gap-2 flex-wrap">
                    {doc.tags.map((tag, j) => (
                      <span key={tag.label} className={`px-2 py-0.5 rounded text-xs font-semibold ${tag.color}`}>{tag.label}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-3">
                  <span className="inline-flex items-center gap-1 font-semibold"><span className={`w-2 h-2 rounded-full inline-block ${doc.status.dot}`}></span> <span className={doc.status.color}>{doc.status.label}</span></span>
                </td>
                <td className="px-6 py-3 text-slate-300">{doc.expiry}</td>
                <td className="px-3 text-right"><button className="text-slate-400 hover:text-white"><span className="material-symbols-outlined">more_horiz</span></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
