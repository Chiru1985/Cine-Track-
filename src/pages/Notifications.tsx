import React from 'react';

const notifications = [
  {
    type: 'urgent',
    icon: 'error',
    iconColor: 'text-red-400 bg-red-900',
  title: 'Budget Alert: Catering costs have exceeded the allocation by 55,000 SEK.',
    project: 'Crimson Peak',
    time: '2 hours ago',
    desc: '',
  },
  {
    type: 'approval',
    icon: 'receipt_long',
    iconColor: 'text-yellow-300 bg-yellow-900',
  title: 'Expense Report from John Doe for "Location Scouting - Utah" is awaiting your approval.',
    project: 'Desert Bloom',
    time: '4 hours ago',
    desc: '',
  },
  {
    type: 'approval',
    icon: 'receipt_long',
    iconColor: 'text-yellow-300 bg-yellow-900',
  title: 'Purchase Order #PO-2024-071 for "Camera Equipment Rental" needs approval.',
    project: 'Crimson Peak',
    time: '1 day ago',
    desc: '',
  },
  {
    type: 'update',
    icon: 'event',
    iconColor: 'text-blue-300 bg-blue-900',
  title: 'Schedule Change: Filming location for Scene 24 has been updated.',
    project: 'Crimson Peak',
    time: '1 day ago',
    desc: '',
  },
  {
    type: 'update',
    icon: 'person_add',
    iconColor: 'text-blue-300 bg-blue-900',
  title: 'User Access Request: Emily Fields (Gaffer) has requested access to the project files.',
    project: 'Desert Bloom',
    time: '1 day ago',
    desc: '',
  },
  {
    type: 'update',
    icon: 'cloud_done',
    iconColor: 'text-slate-300 bg-slate-700',
  title: 'System Alert: Weekly data backup completed successfully.',
    project: 'System-wide',
    time: '1 day ago',
    desc: '',
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="text-lg font-bold text-white mb-3">{title}</div>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

export default function NotificationsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-extrabold mb-1">Notifications</h1>
          <p className="text-slate-300">Manage all your production alerts and requests.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 border border-slate-700 text-slate-200 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-700 transition"><span className="material-symbols-outlined">filter_alt</span> Filter</button>
          <button className="bg-slate-800 border border-slate-700 text-slate-200 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-700 transition"><span className="material-symbols-outlined">settings</span> Preferences</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"><span className="material-symbols-outlined">done_all</span> Dismiss All</button>
        </div>
      </div>
      <Section title="Urgent">
        {notifications.filter(n => n.type === 'urgent').map((n, i) => (
          <div key={i} className="flex items-start gap-4 rounded-lg bg-slate-800/80 p-5 border border-slate-700">
            <span className={`material-symbols-outlined text-3xl rounded-full p-2 ${n.iconColor}`}>{n.icon}</span>
            <div>
              <div className="font-semibold text-white mb-1">{n.title}</div>
              <div className="text-slate-400 text-xs">Project: "{n.project}" · {n.time}</div>
            </div>
          </div>
        ))}
      </Section>
      <Section title="Approval Requests">
        {notifications.filter(n => n.type === 'approval').map((n, i) => (
          <div key={i} className="flex items-start gap-4 rounded-lg bg-slate-800/80 p-5 border border-slate-700">
            <span className={`material-symbols-outlined text-3xl rounded-full p-2 ${n.iconColor}`}>{n.icon}</span>
            <div>
              <div className="font-semibold text-white mb-1">{n.title}</div>
              <div className="text-slate-400 text-xs">Project: "{n.project}" · {n.time}</div>
            </div>
          </div>
        ))}
      </Section>
      <Section title="General Updates">
        {notifications.filter(n => n.type === 'update').map((n, i) => (
          <div key={i} className="flex items-start gap-4 rounded-lg bg-slate-800/80 p-5 border border-slate-700">
            <span className={`material-symbols-outlined text-3xl rounded-full p-2 ${n.iconColor}`}>{n.icon}</span>
            <div>
              <div className="font-semibold text-white mb-1">{n.title}</div>
              <div className="text-slate-400 text-xs">Project: "{n.project}" · {n.time}</div>
            </div>
          </div>
        ))}
      </Section>
    </main>
  );
}
