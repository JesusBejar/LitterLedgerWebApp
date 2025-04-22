import { calculateProfit } from '../profit';

describe('calculateProfit', () => {
  beforeEach(() => {
    localStorage.clear(); // Reset localStorage before each test
  });
  // arrange: set up mock data
  it('calculates profit correctly between incomes and expenses', () => {
    const incomes = [
      { amount: 100, desciption: 'cool stuff', date: '2023-01-01' },
      { amount: 200, description: 'cool stuff 2', date: '2023-01-02' },
    ];

    const expenses = [
      { amount: 50, description: 'expensive stuff', date: '2023-01-01' },
      { amount: 100, description: 'expenseive stuff 2', date: '2023-01-02' },
    ];
    localStorage.setItem('income', JSON.stringify(incomes));
    localStorage.setItem('income', JSON.stringify(expenses));

    // act: call function
    const profit = calculateProfit();

    // assert: check the result
    expect(profit).toBe(150);
  });
});

// fireProfitCalculator function
// describe

// resent localStorage

// arrange

// act

// assert

// result
