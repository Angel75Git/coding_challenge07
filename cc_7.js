//Task 1

function calculateInvoice(subtotal, taxRate, discount){
    return ((subtotal) + (subtotal * taxRate) - discount)
} // Using template literals around the toFixed method
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5).toFixed(2)}`);
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`);