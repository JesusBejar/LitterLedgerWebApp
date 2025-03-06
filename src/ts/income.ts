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
    // console.log(incomeList)
    displayIncome()
}

// displayIncome(), displays the income objects in a list, void
export function displayIncome(): void {
    
    // grab income objects from localStorage
    const income: Income[] = JSON.parse(localStorage.getItem("income") || "[]");

    // define income objects into HTML var
    const html = income.map(i => `<p> ${i.amount} $${i.description} ${i.date} </p>`).join('');

    // inject HTML var into actual HTML
    const incomeListElement = document.querySelector('#income-list');
    if (incomeListElement) {
        incomeListElement.innerHTML = html
    }
}


// fireIncomeTracker(), gets all income object input data, fires displayIncome(), void

    // call displayIncome();

    // get form element

    // define form event listener, e.preventDefault();

    // get amount and description elements

    // call addIncome();, define date var

    // clear form

    // remove exports from all functions but fireIncomeTracker()