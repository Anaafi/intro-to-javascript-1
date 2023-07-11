// Exercise 3: Calculate the compound interest and display a savings summary

// Step 1: Define variables for principal amount, interest rate, and time period
let initialPrincipal = 2000; 
let initialInterestRate = 0.03; 
let timePeriod = 2; 

// Step 2: Calculate the compound interest using the formula: A = P * (1 + r/n)^(nt)
//n = number of times interest applied per time period, there n = 1
let n = 1;
let compoundInterest = initialPrincipal * (1 + (initialInterestRate / n)) ** (timePeriod);

// Step 3: Round the compound interest to 2 decimal places using the toFixed() method
compoundInterest = compoundInterest.toFixed(2);

// Step 4: Display the compound interest
console.log(`Compound Interest: Ghs${compoundInterest}`);

// Step 5: Update the interest rate by decrementing it by 0.01 using the decrement operator
initialInterestRate -= 0.01;

// Step 6: Calculate the new compound interest with the updated interest rate
let newCompoundInterest = initialPrincipal * (1 + (initialInterestRate / n)) ** (timePeriod);

// Step 7: Calculate the difference between the new and previous compound interests
let interestDifference = newCompoundInterest - compoundInterest;

// Step 8: Display the new compound interest and the difference compared to the previous interest
console.log(`New Compound Interest: Ghs${newCompoundInterest}`);
console.log(`Interest Difference: Ghs${interestDifference}`);

// Step 9: Convert the compound interest to a string and extract the cents using string methods
let compoundInterestString = compoundInterest.toString();
let cents = compoundInterestString.slice(-2);
console.log(cents);

// Step 10: Display the extracted cents from the compound interest
console.log(`Cents in Compound Interest: ${cents}`);

// Step 11: Calculate the total amount by adding the principal and compound interest
let totalAmount = initialPrincipal + parseFloat(compoundInterest);

// Step 12: Display the total amount using string interpolation and the toLocaleString() method
console.log(`Total Amount: Ghs${totalAmount.toLocaleString()}`);
