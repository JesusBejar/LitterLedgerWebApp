// import expense type
import { Expense } from './types';

// function expression example, ts
// const yoMomma = function (): void {
//     console.log("yo momma")
// }
// yoMomma()

// getExpense(), adds expense amount to a list, void
const addExpenses = function (expense: Expense): void {
  // define expensesList
  const expensesList: Expense[] = JSON.parse(
    localStorage.getItem('expense') || '[]'
  );

  // push expense to expensesList then to localStorage
  expensesList.push(expense);
  localStorage.setItem('expense', JSON.stringify(expensesList));

  // // call displayExpenses();
  displayExpenses();
  // // call checkRecurring();
  checkRecurring();
  // return expensesList
};

// deleteExpenses() load localStorage, remove expense item, update localStorage, refresh expenses

// load localStorage

// remove expense item

// update localStorage

// call displayExpenses()

// displayExpenses(), displays the expense objects in a list, void
const displayExpenses = function (): void {
  // grab expense objects from localStorage
  let expense: Expense[] = [];
  try {
    expense = JSON.parse(localStorage.getItem('expense') || '[]');
  } catch (error) {
    console.error('Error: ', error);
  }

  // define expense objects into HTML var
  const html = expense
    // add delete btn to map, use data-index
    .map(
      (i, index) =>
        // note the awesome short circuiting skills!
        `<p> $${i.amount} ${i.category} ${i.date} ${i.recurring ? '(Recurring)' : ''} <button class"delete" data-index="${index}">Delete</button></p>`
    )
    .join('');
  // inject HTML var into actual HTML
  const expenseListElement = document.querySelector('#expense-list');
  if (expenseListElement) {
    expenseListElement.innerHTML = html;
  }
  // add delete btn event listener here
  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = Number((e.target as HTMLButtonElement).dataset.index);
      deleteExpenses(index);
    });
  });
};

// checkRecurring(), displays possible recurring costs in "#recurring-alerts", void
const checkRecurring = function (): void {
  // load expenses in localStorage
  // declare var outside of try-catch
  let expenses: Expense[] = [];
  try {
    // assign var inside of try-catch
    expenses = JSON.parse(localStorage.getItem('expense') || '[]');
  } catch (error) {
    console.error('Error: ', error);
  }

  // filter through expenses
  const recurring = expenses.filter((e) => e.recurring);
  const html = recurring.length
    ? `<p> Recurring costs are: ${recurring.map((e) => e.category).join(', ')}</p>`
    : '';
  // inject HTML var(a str detailing recurring expenses) into actual HTML
  document.querySelector('#recurring-alerts')!.innerHTML = html;
};

// fireExpenseTracker(), gets all expense object input data, fires displayExpense(), void
export const fireExpenseTracker = function (): void {
  // call displayExpense();
  displayExpenses();
  // call checkRecurring();
  checkRecurring();

  // get form element
  const form = document.querySelector('#expense-form') as HTMLFormElement;
  // define form event listener, e.preventDefault();
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get amount, category and recurring elements
    // y eso se llama destructuring bb!
    const { value } = document.querySelector(
      '#expense-amount'
    ) as HTMLInputElement;
    const amount = Number(value);

    const { value: category } = document.querySelector(
      '#expense-category'
    ) as HTMLSelectElement;

    const { checked: recurring } = document.querySelector(
      '#expense-recurring'
    ) as HTMLInputElement;

    // input validation
    if (!amount || amount <= 0) {
      alert('Amount must be positive');
      return;
    }

    // call addExpense();, define date var
    addExpenses({
      amount,
      category,
      recurring,
      date: new Date().toISOString().split('T')[0],
    });

    // clear form
    form.reset();
  });
};
//  remove exports from all function except fireExpenseTracker()

// add delete and/or filter functionality immediately
