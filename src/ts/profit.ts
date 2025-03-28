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

// function declaration example, ts
// function yoMomma () {
//     console.log('yo momma')
// }
// yoMomma()

// calculateProfit(), calculates profits with income and expense objects, number
export function calculateProfit(): number {
  // define incomeList
  function getTotalIncome(): number {
    try {
      const income: Income[] = JSON.parse(
        localStorage.getItem('income') || '[]'
      );
      // reduce income object amounts to single value
      return income.reduce((sum, i) => sum + i.amount, 0);
      // console.log(totalIncome)
    } catch (error) {
      console.error('Error: ', error);
      return 0;
    }
  }
  // define expenseList
  function getTotalExpenses(): number {
    try {
      const expenses: Expense[] = JSON.parse(
        localStorage.getItem('expense') || '[]'
      );
      // reduce expense object amounts to single value
      return expenses.reduce((sum, i) => sum + i.amount, 0);
      // console.log(totalExpenses)
    } catch (error) {
      console.error('Error: ', error);
      return 0;
    }
  }
  const totalIncome = getTotalIncome();
  const totalExpenses = getTotalExpenses();

  // return result
  return totalIncome - totalExpenses;
}

// fireProfitCalculator, displays total profit, void
export function fireProfitCalculator(): void {
  // call calculateProfit(), assign to var
  const profit = calculateProfit();
  // inject into HTMl using html var (do not try to destructure)
  const profitDisplay = document.querySelector(
    '#profit-display'
  ) as HTMLDivElement;
  if (profit) {
    profitDisplay.innerHTML = `This is your total profit $${profit}`;
  }
}
