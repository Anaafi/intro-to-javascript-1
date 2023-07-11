// Exercise 4: Manipulating and displaying information from a user input

// Step 1: Store the user's full name into a const variable
const fullName = "raphael anaafi"; 

// Step 2: Extract the first name and last name from the user input
let divideName = fullName.split(" ");
let firstName = divideName[0];
let lastName = divideName[1];

// Step 3: Capitalize the first letter of the first name
let capitalizedFirstLetter = firstName.charAt(0).toUpperCase() + firstName.slice(1);

// Step 4: Reverse the last name
let reversedLastName = lastName.split("").reverse().join("");

// Step 5: Count the number of characters in the full name
let fullNameLength = fullName.length;

// Step 6: Check if the full name contains the letter 'a'
let containsLetterA = fullName.toLowerCase().includes("a");

// Step 7: Display the extracted information using template literals
console.log(`Full Name: ${fullName}`);
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Capitalized First Letter of First Name: ${capitalizedFirstLetter}`);
console.log(`Reversed Last Name: ${reversedLastName}`);
console.log(`Full Name Length: ${fullNameLength}`);
console.log(`Full Name Contains 'a': ${containsLetterA}`);
