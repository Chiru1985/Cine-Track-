import React, { useState } from 'react';
import ProducerDashboard from './pages/Dashboard';
import VendorsPage from './pages/Vendors';
import RemunerationTable from './components/RemunerationTable';
import RemunerationSummary from './components/RemunerationSummary';
import ProducerRemuneration from './pages/Remuneration';
import ExpensesFilters from './components/ExpensesFilters';
import ExpensesTable from './components/ExpensesTable';
import ExpensesCategoryBreakdown from './components/ExpensesCategoryBreakdown';
import LocationsPage from './pages/Locations';
import ScriptsPage from './pages/Scripts';
import PostProductionPage from './pages/PostProduction';
import CompliancePage from './pages/Compliance';


// --- Utility Components ---
function KPI({title, value, valueClass}:{title:string, value:any, valueClass?:string}){
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col items-start">
      <div className="text-xs text-slate-400 mb-1">{title}</div>
      <div className={`text-lg font-bold ${valueClass||''}`}>{value}</div>
    </div>
  );
}

function ProductionCalendarPage() {
  const events = [
    { icon: 'description', color: 'bg-purple-900 text-purple-300', label: 'Script Lock Deadline', date: 'July 15, 2024' },
    { icon: 'event', color: 'bg-green-900 text-green-300', label: 'Budget Approval Meeting', date: 'July 20, 2024' },
    { icon: 'location_on', color: 'bg-yellow-900 text-yellow-300', label: 'Location Booking', date: 'July 25, 2024' },
    { icon: 'calendar_month', color: 'bg-blue-900 text-blue-300', label: 'Shooting Day 1', date: 'August 1, 2024' },
    { icon: 'camera_alt', color: 'bg-orange-900 text-orange-300', label: 'Equipment Rental Return', date: 'August 10, 2024' },
    { icon: 'payments', color: 'bg-green-900 text-green-300', label: 'Cast/Crew Payment Due', date: 'August 15, 2024' },
    { icon: 'movie', color: 'bg-red-900 text-red-300', label: 'Rough Cut Review', date: 'August 20, 2024' },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full h-full">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-extrabold">Production Calendar</h1>
          <div className="flex gap-2">
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"><span className="material-symbols-outlined">filter_alt</span> Filter</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"><span className="material-symbols-outlined">add</span> Add Event</button>
          </div>
        </div>
        <div className="text-slate-300 mb-6">View and manage all production events in one place.</div>
        <div className="flex gap-6 mb-6">
          <button className="text-blue-400 font-semibold pb-1 px-2 border-b-2 border-blue-400">Month</button>
          <button className="text-slate-400 font-semibold pb-1 px-2">Week</button>
          <button className="text-slate-400 font-semibold pb-1 px-2">Year</button>
          <button className="text-slate-400 font-semibold pb-1 px-2">Timeline</button>
        </div>
        {/* Calendar grid mockup */}
        <div className="rounded-xl bg-slate-900 p-6 mb-6 max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button className="text-slate-400 hover:text-white"><span className="material-symbols-outlined">chevron_left</span></button>
            <div className="text-lg font-bold text-white">July 2024</div>
            <button className="text-slate-400 hover:text-white"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
          <div className="grid grid-cols-7 text-center text-slate-400 mb-2">
            <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
          </div>
          <div className="grid grid-cols-7 text-center gap-y-2">
            {/* Calendar days (static for mockup) */}
            {Array.from({length:31},(_,i)=>(
              <div key={i} className={`py-2 rounded-lg ${i===14 ? 'bg-slate-800 text-white font-bold' : 'text-slate-300'}`}>{i+1}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-80 flex-shrink-0">
        <div className="font-bold text-lg mb-4 text-white">Upcoming Events</div>
        <div className="flex flex-col gap-3">
          {events.map((e,i)=>(
            <div key={e.label} className="flex items-center gap-3 rounded-lg bg-slate-800/80 p-4">
              <span className={`material-symbols-outlined text-2xl rounded p-2 ${e.color}`}>{e.icon}</span>
              <div>
                <div className="font-semibold text-white">{e.label}</div>
                <div className="text-slate-400 text-xs">{e.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// --- Crew Tabs ---
function CrewTabs() {
  const departments = [
    { key: 'direction', label: 'Direction', crew: [
      { name: 'Anna Svensson', role: 'Director', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { name: 'Erik Johansson', role: 'Assistant Director', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
    ]},
    { key: 'camera', label: 'Camera', crew: [
      { name: 'Johan Karlsson', role: 'Cinematographer', img: 'https://randomuser.me/api/portraits/men/46.jpg' },
      { name: 'Sara Berg', role: 'Camera Assistant', img: 'https://randomuser.me/api/portraits/women/47.jpg' },
    ]},
    { key: 'lighting', label: 'Lighting', crew: [
      { name: 'Mats Olsson', role: 'Gaffer', img: 'https://randomuser.me/api/portraits/men/48.jpg' },
      { name: 'Lina Persson', role: 'Best Boy', img: 'https://randomuser.me/api/portraits/women/49.jpg' },
    ]},
    { key: 'sound', label: 'Sound', crew: [
      { name: 'Oskar Nilsson', role: 'Sound Engineer', img: 'https://randomuser.me/api/portraits/men/50.jpg' },
    ]},
    { key: 'cast', label: 'Cast', crew: [
      { name: 'Maria Lind', role: 'Lead Actress', img: 'https://randomuser.me/api/portraits/women/51.jpg' },
      { name: 'Peter Andersson', role: 'Lead Actor', img: 'https://randomuser.me/api/portraits/men/52.jpg' },
      { name: 'Elin Olsson', role: 'Supporting Actress', img: 'https://randomuser.me/api/portraits/women/53.jpg' },
      { name: 'Jonas Berg', role: 'Supporting Actor', img: 'https://randomuser.me/api/portraits/men/54.jpg' },
    ]},
  ];
  const [tab, setTab] = useState(departments[0].key);
  const current = departments.find(d => d.key === tab);
  return (
    <div>
      <div className="flex gap-2 mb-6">
        {departments.map(d => (
          <button
            key={d.key}
            className={`px-4 py-2 rounded-t-lg font-semibold ${tab === d.key ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
            onClick={() => setTab(d.key)}
          >
            {d.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {current && current.crew.map(member => (
          <div key={member.name} className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col items-center">
            <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mb-3 object-cover border-2 border-blue-400" />
            <div className="font-bold text-lg text-white mb-1">{member.name}</div>
            <div className="text-slate-300 text-sm">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProducerPeople() {
  const [view, setView] = useState<'crew'|'callsheet'>('crew');
  const [showAdd, setShowAdd] = useState(false);
  const [showDetails, setShowDetails] = useState<null|{title:string,scene:string,date:string,notes:string,assigned:string[]}>();
  // Dynamic call sheets state
  const [callSheets, setCallSheets] = useState([
    {
      title: 'Call Sheet #12',
      scene: 'Scene 12',
      date: '2024-07-15',
      notes: 'Arrive at Studio A by 7:00 AM. Weather is clear.',
      assigned: ['Maria Lind', 'Peter Andersson', 'Anna Svensson', 'Johan Karlsson']
    },
    {
      title: 'Call Sheet #13',
      scene: 'Scene 25',
      date: '2024-07-20',
      notes: 'Outdoor set. Bring rain gear. Possible weather risk.',
      assigned: ['Elin Olsson', 'Jonas Berg', 'Erik Johansson', 'Sara Berg']
    }
  ]);
  // Example crew/cast list for assignment
  const people = [
    'Anna Svensson', 'Erik Johansson', 'Maria Lind', 'Johan Karlsson', 'Sara Berg', 'Oskar Nilsson', 'Lina Persson', 'Mats Olsson', 'Peter Andersson', 'Elin Olsson', 'Jonas Berg'
  ];
  // Add Call Sheet form state
  const [form, setForm] = useState({
    title: '',
    scene: '',
    date: '',
    notes: '',
    assigned: [] as string[],
  });
  function handleFormChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) {
    const target = e.target;
    const { name, value, type } = target;
    if (type === 'checkbox') {
      const checked = (target as HTMLInputElement).checked;
      setForm(f => ({
        ...f,
        assigned: checked ? [...f.assigned, value] : f.assigned.filter(v => v !== value)
      }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }
  function handleAddCallSheet(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.scene || !form.date) return;
    setCallSheets(cs => [
      ...cs,
      {
        title: form.title,
        scene: form.scene,
        date: form.date,
        notes: form.notes,
        assigned: form.assigned
      }
    ]);
    setForm({ title: '', scene: '', date: '', notes: '', assigned: [] });
    setShowAdd(false);
  }
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 flex gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-48 flex-shrink-0">
        <div className="flex flex-col gap-2">
          <button
            className={`w-full px-4 py-2 rounded font-semibold text-left ${view==='crew' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
            onClick={()=>setView('crew')}
          >
            Crew List
          </button>
          <button
            className={`w-full px-4 py-2 rounded font-semibold text-left ${view==='callsheet' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
            onClick={()=>setView('callsheet')}
          >
            Call Sheets
          </button>
        </div>
        {view==='callsheet' && (
          <button
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
            onClick={()=>setShowAdd(true)}
          >
            <span className="material-symbols-outlined">add</span> Add New Call Sheet
          </button>
        )}
      </aside>
      {/* Main Content */}
      <section className="flex-1">
        <h1 className="text-3xl font-extrabold mb-2">Crew</h1>
        <p className="text-slate-300 mb-8">View your crew by department and see their profiles.</p>
        {view==='crew' && <CrewTabs />}
        {view==='callsheet' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Call Sheets</h2>
            <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 mb-4">
              <div className="font-semibold mb-2">Upcoming Call Sheets</div>
              <ul className="divide-y divide-slate-700">
                {callSheets.map((cs, idx) => (
                  <li key={cs.title+cs.date} className="py-2 flex justify-between items-center">
                    <span>{cs.title} - {cs.scene} ({cs.date})</span>
                    <button className="text-blue-400 hover:underline" onClick={()=>setShowDetails(cs)}>View</button>
                  </li>
                ))}
              </ul>
            </div>
            {showAdd && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-slate-900 rounded-lg p-8 w-full max-w-md shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Add New Call Sheet</h3>
                  <form className="flex flex-col gap-4" onSubmit={handleAddCallSheet}>
                    <input className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="title" value={form.title} onChange={handleFormChange} placeholder="Title (e.g. Call Sheet #14)" />
                    <input className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="scene" value={form.scene} onChange={handleFormChange} placeholder="Scene(s)" />
                    <input type="date" className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="date" value={form.date} onChange={handleFormChange} />
                    <textarea className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="notes" value={form.notes} onChange={handleFormChange} placeholder="Notes"></textarea>
                    <div>
                      <div className="font-semibold mb-1">Assign to</div>
                      <div className="flex flex-wrap gap-2">
                        {people.map(p => (
                          <label key={p} className="flex items-center gap-1 text-slate-200 text-xs">
                            <input type="checkbox" name="assigned" value={p} checked={form.assigned.includes(p)} onChange={handleFormChange} /> {p}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button type="button" className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded" onClick={()=>setShowAdd(false)}>Cancel</button>
                      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">Add</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {showDetails && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-slate-900 rounded-lg p-8 w-full max-w-md shadow-lg relative">
                  <button className="absolute top-2 right-2 text-slate-400 hover:text-white" onClick={()=>setShowDetails(null)}><span className="material-symbols-outlined">close</span></button>
                  <h3 className="text-xl font-bold mb-2">{showDetails.title}</h3>
                  <div className="mb-2"><span className="font-semibold">Scene:</span> {showDetails.scene}</div>
                  <div className="mb-2"><span className="font-semibold">Date:</span> {showDetails.date}</div>
                  <div className="mb-2"><span className="font-semibold">Notes:</span> {showDetails.notes}</div>
                  <div className="mb-2"><span className="font-semibold">Assigned to:</span>
                    <ul className="list-disc pl-5 text-sm">
                      {showDetails.assigned.map(name => <li key={name}>{name}</li>)}
                    </ul>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold flex items-center gap-2" onClick={()=>alert('Email sent to all assigned members!')}><span className="material-symbols-outlined">mail</span> Email All</button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold flex items-center gap-2" onClick={()=>alert('Slack message sent to all assigned members!')}><span className="material-symbols-outlined">chat</span> Slack</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

// --- Budget Page ---
function BudgetTreeRow({ dept, cat, item, budget, spent, remaining, eac, variance }: { dept: string; cat: string; item: string; budget: number; spent: number; remaining: number; eac: number; variance: number }) {
  return (
    <tr className="border-t border-slate-700">
      <td className="py-2 px-4">{dept}</td>
      <td className="py-2 px-4">{cat}</td>
      <td className="py-2 px-4">{item}</td>
      <td className="py-2 px-4">{budget.toLocaleString()} SEK</td>
      <td className="py-2 px-4">{spent.toLocaleString()} SEK</td>
      <td className={`py-2 px-4 ${remaining < 0 ? 'text-red-400' : 'text-green-400'}`}>{remaining < 0 ? `(${Math.abs(remaining).toLocaleString()} SEK)` : `${remaining.toLocaleString()} SEK`}</td>
      <td className="py-2 px-4">{eac.toLocaleString()} SEK</td>
      <td className={`py-2 px-4 ${variance < 0 ? 'text-red-400' : ''}`}>{variance < 0 ? `(${Math.abs(variance).toLocaleString()} SEK)` : `${variance.toLocaleString()} SEK`}</td>
    </tr>
  );
}

function ScenarioCard({ title, status, color, amount }: { title: string; status: string; color: 'green' | 'blue' | 'yellow'; amount: number }) {
  const colorMap: any = {
    green: 'bg-green-900/60 text-green-400',
    blue: 'bg-blue-900/60 text-blue-400',
    yellow: 'bg-yellow-900/60 text-yellow-300',
  };
  const statusMap: any = {
    Locked: '● Locked',
    Active: '● Active',
    Draft: '● Draft',
  };
  return (
    <div className={`rounded-lg border border-slate-700 ${colorMap[color]} p-6 flex flex-col min-w-[220px]`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-lg">{title}</span>
        <span className="text-xs px-2 py-0.5 rounded bg-slate-800 border border-slate-700 ml-auto">{statusMap[status]}</span>
      </div>
      <div className="text-3xl font-bold mb-1">{amount.toLocaleString()} SEK</div>
      <div className="text-xs text-slate-400">Total Budget</div>
    </div>
  );
}

function ProducerBudget() {
  const [tab, setTab] = useState<'tree' | 'burn' | 'commit'>('tree');
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Budget Overview</h1>
      <p className="text-slate-400 text-sm mb-8">Project: 'The Midnight Bloom'</p>
      <div className="flex gap-2 mb-6">
        <button className={`px-4 py-2 rounded-t-lg font-semibold ${tab==='tree' ? 'bg-slate-800 text-blue-400' : 'bg-slate-700 text-slate-300'}`} onClick={()=>setTab('tree')}>Budget Tree</button>
        <button className={`px-4 py-2 rounded-t-lg font-semibold ${tab==='burn' ? 'bg-slate-800 text-blue-400' : 'bg-slate-700 text-slate-300'}`} onClick={()=>setTab('burn')}>Burn Rate</button>
        <button className={`px-4 py-2 rounded-t-lg font-semibold ${tab==='commit' ? 'bg-slate-800 text-blue-400' : 'bg-slate-700 text-slate-300'}`} onClick={()=>setTab('commit')}>Commitments vs Actuals</button>
      </div>
      {tab === 'tree' && (
        <div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400">
                  <th className="text-left py-2 px-4">DEPARTMENT</th>
                  <th className="text-left py-2 px-4">CATEGORY</th>
                  <th className="text-left py-2 px-4">LINE ITEM</th>
                  <th className="text-left py-2 px-4">BUDGET</th>
                  <th className="text-left py-2 px-4">SPENT</th>
                  <th className="text-left py-2 px-4">REMAINING</th>
                  <th className="text-left py-2 px-4">EAC</th>
                  <th className="text-left py-2 px-4">VARIANCE</th>
                </tr>
              </thead>
              <tbody>
                <BudgetTreeRow dept="Production" cat="Salaries" item="Director" budget={50000} spent={45000} remaining={5000} eac={50000} variance={0} />
                <BudgetTreeRow dept="Production" cat="Salaries" item="Assistant Director" budget={30000} spent={28000} remaining={2000} eac={30000} variance={0} />
                <BudgetTreeRow dept="Production" cat="Equipment" item="Camera Rental" budget={20000} spent={18000} remaining={2000} eac={20000} variance={0} />
                <BudgetTreeRow dept="Production" cat="Equipment" item="Lighting Rental" budget={15000} spent={16500} remaining={-1500} eac={16500} variance={-1500} />
                <BudgetTreeRow dept="Post-Production" cat="Editing" item="Editor" budget={25000} spent={22000} remaining={3000} eac={25000} variance={0} />
                <BudgetTreeRow dept="Contingency" cat="Unforeseen" item="General" budget={5000} spent={2000} remaining={3000} eac={5000} variance={0} />
                <tr className="border-t border-slate-700 font-bold">
                  <td colSpan={3} className="py-2 px-4 text-right">Total</td>
                  <td className="py-2 px-4">182,000 SEK</td>
                  <td className="py-2 px-4">158,000 SEK</td>
                  <td className="py-2 px-4 text-green-400">24,000 SEK</td>
                  <td className="py-2 px-4">183,500 SEK</td>
                  <td className="py-2 px-4 text-red-400">(1,500 SEK)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-lg mb-3">Budget Scenarios</div>
            <div className="flex gap-6 mb-4">
              <ScenarioCard title="Original Budget" status="Locked" color="green" amount={182000} />
              <ScenarioCard title="Revised Budget" status="Active" color="blue" amount={190000} />
              <ScenarioCard title="Contingency Plan" status="Draft" color="yellow" amount={200000} />
            </div>
            <div className="flex gap-3">
              <button className="rounded bg-slate-800 px-4 py-2 font-semibold text-white border border-slate-700">+ Create New Scenario</button>
              <button className="rounded bg-slate-800 px-4 py-2 font-semibold text-white border border-slate-700 flex items-center gap-2"><span className="material-symbols-outlined">compare_arrows</span> Compare Scenarios</button>
            </div>
          </div>
        </div>
      )}
      {tab === 'burn' && (
        <div className="mb-8">
          <div className="font-semibold text-lg mb-3">Burn Rate</div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-6 flex flex-col gap-4">
            <div className="mb-2 text-slate-300">Monthly Spend vs Budget</div>
            <div className="h-56 flex items-end">
              <svg width="100%" height="100%" viewBox="0 0 400 180" fill="none">
                <rect x="0" y="0" width="400" height="180" rx="8" fill="#151c27" />
                <rect x="30" y="100" width="30" height="60" fill="#38bdf8" />
                <rect x="70" y="80" width="30" height="80" fill="#38bdf8" />
                <rect x="110" y="90" width="30" height="70" fill="#38bdf8" />
                <rect x="150" y="60" width="30" height="100" fill="#38bdf8" />
                <rect x="190" y="120" width="30" height="40" fill="#38bdf8" />
                <rect x="230" y="110" width="30" height="50" fill="#38bdf8" />
                <rect x="270" y="130" width="30" height="30" fill="#38bdf8" />
                <rect x="310" y="90" width="30" height="70" fill="#38bdf8" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" />
                <text x="35" y="175" fill="#94a3b8" fontSize="14">Jan</text>
                <text x="75" y="175" fill="#94a3b8" fontSize="14">Feb</text>
                <text x="115" y="175" fill="#94a3b8" fontSize="14">Mar</text>
                <text x="155" y="175" fill="#94a3b8" fontSize="14">Apr</text>
                <text x="195" y="175" fill="#94a3b8" fontSize="14">May</text>
                <text x="235" y="175" fill="#94a3b8" fontSize="14">Jun</text>
                <text x="275" y="175" fill="#94a3b8" fontSize="14">Jul</text>
                <text x="315" y="175" fill="#94a3b8" fontSize="14">Aug</text>
              </svg>
            </div>
            <div className="mt-4 flex gap-8">
              <div>
                <div className="text-xs text-slate-400">Avg. Monthly Spend</div>
                <div className="text-lg font-bold">22,500 SEK</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Budget per Month</div>
                <div className="text-lg font-bold">25,000 SEK</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Variance</div>
                <div className="text-lg font-bold text-green-400">-2,500 SEK</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {tab === 'commit' && (
        <div className="mb-8">
          <div className="font-semibold text-lg mb-3">Commitments vs Actuals</div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-6 flex flex-col gap-4">
            <div className="mb-2 text-slate-300">Committed Budget vs Actual Spend</div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400">
                  <th className="text-left py-2 px-4">Category</th>
                  <th className="text-left py-2 px-4">Committed</th>
                  <th className="text-left py-2 px-4">Actual</th>
                  <th className="text-left py-2 px-4">Variance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">Crew</td>
                  <td className="py-2 px-4">80,000 SEK</td>
                  <td className="py-2 px-4">75,000 SEK</td>
                  <td className="py-2 px-4 text-green-400">-5,000 SEK</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Equipment</td>
                  <td className="py-2 px-4">60,000 SEK</td>
                  <td className="py-2 px-4">65,000 SEK</td>
                  <td className="py-2 px-4 text-red-400">+5,000 SEK</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Location</td>
                  <td className="py-2 px-4">30,000 SEK</td>
                  <td className="py-2 px-4">28,000 SEK</td>
                  <td className="py-2 px-4 text-green-400">-2,000 SEK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}

// --- Expenses Page ---
function ProducerExpenses() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Expenses</h1>
      <p className="text-slate-300 mb-8">Track and manage all production expenses.</p>
      <ExpensesFilters />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <ExpensesTable />
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <div className="font-semibold mb-2">Category Breakdown</div>
          <ExpensesCategoryBreakdown />
        </div>
      </div>
    </main>
  );
}

// --- Vendors Page ---


function ProducerStoryScript() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Story & Script</h1>
      <p className="text-slate-300 mb-8">Track script progress, breakdown, and notes.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <div className="font-semibold mb-2">Script Progress</div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-400">85%</span>
            </div>
            <div>
              <div className="text-xs text-slate-400">Pages Written</div>
              <div className="text-lg font-bold">102 / 120</div>
            </div>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-blue-500" style={{width:'85%'}}></div>
          </div>
          <div className="text-xs text-slate-400">Last updated: 2025-09-17</div>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <div className="font-semibold mb-2">Breakdown</div>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Scenes: <span className="font-bold">42</span></li>
            <li>Locations: <span className="font-bold">8</span></li>
            <li>Characters: <span className="font-bold">15</span></li>
            <li>Pages: <span className="font-bold">120</span></li>
          </ul>
        </div>
      </div>
      <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
        <div className="font-semibold mb-2">Notes</div>
        <ul className="text-sm list-disc pl-5 space-y-1">
          <li>Finalize Act 3 dialogue</li>
          <li>Review location for Scene 17</li>
          <li>Incorporate feedback from script consultant</li>
        </ul>
      </div>
    </main>
  );
}

function ProducerScheduleCalendar() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Schedule</h1>
      <p className="text-slate-300 mb-8">Production calendar, milestones, and timeline.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <div className="font-semibold mb-2">Upcoming Milestones</div>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Script Finalization – <span className="font-bold">Sep 20, 2025</span></li>
            <li>Location Scouting – <span className="font-bold">Sep 25, 2025</span></li>
            <li>Principal Photography – <span className="font-bold">Oct 5, 2025</span></li>
            <li>Post-Production Start – <span className="font-bold">Nov 15, 2025</span></li>
          </ul>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <div className="font-semibold mb-2">Timeline</div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-blue-500" style={{width:'60%'}}></div>
          </div>
          <div className="text-xs text-slate-400">60% complete</div>
        </div>
      </div>
      <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
        <div className="font-semibold mb-2">Calendar</div>
        <div className="grid grid-cols-7 gap-1 text-xs">
          <div className="font-bold text-slate-400">Mon</div>
          <div className="font-bold text-slate-400">Tue</div>
          <div className="font-bold text-slate-400">Wed</div>
          <div className="font-bold text-slate-400">Thu</div>
          <div className="font-bold text-slate-400">Fri</div>
          <div className="font-bold text-slate-400">Sat</div>
          <div className="font-bold text-slate-400">Sun</div>
          {/* Example week */}
          <div className="bg-blue-900/60 rounded p-2">15</div>
          <div className="bg-green-900/60 rounded p-2">16</div>
          <div className="bg-yellow-900/60 rounded p-2">17</div>
          <div className="bg-slate-700 rounded p-2">18</div>
          <div className="bg-slate-700 rounded p-2">19</div>
          <div className="bg-slate-700 rounded p-2">20</div>
          <div className="bg-slate-700 rounded p-2">21</div>
        </div>
      </div>
    </main>
  );
}

import DeliverablesPage from './pages/Deliverables';
import ActivityLogPage from './pages/ActivityLog';
import NotificationsPage from './pages/Notifications';

function ProducerReports({ tab }: { tab: 'reports'|'deliverables'|'activitylog'|'notifications' }) {
  if (tab === 'deliverables') {
    return <DeliverablesPage />;
  }
  if (tab === 'activitylog') {
    return <ActivityLogPage />;
  }
  if (tab === 'notifications') {
    return <NotificationsPage />;
  }
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Reports</h1>
      <p className="text-slate-300 mb-8">Summary, charts, and export options for your production.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col items-start">
          <div className="text-xs text-slate-400 mb-1">Total Expenses</div>
          <div className="text-lg font-bold">250,000 SEK</div>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col items-start">
          <div className="text-xs text-slate-400 mb-1">Total Budget</div>
          <div className="text-lg font-bold">3,000,000 SEK</div>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col items-start">
          <div className="text-xs text-slate-400 mb-1">Variance</div>
          <div className="text-lg font-bold text-green-400">+120,000 SEK</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <div className="font-semibold mb-2">Expense Breakdown</div>
          <svg width="100%" height="120" viewBox="0 0 320 120" fill="none">
            <rect x="10" y="80" width="30" height="30" fill="#38bdf8" />
            <rect x="50" y="60" width="30" height="50" fill="#22d3ee" />
            <rect x="90" y="90" width="30" height="20" fill="#a3e635" />
            <rect x="130" y="70" width="30" height="40" fill="#facc15" />
            <rect x="170" y="100" width="30" height="10" fill="#f472b6" />
          </svg>
          <div className="flex gap-4 mt-2 text-xs">
            <span className="flex items-center"><span className="w-3 h-3 bg-cyan-400 inline-block mr-1"></span>Crew</span>
            <span className="flex items-center"><span className="w-3 h-3 bg-teal-400 inline-block mr-1"></span>Equipment</span>
            <span className="flex items-center"><span className="w-3 h-3 bg-lime-400 inline-block mr-1"></span>Location</span>
            <span className="flex items-center"><span className="w-3 h-3 bg-yellow-300 inline-block mr-1"></span>Catering</span>
            <span className="flex items-center"><span className="w-3 h-3 bg-pink-400 inline-block mr-1"></span>Post-Production</span>
          </div>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 flex flex-col gap-3">
          <div className="font-semibold mb-2">Export Options</div>
          <button className="rounded bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700">Export PDF</button>
          <button className="rounded bg-green-600 px-4 py-2 text-white font-semibold hover:bg-green-700">Export Excel</button>
        </div>
      </div>
    </main>
  );
}

// --- PreLogin, Auth, Signup ---
function SignUpScreen({ onBack, onSuccess }: { onBack: () => void; onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('producer');
  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (email && password) {
      onSuccess();
    }
  }
  return (
    <div className="min-h-screen bg-[#101726] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-extrabold text-white text-center mt-12 mb-2">Sign Up</h1>
        <form className="w-full max-w-md bg-[#192136] rounded-xl shadow-lg p-8 flex flex-col gap-5" onSubmit={handleSignUp}>
          <div>
            <label className="block text-slate-200 font-semibold mb-1">Email Address</label>
            <input
              className="w-full rounded border border-[#2a3246] bg-[#101726] px-3 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
          </div>
          <div>
            <label className="block text-slate-200 font-semibold mb-1">Password</label>
            <input
              className="w-full rounded border border-[#2a3246] bg-[#101726] px-3 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400"
              placeholder="********"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-slate-200 font-semibold mb-1">Role</label>
            <select className="w-full rounded border border-[#2a3246] bg-[#101726] px-3 py-2 text-slate-200" value={role} onChange={e => setRole(e.target.value)}>
              <option value="producer">Producer</option>
              <option value="director">Director</option>
              <option value="crew">Crew Member</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg text-lg mt-2" type="submit">Sign up</button>
        </form>
        <div className="text-slate-400 text-center mt-8">
          Already have an account? <a href="#" className="text-blue-400 hover:underline" onClick={onBack}>Sign in</a>
        </div>
      </div>
    </div>
  );
}

function PreLoginLanding({ onStart }: { onStart: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const roles = [
    {
      key: 'producer',
      label: 'Producer',
      desc: 'Oversee the entire production, from budget and scheduling to hiring and distribution.'
    },
    {
      key: 'director',
      label: 'Director',
      desc: 'Manage the creative aspects of the film, including script, actors, and final look.'
    },
    {
      key: 'crew',
      label: 'Crew Member',
      desc: 'Access your tasks, call sheets, and production updates as part of the team.'
    }
  ];
  return (
    <div className="min-h-screen bg-[#101726] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-2">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center mt-8 mb-2">Welcome to CineTrack</h1>
        <p className="text-slate-300 text-base md:text-lg text-center mb-6">Select your role to get started.</p>
        <div className="w-full max-w-lg flex flex-col gap-4">
          {roles.map((role) => (
            <button
              key={role.key}
              type="button"
              className={`rounded-xl border p-4 flex items-center justify-between transition group focus:outline-none text-left ${selected === role.key ? 'border-blue-400 bg-blue-900/40' : 'border-[#2a3246] bg-[#151d2e] hover:border-blue-400'}`}
              onClick={() => setSelected(role.key)}
            >
              <div className="text-left">
                <div className="text-white text-lg font-bold mb-1">{role.label}</div>
                <div className="text-slate-300 text-sm">{role.desc}</div>
              </div>
              <span className={`border-2 rounded-full w-6 h-6 flex items-center justify-center ${selected === role.key ? 'border-blue-400' : 'border-[#2a3246] group-hover:border-blue-400'}`}>
                <span className={`w-3 h-3 rounded-full ${selected === role.key ? 'bg-blue-400' : 'bg-transparent'}`}></span>
              </span>
            </button>
          ))}
        </div>
        <button
          className={`mt-8 w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-base ${!selected ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => selected && onStart()}
          disabled={!selected}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function ProducerAuth({ role, onBack, onSuccess, onSignUp }: { role: string; onBack: () => void; onSuccess: () => void, onSignUp: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (email && password) {
      onSuccess();
    } else {
      setError('Please enter your email and password.');
    }
  }
  function handleForgotPassword(e: React.MouseEvent) {
    e.preventDefault();
    alert('Password reset link sent to your email (demo).');
  }
  function handleSignUp(e: React.MouseEvent) {
    e.preventDefault();
    onSignUp();
  }
  return (
    <div className="min-h-screen bg-[#101726] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mt-12 mb-2">Welcome to CineTrack</h1>
        <p className="text-slate-400 text-lg text-center mb-10">The all-in-one platform for film production management.</p>
        <form className="w-full max-w-md bg-[#192136] rounded-xl shadow-lg p-8 flex flex-col gap-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-slate-200 font-semibold mb-1">Email Address</label>
            <input
              className="w-full rounded border border-[#2a3246] bg-[#101726] px-3 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
          </div>
          <div>
            <label className="block text-slate-200 font-semibold mb-1">Password</label>
            <input
              className="w-full rounded border border-[#2a3246] bg-[#101726] px-3 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400"
              placeholder="********"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-300">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="accent-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-400 hover:underline" onClick={handleForgotPassword}>Forgot your password?</a>
          </div>
          {error && <div className="text-red-400 text-xs">{error}</div>}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg text-lg mt-2" type="submit">Sign in</button>
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-[#2a3246]"></div>
            <span className="text-slate-400 text-xs">Or continue with</span>
            <div className="flex-1 h-px bg-[#2a3246]"></div>
          </div>
          <div className="flex gap-3">
            <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-[#2a3246] bg-[#101726] text-slate-200 rounded-lg py-2 font-semibold hover:border-blue-400">
              Facebook
            </button>
            <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-[#2a3246] bg-[#101726] text-slate-200 rounded-lg py-2 font-semibold hover:border-blue-400">
              Google
            </button>
          </div>
        </form>
        <div className="text-slate-400 text-center mt-8">
          Don’t have an account? <a href="#" className="text-blue-400 hover:underline" onClick={handleSignUp}>Sign up</a>
        </div>
      </div>
    </div>
  );
}

// --- Header ---
function Header({ active, onLogo, onNav, onLogout }: { active: string; onLogo: () => void; onNav: (k: string) => void; onLogout: () => void }) {
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

// --- Main App Shell ---
function CineTrackApp() {
  type Step = 'dashboard'|'budget'|'remuneration'|'story'|'schedule'|'reports'|'people';
  const [step, setStep] = useState<Step>('dashboard');
  const [screen, setScreen] = useState<'prelogin'|'login'|'signup'|'main'>('prelogin');

  // Budget sub-tabs
  const [budgetTab, setBudgetTab] = useState<'budget' | 'expenses' | 'vendors'>('budget');
  // Story sub-tabs
  const [storyTab, setStoryTab] = useState<'story'|'locations'|'scripts'|'postproduction'>('story');
  // Schedule sub-tabs
  const [scheduleTab, setScheduleTab] = useState<'calendar'|'other'>('calendar');
  // Reports sub-tabs
  const [reportsTab, setReportsTab] = useState<'reports'|'deliverables'|'activitylog'|'notifications'|'compliance'>('reports');

  const handleLogout = () => {
    setScreen('prelogin');
    setStep('dashboard');
  };

  if (screen === 'prelogin') {
    return <PreLoginLanding onStart={() => setScreen('login')} />;
  }
  if (screen === 'login') {
    return <ProducerAuth
      role="producer"
      onBack={() => setScreen('prelogin')}
      onSuccess={() => { setScreen('main'); setStep('dashboard'); }}
      onSignUp={() => setScreen('signup')}
    />;
  }
  if (screen === 'signup') {
    return <SignUpScreen onBack={() => setScreen('login')} onSuccess={() => { setScreen('main'); setStep('dashboard'); }} />;
  }

  // Main app shell (only if logged in)
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <Header active={step} onLogo={() => setStep('dashboard')} onNav={k => setStep(k as Step)} onLogout={handleLogout} />
      {/* Budget sidebar navigation */}
      {step === 'budget' ? (
        <div className="flex flex-1">
          <aside className="w-48 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col py-8 px-2">
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${budgetTab==='budget' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setBudgetTab('budget' as any)}
            >
              Budget Overview
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${budgetTab==='expenses' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setBudgetTab('expenses' as any)}
            >
              Expenses
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left ${budgetTab==='vendors' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setBudgetTab('vendors' as any)}
            >
              Vendors
            </button>
          </aside>
          <main className="flex-1">
            {budgetTab === 'budget' && <ProducerBudget />}
            {budgetTab === 'expenses' && <ProducerExpenses />}
            {budgetTab === 'vendors' && <VendorsPage />}
          </main>
        </div>
      ) : step === 'story' ? (
        <div className="flex flex-1">
          <aside className="w-48 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col py-8 px-2">
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${storyTab==='story' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setStoryTab('story')}
            >
              Story & Script
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${storyTab==='scripts' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setStoryTab('scripts')}
            >
              Scripts
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${storyTab==='postproduction' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setStoryTab('postproduction')}
            >
              Post-Production
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left ${storyTab==='locations' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setStoryTab('locations')}
            >
              Locations
            </button>
          </aside>
          <main className="flex-1">
            {storyTab === 'story' && <ProducerStoryScript />}
            {storyTab === 'scripts' && <ScriptsPage />}
            {storyTab === 'postproduction' && <PostProductionPage />}
            {storyTab === 'locations' && <LocationsPage />}
          </main>
        </div>
      ) : step === 'dashboard' ? (
        <ProducerDashboard onGoExpenses={() => { setStep('budget'); setBudgetTab('expenses'); }} />
      ) : step === 'remuneration' ? (
        <ProducerRemuneration />
      ) : step === 'schedule' ? (
        <div className="flex flex-1">
          <aside className="w-48 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col py-8 px-2">
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${scheduleTab==='calendar' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setScheduleTab('calendar')}
            >
              Production Calendar
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${scheduleTab==='other' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setScheduleTab('other')}
            >
              Other
            </button>
          </aside>
          <main className="flex-1">
            {scheduleTab === 'calendar' && <ProductionCalendarPage />}
            {scheduleTab === 'other' && <ProducerScheduleCalendar />}
          </main>
        </div>
      ) : step === 'reports' ? (
        <div className="flex flex-1">
          <aside className="w-48 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col py-8 px-2">
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${reportsTab==='reports' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setReportsTab('reports')}
            >
              Reports
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${reportsTab==='deliverables' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setReportsTab('deliverables')}
            >
              Deliverables
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${reportsTab==='activitylog' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setReportsTab('activitylog')}
            >
              User Activity
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left mb-2 ${reportsTab==='notifications' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setReportsTab('notifications')}
            >
              Notifications
            </button>
            <button
              className={`w-full px-4 py-2 rounded font-semibold text-left ${reportsTab==='compliance' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
              onClick={()=>setReportsTab('compliance')}
            >
              Compliance
            </button>
          </aside>
          <main className="flex-1">
            {(reportsTab === 'reports' || reportsTab === 'deliverables' || reportsTab === 'activitylog' || reportsTab === 'notifications') && <ProducerReports tab={reportsTab as 'reports'|'deliverables'|'activitylog'|'notifications'} />}
            {reportsTab === 'compliance' && <CompliancePage />}
          </main>
        </div>
      ) : step === 'people' ? (
        <ProducerPeople />
      ) : null}
    </div>
  );
}

export default CineTrackApp;
