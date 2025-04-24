import { addIncome, loadIncomes } from '../income';

// addIncome function
// describe
describe('addIncome', () => {
  // reset localStorage
  beforeEach(() => {
    localStorage.clear();
  });
  // arrange
  it('adds income to localStorage correctly', () => {
    const income = { amount: 100, description: 'Salary', date: '2023-01-01' };

    // act
    addIncome(income);

    // assert
    const incomes = loadIncomes();
    expect(incomes).toStrictEqual([income]);
    // 100 + 200 = 300
  });
});

// deleteIncome function
// describe


// resent localStorage

// arrange

// act

// assert

// result

// displayIncome function
// describe

// resent localStorage

// arrange

// act

// assert

// result

// fireIncomeTracker function
// describe

// resent localStorage

// arrange

// act

// assert

// result
