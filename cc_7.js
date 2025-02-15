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
    console.log(`Hourly Wage: $${hourWage.toFixed(2)}`);
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