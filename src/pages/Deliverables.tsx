import React, { useState } from 'react';

const deliverables = [
  { label: 'Final Cut', status: 'Approved' },
  { label: 'Master Audio', status: 'Approved' },
  { label: 'VFX Renders', status: 'Approved' },
  { label: 'Legal Documents', status: 'Received' },
  { label: 'Marketing Assets', status: 'Approved' },
  { label: 'Raw Footage', status: 'Received' },
  { label: 'Distribution Agreements', status: 'Pending' },
];

const statusColor = (status: string) => {
  if (status === 'Approved') return 'bg-green-900/60 text-green-400';
  if (status === 'Received') return 'bg-yellow-900/60 text-yellow-300';
  if (status === 'Pending') return 'bg-red-900/60 text-red-400';
  return 'bg-slate-700 text-slate-300';
};

export default function DeliverablesPage() {
  const [archivingStatus, setArchivingStatus] = useState('In Progress');
  const [archiveLocation, setArchiveLocation] = useState('AWS Glacier Deep Archive');
  const [metadata, setMetadata] = useState('');

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Final Deliverables & Archiving</h1>
      <p className="text-slate-300 mb-8">Ensure all contractual obligations are met and production data is securely stored for the long term.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Deliverables Checklist */}
        <section className="rounded-lg border border-slate-700 bg-slate-800/60 p-6 flex flex-col gap-4">
          <div className="font-bold text-lg mb-2">Deliverables Checklist</div>
          <ul className="flex flex-col gap-3">
            {deliverables.map((d) => (
              <li key={d.label} className="flex items-center gap-3">
                <input type="checkbox" checked={d.status === 'Approved' || d.status === 'Received'} readOnly className="accent-blue-500 w-5 h-5" />
                <span className="font-semibold text-white flex-1">{d.label}</span>
                <span className={`px-3 py-1 rounded font-semibold text-xs ${statusColor(d.status)}`}>{d.status}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Archiving Details */}
        <section className="rounded-lg border border-slate-700 bg-slate-800/60 p-6 flex flex-col gap-4">
          <div className="font-bold text-lg mb-2">Archiving Details</div>
          <div>
            <label className="block text-slate-300 mb-1">Archiving Status</label>
            <select className="w-full rounded border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200" value={archivingStatus} onChange={e => setArchivingStatus(e.target.value)}>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-300 mb-1">Archive Location</label>
            <input className="w-full rounded border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200" value={archiveLocation} onChange={e => setArchiveLocation(e.target.value)} />
          </div>
          <div>
            <label className="block text-slate-300 mb-1">Metadata</label>
            <textarea className="w-full rounded border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200" rows={4} value={metadata} onChange={e => setMetadata(e.target.value)} />
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded self-end">Initiate Archiving</button>
        </section>
      </div>
    </main>
  );
}
