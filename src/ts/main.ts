// import functions
import { fireIncomeTracker } from './income';
import { fireExpenseTracker } from './expenses';
import { fireProfitCalculator } from './profit';
import { exportTaxRecords } from './export';

// income.ts testing calls below -
// console.log("Testing addIncome():", addIncome({amount: 10, description: "hola", date: "2025"})); // Should print income data in the console
// (window as any).displayIncome = displayIncome;

// expenses.ts testing calls below -
// console.log("Testing addExpenses():", addExpenses({amount: 10, category: "yo momma", recurring: true, date: "2025"})); // Should print expense data in the console
// (window as any).displayExpenses = displayExpenses;
// (window as any).checkRecurring = checkRecurring;

// profits.ts testing calls below -
// calculateProfit();

// exports.ts testing calls below -

// where all functions are fire
document.addEventListener('DOMContentLoaded', () => {
  fireIncomeTracker();
  fireExpenseTracker();
  fireProfitCalculator();
  const exportBtn = document.querySelector('#export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportTaxRecords);
  } else {
    console.error('Export button not found');
  }
  // localStorage.clear();
});
