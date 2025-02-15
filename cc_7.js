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
