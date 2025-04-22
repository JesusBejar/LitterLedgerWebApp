import { addExpenses, loadExpenses } from '../expenses';

// addExpenses
// describe
describe('addExpenses', () => {
  // reset localStorage
  beforeEach(() => {
    localStorage.clear();
  });
  // arrange, set up mock data
  it('adds expense to localStorage correctly', () => {
    const expense = {
      amount: 100,
      category: 'Taxes',
      recurring: false,
      date: '2023-01-01',
    };
    // act
    addExpenses(expense);

    // assert
    const expenses = loadExpenses();
    // the statement just found a bug on line 92 of expenses.ts!
    expect(expenses).toStrictEqual([expenses]);
  });
});

// deleteExpenses function
// describe

// resent localStorage

// arrange

// act

// assert

// result

// checkRecurring function
// describe

// resent localStorage

// arrange

// act

// assert

// result

// displayExpenses function
// describe

// resent localStorage

// arrange

// act

// assert

// result

// fireExpenseTracker function
// describe

// resent localStorage

// arrange

// act

// assert

// result
