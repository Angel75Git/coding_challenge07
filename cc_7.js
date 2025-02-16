//Task 1

function calculateInvoice(subtotal, taxRate, discount){
    return ((subtotal) + (subtotal * taxRate) - discount)
}; // Using template literals around the toFixed method
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5).toFixed(2)}`);
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`);

//Task 2
//Function expression starting with const variable
const calculateHourlyWage = function(salary, hoursPerWeek){
    let hourWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourWage.toFixed(2)}`;
}; 
//Using a variable to store wage

console.log(calculateHourlyWage(52000, 40)); //Test Data
console.log(calculateHourlyWage(75000, 35));

//Task 3
//Arrow Function Loyal Discount
const calculateLoyaltyDiscount = (amount, years) => {
    
    if (years >= 5) amount -= amount * 0.15
    else if (years >= 3) amount -= amount * 0.1
    else if (years < 3 ) amount -= amount *0.05

//Using if else to filter out discount rates

    console.log(`Discounted Price: $${amount.toFixed(2)}`);
}; 

//Test Cases
console.log(calculateLoyaltyDiscount(100, 6));
console.log(calculateLoyaltyDiscount(200, 2));

//Task 4
//Product Shipping 
function calculateShippingCost(weight, location, expedited = false){
    let shipFees = {
        "USA": (5 + (weight*0.5)),        //Math operations
        "Canada": (10 +(weight*0.7))}

    if (expedited){
        return shipFees[location] + 10;    //Test if Expedited
    } else {
        return shipFees[location]; 
    }
}//Test Data
console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true).toFixed(2)}`);
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false).toFixed(2)}`);

//Task 5
function calculateloanInterest(principle, rate, years){
    let totalInterest = principle * rate * years;
    return `Total Interest: $${totalInterest.toFixed(2)}`
} //Calculating interest with varying rates and years

console.log(calculateloanInterest(1000, 0.05, 3));
console.log(calculateloanInterest(5000, 0.07, 5));


//Task 6 Higher Order Functions
function filterHighValueTransactions(transactions, filterFunction){
    return transactions.filter(filterFunction);
}

let transactions = [500, 1200, 3000, 800, 2200]
//Will filter out 1200, 3000, and 2200
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));

//Task 7
function createBudgetTracker(){
    let totalBudget = 0;

    return function(expense) {
        totalBudget -= expense;
        return `Current Balance: $${totalBudget}`;
    };
}
//Setting our new function budget(expense)
let budget = createBudgetTracker();
console.log(budget(200));  //Test Casess
console.log(budget(150));

//Task 8: Recursion
function calculateGrowth(years, revenue){
    if (years >= 10){
        return `Projected Revenue: $${revenue.toFixed(2)}`;
    }//Calling the function again to add one more year and 5%
    return calculateGrowth(years + 1, revenue * 1.05);
} 
//Test Data
console.log(calculateGrowth(8, 1000));
console.log(calculateGrowth(5, 5000));

