import React from 'react';
import ExpensesFilters from '../components/ExpensesFilters';
import ExpensesTable from '../components/ExpensesTable';
import ExpensesCategoryBreakdown from '../components/ExpensesCategoryBreakdown';

export default function ProducerExpenses() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-4">Expenses</h1>
      <ExpensesFilters />
      <div className="my-6">
        <ExpensesTable />
      </div>
      <ExpensesCategoryBreakdown />
    </main>
  );
}