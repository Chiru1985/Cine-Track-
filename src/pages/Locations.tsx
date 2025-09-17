import React, { useState } from 'react';

export default function LocationsPage() {
  const [locations, setLocations] = useState([
    { name: 'Studio A', address: '123 Main St', type: 'Studio', status: 'Booked', notes: 'Main indoor scenes', map: 'https://maps.example.com/studio-a' },
    { name: 'Central Park', address: 'Park Ave', type: 'Outdoor', status: 'Pending', notes: 'Daylight scenes', map: 'https://maps.example.com/central-park' },
    { name: 'Warehouse 5', address: 'Industrial Rd', type: 'Warehouse', status: 'Booked', notes: 'Night shoot', map: 'https://maps.example.com/warehouse-5' },
    { name: 'Beachfront', address: 'Ocean Dr', type: 'Outdoor', status: 'Scouted', notes: 'Sunset scene', map: 'https://maps.example.com/beachfront' },
  ]);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: '', address: '', type: '', status: 'Scouted', notes: '', map: '' });
  function handleFormChange(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }
  function handleAddLocation(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.address) return;
    setLocations(locs => [...locs, { ...form }]);
    setForm({ name: '', address: '', type: '', status: 'Scouted', notes: '', map: '' });
    setShowAdd(false);
  }
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Locations</h1>
      <p className="text-slate-300 mb-8">Manage all shooting locations, status, and notes.</p>
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold px-4 py-2 rounded flex items-center gap-2" onClick={()=>setShowAdd(true)}><span className="material-symbols-outlined">add</span> Add Location</button>
      </div>
      <div className="rounded-lg border border-slate-700 bg-slate-800/60 overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="text-left py-2 px-4">NAME</th>
              <th className="text-left py-2 px-4">ADDRESS</th>
              <th className="text-left py-2 px-4">TYPE</th>
              <th className="text-left py-2 px-4">STATUS</th>
              <th className="text-left py-2 px-4">NOTES</th>
              <th className="text-left py-2 px-4">MAP</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc, i) => (
              <tr key={loc.name+loc.address} className="border-t border-slate-700">
                <td className="py-2 px-4 font-semibold">{loc.name}</td>
                <td className="py-2 px-4">{loc.address}</td>
                <td className="py-2 px-4">{loc.type}</td>
                <td className="py-2 px-4">{loc.status}</td>
                <td className="py-2 px-4">{loc.notes}</td>
                <td className="py-2 px-4"><a href={loc.map} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View Map</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-lg p-8 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Add New Location</h3>
            <form className="flex flex-col gap-4" onSubmit={handleAddLocation}>
              <input className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="name" value={form.name} onChange={handleFormChange} placeholder="Location Name" />
              <input className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="address" value={form.address} onChange={handleFormChange} placeholder="Address" />
              <input className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="type" value={form.type} onChange={handleFormChange} placeholder="Type (e.g. Studio, Outdoor)" />
              <select className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="status" value={form.status} onChange={handleFormChange}>
                <option value="Scouted">Scouted</option>
                <option value="Booked">Booked</option>
                <option value="Pending">Pending</option>
              </select>
              <textarea className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="notes" value={form.notes} onChange={handleFormChange} placeholder="Notes"></textarea>
              <input className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200" name="map" value={form.map} onChange={handleFormChange} placeholder="Map Link (optional)" />
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
