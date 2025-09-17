import React from 'react';

export default function RemunerationTable() {
  const data = [
    {name:'Anna Svensson', role:'Director', salary:120000, status:'Paid'},
    {name:'Erik Johansson', role:'Producer', salary:100000, status:'Paid'},
    {name:'Maria Lind', role:'Lead Actress', salary:90000, status:'Pending'},
    {name:'Johan Karlsson', role:'Cinematographer', salary:80000, status:'Paid'},
    {name:'Sara Berg', role:'Editor', salary:70000, status:'Pending'},
    {name:'Oskar Nilsson', role:'Sound Engineer', salary:60000, status:'Paid'},
    {name:'Lina Persson', role:'Makeup Artist', salary:40000, status:'Paid'},
    {name:'Mats Olsson', role:'Lighting', salary:35000, status:'Pending'},
  ];
  const statusColor = (status:string) => {
    if(status==='Paid') return 'bg-green-900/60 text-green-400';
    if(status==='Pending') return 'bg-yellow-900/60 text-yellow-300';
    return 'bg-slate-700 text-slate-300';
  };
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700 bg-slate-800/60">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-slate-400">
            <th className="text-left py-2 px-3">Name</th>
            <th className="text-left py-2 px-3">Role</th>
            <th className="text-left py-2 px-3">Salary</th>
            <th className="text-left py-2 px-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,i)=>(
            <tr key={i} className="border-t border-slate-700">
              <td className="py-2 px-3">{row.name}</td>
              <td className="py-2 px-3">{row.role}</td>
              <td className="py-2 px-3">{row.salary.toLocaleString('sv-SE')} SEK</td>
              <td className="py-2 px-3"><span className={`rounded px-2 py-0.5 text-xs ${statusColor(row.status)}`}>{row.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
