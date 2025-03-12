// define expense type
type Expense = {
    amount: number, 
    category: string, 
    recurring: boolean, 
    date: string
}
// function expression example, ts
// const yoMomma = function (): void {
//     console.log("yo momma")
// }
// yoMomma()

// getExpense(), adds expense amount to a list, void
const getExpenses = function (expense: Expense): void {
    
    // define expensesList
    const expensesList: Expense[] = JSON.parse(localStorage.getItem("expense") || "[]")

    // push expense to expensesList then to localStorage
    expensesList.push(expense);
    localStorage.setItem("expense", JSON.stringify(expensesList))
 
    // // call displayExpenses();
    displayExpenses();
    // // call checkRecurring();
    checkRecurring();
    // return expensesList
} 


// displayExpenses(), displays the expense objects in a list, void
const displayExpenses = function (): void {
     // grab expense objects from localStorage
    const expense: Expense[] = JSON.parse(localStorage.getItem("expense") || "[]")
 
     // define expense objects into HTML var
    const html = expense.map(i => `<p> $${i.amount} ${i.category} ${i.date} ${i.recurring ? '(Recurring)' : ""}</p>`).join('');
     // inject HTML var into actual HTML
     const expenseListElement = document.querySelector("#expense-list")
     if (expenseListElement) {
        expenseListElement.innerHTML = html
     }

}

// checkRecurring(), displays possible recurring costs in "#recurring-alerts", void
const checkRecurring = function (): void {
    // load expenses in localStorage
    const expenses: Expense[] = JSON.parse(localStorage.getItem("expense") || "[]")

    // filter through expenses
    const recurring = expenses.filter(e => e.recurring)
    const html = recurring.length ? `<p> Recurring costs are: ${recurring.map(e => e.category).join(', ')}</p>` : '';
    // inject HTML var(a str detailing recurring expenses) into actual HTML
    document.querySelector('#recurring-alerts')!.innerHTML = html; 
}


// fireExpenseTracker(), gets all expense object input data, fires displayExpense(), void
export const fireExpenseTracker = function (): void {
    // call displayExpense();
    displayExpenses();
    // call checkRecurring();
    checkRecurring();
 
    // get form element
    const form = document.querySelector("#expense-form") as HTMLFormElement
    // define form event listener, e.preventDefault();
    form.addEventListener("submit", e => {
        e.preventDefault()

        // get amount, category and recurring elements
        const amount = Number((document.querySelector("#expense-amount") as HTMLInputElement).value);
        const category = (document.querySelector("#expense-category") as HTMLSelectElement).value;
        const recurring = (document.querySelector("#expense-recurring") as HTMLInputElement).checked;
 
        // call addExpense();, define date var
        getExpenses({ amount, category, recurring, date: new Date().toISOString().split("T")[0]});

        // clear form
        form.reset()
    })

}
    //  remove exports from all function except fireExpenseTracker()

    // add delete and/or filter functionality immediately