import { calculateProfit } from './profit';

// define types
type Income = {
  amount: number;
  description: string;
  date: string;
};

type Expense = {
  amount: number;
  category: string;
  recurring: boolean;
  date: string;
};
// exportTaxRecords(), retrieves data, formats it and exports it, void
export function exportTaxRecords(): void {
  // get income data from localStorage
  const income: Income[] = JSON.parse(localStorage.getItem('income') || '[]');
  // get expense data from localStorage
  const expense: Expense[] = JSON.parse(
    localStorage.getItem('expense') || '[]'
  );
  // format info using a template literal (ninja skills bb)
  const htmlContent =
    `Incomes ${income.map((i) => `${i.description}: $${i.amount} date:${i.date}`).join('\n')}
    Expenses ${expense.map((e) => `${e.category}: $${e.amount} date:${e.recurring ? '(Recurring)' : ''}`).join('\n')}
    Total Profit: $${calculateProfit()}`.trim();
  console.log(htmlContent);
  // create a download text file
  const blob = new Blob([htmlContent], { type: 'text/plain' });
  // create a download link
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `tax_records_${new Date().toISOString().split('T')[0]}.txt`;
  link.click();
  // append link to body and trigger
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // clear memory
  URL.revokeObjectURL(url);
}
