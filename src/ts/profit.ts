type Income= {
    amount: number;
    description: string;
    date: string;
}

type Expense = {
    amount: number;
    category: string;
    recurring: boolean;
    date: string;
}
// calculateProfit(), calculates profits with income and expense objects, number
export function calculateProfit(): number {
    // define incomeList
    const income: Income[] = JSON.parse(localStorage.getItem("income") || "[]")
    // define expenseList
    const expenses: Expense[] = JSON.parse(localStorage.getItem("expense") || "[]")

    // reduce income object amounts to single value
    const totalIncome = income.reduce((sum, i ) => sum + i.amount, 0)
    // console.log(totalIncome)
    // reduce expense object amounts to single value
    const totalExpenses = expenses.reduce((sum, i ) => sum + i.amount, 0)
    // console.log(totalExpenses)
    
    // return result
    return totalExpenses - totalIncome
}

// fireProfitCalculator, displays total profit, void

    // call calculateProfit(), assign to var

    // inject into HTMl using html var


