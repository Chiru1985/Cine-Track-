import React from 'react';
import RemunerationSummary from '../components/RemunerationSummary';
import RemunerationTable from '../components/RemunerationTable';

export default function ProducerRemuneration() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-2">Remuneration</h1>
      <p className="text-slate-300 mb-8">Crew salary, payments, and payroll status.</p>
      <RemunerationSummary />
      <RemunerationTable />
    </main>
  );
}
