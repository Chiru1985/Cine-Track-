import React, { useState } from 'react';

export default function VendorsPage() {
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  type Vendor = {
    name: string;
    contract: string;
    contractStart?: string;
    contractEnd?: string;
    contractFile: string;
    schedule: string;
    nextDue: string;
    status: string;
    notes: string;
  };
  const [vendors, setVendors] = useState<Vendor[]>([
    {
      name: 'Lighting Solutions Inc.',
      contract: 'Sep 1, 2025 - Feb 15, 2026',
      contractStart: '',
      contractEnd: '',
      contractFile: 'View Contract.pdf',
      schedule: '3 Milestones',
      nextDue: 'Oct 1, 2025',
      status: 'Paid',
      notes: 'Excellent - On time and within budget',
    },
    {
      name: 'Sound Masters LLC',
      contract: 'Oct 1, 2025 - Mar 1, 2026',
      contractStart: '',
      contractEnd: '',
      contractFile: 'View Contract.pdf',
      schedule: '4 Milestones',
      nextDue: 'Nov 1, 2025',
      status: 'Pending',
      notes: 'Good - Minor delays, quality as expected',
    },
    {
      name: 'Visual Effects Studio',
      contract: 'Sep 15, 2025 - Feb 28, 2026',
      contractStart: '',
      contractEnd: '',
      contractFile: 'View Contract.pdf',
      schedule: '2 Milestones',
      nextDue: 'Dec 1, 2025',
      status: 'Paid',
      notes: 'Outstanding - Exceeded expectations',
    },
    {
      name: 'On Set Catering',
      contract: 'Sep 10, 2025 - Jan 31, 2026',
      contractStart: '',
      contractEnd: '',
      contractFile: 'View Contract.pdf',
      schedule: 'Weekly Payments',
      nextDue: 'Sep 24, 2025',
      status: 'Overdue',
      notes: 'Satisfactory - Met basic requirements',
    },
    {
      name: 'Location Security Co.',
      contract: 'Sep 5, 2025 - Feb 15, 2026',
      contractStart: '',
      contractEnd: '',
      contractFile: 'View Contract.pdf',
      schedule: '1 Milestone (Upfront)',
      nextDue: 'Paid on Sep 5, 2025',
      status: 'Paid',
      notes: 'Average - Some issues with scheduling',
    },
  ]);
  const [form, setForm] = useState<Vendor>({
    name: '', contract: '', contractStart: '', contractEnd: '', contractFile: '', schedule: '', nextDue: '', status: 'Pending', notes: ''
  });
  const statusColor = (status:string) => {
    if(status==='Paid') return 'bg-green-900/60 text-green-400';
    if(status==='Pending') return 'bg-yellow-900/60 text-yellow-300';
    if(status==='Overdue') return 'bg-red-900/60 text-red-400';
    return 'bg-slate-700 text-slate-300';
  };
  const filtered = vendors.filter(v =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.notes.toLowerCase().includes(search.toLowerCase()) ||
    v.contract.toLowerCase().includes(search.toLowerCase())
  );
  function handleFormChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }
  function handleAddVendor(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.contract) return;
    setVendors(vs => [
      ...vs,
      { ...form }
    ]);
    setForm({ name: '', contract: '', contractFile: '', schedule: '', nextDue: '', status: 'Pending', notes: '' });
    setShowAdd(false);
  }
  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Vendor Contracts & Payments</h1>
      <div className="flex items-center gap-4 mb-6">
        <input className="flex-1 rounded bg-slate-900 border border-slate-700 px-4 py-2 text-slate-200" placeholder="Search vendors by name, service, etc..." value={search} onChange={e=>setSearch(e.target.value)} />
        <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold px-4 py-2 rounded flex items-center gap-2" onClick={()=>setShowAdd(true)}><span className="material-symbols-outlined">add</span> Add Vendor</button>
      </div>
      <div className="rounded-lg border border-slate-700 bg-slate-800/60 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="text-left py-2 px-4">VENDOR</th>
              <th className="text-left py-2 px-4">CONTRACT DETAILS</th>
              <th className="text-left py-2 px-4">PAYMENT SCHEDULE</th>
              <th className="text-left py-2 px-4">PAYMENT STATUS</th>
              <th className="text-left py-2 px-4">PERFORMANCE NOTES</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((v, i) => (
              <tr key={v.name+v.contract} className="border-t border-slate-700">
                <td className="py-2 px-4 font-semibold">{v.name}</td>
                <td className="py-2 px-4">
                  {v.contract}<br />
                  <a href="#" className="text-blue-400 hover:underline text-xs">{v.contractFile}</a>
                </td>
                <td className="py-2 px-4">
                  {v.schedule}<br />
                  <span className="text-xs text-slate-400">Next due: {v.nextDue}</span>
                </td>
                <td className="py-2 px-4">
                  <span className={`rounded px-2 py-0.5 text-xs ${statusColor(v.status)}`}>{v.status}</span>
                </td>
                <td className="py-2 px-4">{v.notes}</td>
                <td className="py-2 px-4 text-right"><span className="material-symbols-outlined text-slate-400 cursor-pointer">more_horiz</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-slate-400 text-xs mt-4">Showing 1 to {filtered.length} of {vendors.length} results</div>
      <div className="flex gap-2 mt-2">
        <button className="text-slate-400 px-2">&lt;</button>
        <button className="bg-slate-700 text-white px-3 py-1 rounded">1</button>
        <button className="text-slate-400 px-2">2</button>
        <button className="text-slate-400 px-2">3</button>
        <span className="text-slate-400 px-2">...</span>
        <button className="text-slate-400 px-2">8</button>
        <button className="text-slate-400 px-2">&gt;</button>
      </div>
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-lg p-8 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Add New Vendor</h3>
            <form className="flex flex-col gap-4" onSubmit={handleAddVendor}>
              <input className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="name" value={form.name} onChange={handleFormChange} placeholder="Vendor Name" />
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs text-slate-400 mb-1">Contract Start</label>
                  <input type="date" className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200 w-full" name="contractStart" value={form.contractStart||''} onChange={handleFormChange} />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-slate-400 mb-1">Contract End</label>
                  <input type="date" className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200 w-full" name="contractEnd" value={form.contractEnd||''} onChange={handleFormChange} />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Contract File</label>
                <input type="file" className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200 w-full" name="contractFileUpload" onChange={e => setForm(f => ({ ...f, contractFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' }))} />
                {form.contractFile && <div className="text-xs text-slate-300 mt-1">Selected: {form.contractFile}</div>}
              </div>
              <input className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="schedule" value={form.schedule} onChange={handleFormChange} placeholder="Payment Schedule" />
              <div>
                <label className="block text-xs text-slate-400 mb-1">Next Due</label>
                <input type="date" className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200 w-full" name="nextDue" value={form.nextDue||''} onChange={handleFormChange} />
              </div>
              <select className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="status" value={form.status} onChange={handleFormChange}>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
              <textarea className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="notes" value={form.notes} onChange={handleFormChange} placeholder="Performance Notes"></textarea>
              <div className="flex gap-2 justify-end">
                <button type="button" className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded" onClick={()=>setShowAdd(false)}>Cancel</button>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
