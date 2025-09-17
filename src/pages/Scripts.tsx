import React from 'react';

const versions = [
  {
    version: 'Version 1.4',
    date: '2024-08-10',
    summary: 'Removed 1 scene, minor character adjustments',
    scenes: 121,
    scenesChange: '-1',
    pages: 118,
    pagesChange: '-2',
    budget: 'Budget v1.3',
    status: 'Draft',
  },
  {
    version: 'Version 1.3',
    date: '2024-08-05',
    summary: 'Major dialogue rewrites in 5 scenes',
    scenes: 122,
    scenesChange: '+0',
    pages: 120,
    pagesChange: '+0',
    budget: 'Budget v1.2',
    status: 'Draft',
  },
  {
    version: 'Version 1.2',
    date: '2024-08-01',
    summary: "Character 'Ethan' added, location change",
    scenes: 122,
    scenesChange: '+0',
    pages: 120,
    pagesChange: '+5',
    budget: 'Budget v1.2',
    status: 'Pending Approval',
  },
  {
    version: 'Version 1.1',
    date: '2024-07-25',
    summary: 'Added 2 new scenes, minor dialogue changes',
    scenes: 122,
    scenesChange: '+2',
    pages: 115,
    pagesChange: '+5',
    budget: 'Budget v1.1',
    status: 'Approved',
  },
  {
    version: 'Version 1.0',
    date: '2024-07-20',
    summary: 'Initial Script',
    scenes: 120,
    scenesChange: '',
    pages: 110,
    pagesChange: '',
    budget: 'Budget v1.0',
    status: 'Locked',
  },
];

const statusStyles: Record<string, string> = {
  'Draft': 'bg-slate-800 text-slate-300',
  'Pending Approval': 'bg-yellow-900 text-yellow-300',
  'Approved': 'bg-green-900 text-green-300',
  'Locked': 'bg-green-900 text-green-300',
};

export default function ScriptsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-extrabold">Script Version Control</h1>
        <button className="bg-slate-700 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded flex items-center gap-2 text-sm">
          <span className="material-symbols-outlined">add</span> New Version
        </button>
      </div>
      <div className="text-slate-300 mb-6">Manage and compare different versions of the script, focusing on logistical and financial impacts.</div>
      <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-0 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-400 text-left">
              <th className="px-6 py-3 font-semibold">Version</th>
              <th className="px-6 py-3 font-semibold">Updated On</th>
              <th className="px-6 py-3 font-semibold">Changes Summary</th>
              <th className="px-6 py-3 font-semibold">Scene Count</th>
              <th className="px-6 py-3 font-semibold">Page Count</th>
              <th className="px-6 py-3 font-semibold">Budget Link</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {versions.map((v, i) => (
              <tr key={v.version} className="border-t border-slate-700 hover:bg-slate-800/80">
                <td className="px-6 py-3 font-semibold text-white">{v.version}</td>
                <td className="px-6 py-3">{v.date}</td>
                <td className="px-6 py-3">{v.summary}</td>
                <td className="px-6 py-3">
                  {v.scenes} {v.scenesChange && (
                    <span className={v.scenesChange.startsWith('+') ? 'text-green-400' : 'text-red-400'}>({v.scenesChange})</span>
                  )}
                </td>
                <td className="px-6 py-3">
                  {v.pages} {v.pagesChange && (
                    <span className={v.pagesChange.startsWith('+') ? 'text-green-400' : 'text-red-400'}>({v.pagesChange})</span>
                  )}
                </td>
                <td className="px-6 py-3">{v.budget}</td>
                <td className="px-6 py-3">
                  <span className={`px-3 py-1 rounded font-semibold text-xs ${
                    v.status === 'Draft' ? 'bg-slate-800 text-slate-300' :
                    v.status === 'Pending Approval' ? 'bg-yellow-900 text-yellow-300' :
                    v.status === 'Approved' ? 'bg-green-900 text-green-300' :
                    v.status === 'Locked' ? 'bg-green-900 text-green-300' :
                    ''
                  }`}>
                    {v.status}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <button className="text-blue-400 font-semibold hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
