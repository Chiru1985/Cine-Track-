import React from 'react';

export default function ExpensesCategoryBreakdown() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-slate-300"><span>Crew</span><span>$120,000</span></div>
      <div className="flex justify-between text-slate-300"><span>Equipment</span><span>$50,000</span></div>
      <div className="flex justify-between text-slate-300"><span>Location</span><span>$30,000</span></div>
      <div className="flex justify-between text-slate-300"><span>Catering</span><span>$15,000</span></div>
      <div className="flex justify-between text-slate-300"><span>Post-Production</span><span>$20,000</span></div>
    </div>
  );
}
