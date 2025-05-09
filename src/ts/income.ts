// import Income type
import { Income } from '../../custom';

// arrow function (expression) example, ts
// const yoMomma = () => {
//     console.log("yo momma")
// }
// yoMomma()

// utility function to load incomes from localStorage
export function loadIncomes(): Income[] {
  try {
    return JSON.parse(localStorage.getItem('income') || '[]');
  } catch (error) {
    console.error('Error loading incomes: ', error);
    return [];
  }
}

// addIncome(), adds income amount to a list, void
export const addIncome = (income: Income): void => {
  // define incomeList
  let incomeList = loadIncomes();

  // push income to incomeList then to localStorage
  incomeList.push(income);
  localStorage.setItem('income', JSON.stringify(incomeList));

  // call displayIncome();
  // console.log(incomeList)
  displayIncome();
};
//  deleteIncome, remove income item, update localStorage, refresh income list
const deleteIncome = (index: number): void => {
  // load localStorage
  let incomeList = loadIncomes();
  // remove item using index
  incomeList.splice(index, 1);
  // update localStorage
  localStorage.setItem('income', JSON.stringify(incomeList));
  // call displayIncome()
  displayIncome();
};

// displayIncome(), displays the income objects in a list, void
const displayIncome = (): void => {
  // grab income objects from localStorage
  let incomes = loadIncomes();
  // define income objects into HTML var
  const html = incomes
    // add delete btn to map, use data-index
    .map(
      (i, index) =>
        `<p> $${i.amount} ${i.description} ${i.date} <button class="delete" data-index="${index}">Delete</button></p>`
    )
    .join('');

  // inject HTML var into actual HTML
  const incomeListElement = document.querySelector('#income-list');
  if (incomeListElement) {
    incomeListElement.innerHTML = html;
  } else {
    console.error('Income list element not found');
  }

  // add delete btn event listener here
  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = Number((e.target as HTMLButtonElement).dataset.index);
      deleteIncome(index);
    });
  });
};

// fireIncomeTracker(), gets all income object input data, fires displayIncome(), void
export const fireIncomeTracker = (): void => {
  // call displayIncome();
  displayIncome();

  // get form element
  const form = document.querySelector('#income-form') as HTMLFormElement;

  // define form event listener, e.preventDefault();
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    // get amount and description elements
    // y eso se llama destructuring bb!
    const { value } = document.querySelector(
      '#income-amount'
    ) as HTMLInputElement;
    const amount = Number(value);

    const { value: desc } = document.querySelector(
      '#income-desc'
    ) as HTMLInputElement;

    // input validation
    if (!amount || amount <= 0) {
      alert('Amount must be positive');
      return;
    }
    if (!desc) {
      alert('Please add a description');
      return;
    }

    // call addIncome();, define date var
    addIncome({
      amount,
      description: desc,
      date: new Date().toISOString().split('T')[0],
    });

    // clear form
    form.reset();
  });
};

// add delete and/or filter functionality immediately
