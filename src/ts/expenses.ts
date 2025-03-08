// define expense type
type Expense = {
    amount: number, 
    category: string, 
    recurring: boolean, 
    date: string
}

// getExpense(), adds expense amount to a list, void
export function getExpenses(expense: Expense): void {
    
    // define expensesList
    const expensesList: Expense[] = JSON.parse(localStorage.getItem("expense") || "[]")

    // push expense to expensesList then to localStorage
    expensesList.push(expense);
    localStorage.setItem("expense", JSON.stringify(expensesList))
 
    // // call displayExpenses();
    // displayExpenses();
    // // call checkRecurring();
    // checkRecurring();
    // return expensesList
} 


// displayExpenses(), displays the expense objects in a list, void
 
     // grab expense objects from localStorage
 
     // define expense objects into HTML var
 
     // inject HTML var into actual HTML

// checkRecurring(), displays possible recurring costs in "#recurring-alerts", void

    // load expenses in localStorage

    // filter through expenses

    // inject HTML var(a str detailing recurring expenses) into actual HTML

// fireExpenseTracker(), gets all expense object input data, fires displayExpense(), void
 
     // call displayExpense();
     // call checkRecurring();
 
     // get form element
 
     // define form event listener, e.preventDefault();
 
     // get amount, category and recurring elements
 
     // call addExpense();, define date var
 
     // clear form