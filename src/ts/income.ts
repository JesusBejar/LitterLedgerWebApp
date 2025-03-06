// define Income type
type Income = {
    amount: number;
    description: string;
    date: string;
}

// getIncome(), adds income amount to a list, void
export function getIncome(income: Income): void {
    // define incomeList
    const incomeList: Income[] = JSON.parse(localStorage.getItem("income") || "[]")

    // push income to incomeList then to localStorage
    incomeList.push(income);
    localStorage.setItem("income", JSON.stringify(incomeList))

    // call displayIncome();
    displayIncome();
}

// displayIncome(), displays the income objects in a list, void

    // grab income objects from localStorage

    // define income objects into HTML var

    // inject HTML var into actual HTML

// fireIncomeTracker(), gets all income object input data, fires displayIncome(), void

    // call displayIncome();

    // get form element

    // define form event listener, e.preventDefault();

    // get amount and description elements

    // call addIncome();, define date var

    // clear form