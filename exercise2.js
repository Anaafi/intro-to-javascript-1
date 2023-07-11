// Exercise 2: Calculate the total price of a shopping cart

// Step 1: Define variables for the initial price and quantity of an item
let price = 10;
let quantity = 2;

// Step 2: Display the initial price and quantity
console.log(`the initial price: Ghs${price}`);
console.log(`the initial quantity: ${quantity}`);

// Step 3: Apply a discount of 20% using the decrement operator
price -= price * 0.2;

// Step 4: Increase the quantity by 1 using the increment operator
quantity++;

// Step 5: Calculate the total price by multiplying the updated price and quantity
let totalPrice = price * quantity;

// Step 6: Display the updated price, quantity, and total price using template literals
console.log(`the updated price: Ghs${price}`);
console.log(`the updated quantity: ${quantity}`);
console.log(`the total price: Ghs${totalPrice}`);
