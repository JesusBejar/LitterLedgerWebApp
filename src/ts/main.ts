// import functions
import { fireIncomeTracker } from "./income"
import { getExpenses, displayExpenses, checkRecurring } from './expenses';

// income.ts testing calls below - 
// console.log("Testing getIncome():", getIncome({amount: 10, description: "hola", date: "2025"})); // Should print income data in the console
// (window as any).displayIncome = displayIncome;

// expenses.ts testing calls below - 
console.log("Testing getExpenses():", getExpenses({amount: 10, category: "yo momma", recurring: true, date: "2025"})); // Should print expense data in the console
(window as any).displayExpenses = displayExpenses;
(window as any).checkRecurring = checkRecurring;

// where all functions are fire
document.addEventListener("DOMContentLoaded", () => {
    fireIncomeTracker();
    // fireExpenseTracker();
    // fireProfitCalculator();
    // document.querySelector("export-btn")!.addEventListener("click", exportTaxRecords());
})