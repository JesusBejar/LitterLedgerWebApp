// define Income type
type Income = {
    amount: number;
    description: string;
    date: string;
}

// getIncome(), adds income amount to a list, void
function getIncome(income: Income): void {
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
function displayIncome(): void {
    
    // grab income objects from localStorage
    const income: Income[] = JSON.parse(localStorage.getItem("income") || "[]");

    // define income objects into HTML var
    const html = income.map(i => `<p> $${i.amount} ${i.description} ${i.date} </p>`).join('');

    // inject HTML var into actual HTML
    const incomeListElement = document.querySelector('#income-list');
    if (incomeListElement) {
        incomeListElement.innerHTML = html
    }
}


// fireIncomeTracker(), gets all income object input data, fires displayIncome(), void
export function fireIncomeTracker():void {
    // call displayIncome();
    displayIncome();

    // get form element
    const form = document.querySelector("#income-form") as HTMLFormElement
        
    // define form event listener, e.preventDefault();
    form?.addEventListener("submit", (e) => {
        e.preventDefault()

    // get amount and description elements
    const amount = Number((document.querySelector("#income-amount") as HTMLInputElement).value)
    const desc = (document.querySelector("#income-desc") as HTMLInputElement).value

    // call addIncome();, define date var
    getIncome({ amount, description: desc, date: new Date().toISOString().split("T")[0]});
        
    // clear form
    form.reset()

    })
}

    // add delete and/or filter functionality immediately