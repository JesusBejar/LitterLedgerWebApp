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
    displayExpenses();
    // // call checkRecurring();
    // checkRecurring();
    // return expensesList
} 


// displayExpenses(), displays the expense objects in a list, void
export function displayExpenses(): void {
     // grab expense objects from localStorage
    const expense: Expense[] = JSON.parse(localStorage.getItem("expense") || "[]")
 
     // define expense objects into HTML var
    const html = expense.map(i => `<p> ${i.amount} ${i.category} ${i.date} ${i.recurring ? '(Recurring)' : ""}</p>`).join('');
     // inject HTML var into actual HTML
     const expenseListElement = document.querySelector("#expense-list")
     if (expenseListElement) {
        expenseListElement.innerHTML = html
     }

}

// checkRecurring(), displays possible recurring costs in "#recurring-alerts", void
export function checkRecurring(){
    // load expenses in localStorage
    const expenses: Expense[] = JSON.parse(localStorage.getItem("expense") || "[]")

    // filter through expenses
    const recurring = expenses.filter(e => e.recurring)
    const html = recurring.length ? `<p> Recurring costs are: ${recurring.map(e => e.category).join(', ')}</p>` : '';
    // inject HTML var(a str detailing recurring expenses) into actual HTML
    document.querySelector('#recurring-alerts')!.innerHTML = html; 
}


// fireExpenseTracker(), gets all expense object input data, fires displayExpense(), void
 
     // call displayExpense();
     // call checkRecurring();
 
     // get form element
 
     // define form event listener, e.preventDefault();
 
     // get amount, category and recurring elements
 
     // call addExpense();, define date var
 
     // clear form

     //  remove exports from all function except fireExpenseTracker()