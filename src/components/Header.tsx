import React from 'react';

export default function Header({ active, onLogo, onNav, onLogout }: { active: string; onLogo: () => void; onNav: (k: string) => void; onLogout: () => void }) {
  const nav = [
    { key: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { key: 'budget', icon: 'bar_chart', label: 'Budget' },
    { key: 'remuneration', icon: 'payments', label: 'Remuneration' },
    { key: 'story', icon: 'menu_book', label: 'Story & Script' },
    { key: 'schedule', icon: 'event', label: 'Schedule' },
    { key: 'reports', icon: 'assessment', label: 'Reports' },
    { key: 'people', icon: 'groups', label: 'Crew' },
  ];
  return (
    <header className="flex items-center gap-8 px-8 py-4 bg-[#181f2a] border-b border-slate-800 justify-between">
      <div className="flex items-center gap-8">
        <button onClick={onLogo} className="flex items-center gap-2 text-xl font-bold text-white"><span className="text-2xl">✦</span> CineTrack</button>
        <nav className="flex gap-2">
          {nav.map(n => (
            <button key={n.key} onClick={() => onNav(n.key)} className={`flex items-center gap-2 px-4 py-2 rounded ${active === n.key ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}><span className="material-symbols-outlined text-[20px]">{n.icon}</span> {n.label}</button>
          ))}
        </nav>
      </div>
      <button onClick={onLogout} className="ml-auto bg-slate-700 hover:bg-slate-800 text-white font-semibold px-4 py-2 rounded flex items-center gap-2">
        <span className="material-symbols-outlined">logout</span> Logout
      </button>
    </header>
  );
}
