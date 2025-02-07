const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

const earnedAmountBubblegum = 202;
const earnedAmountToffee = 118;
const earnedAmountIceCream = 2250;
const earnedAmountMilkChocolate = 1680;
const earnedAmountDoughnut = 1075;
const earnedAmountPancake = 80;
const income = earnedAmountBubblegum + earnedAmountToffee + earnedAmountIceCream +
    earnedAmountMilkChocolate + earnedAmountDoughnut + earnedAmountPancake;

console.log("Earned amount:");
console.log("Bubblegum: $" + earnedAmountBubblegum);
console.log("Toffee: $" + earnedAmountToffee);
console.log("Ice cream: $" + earnedAmountIceCream);
console.log("Milk chocolate: $" + earnedAmountMilkChocolate);
console.log("Doughnut: $" + earnedAmountDoughnut);
console.log("Pancake: $" + earnedAmountPancake);
console.log();
console.log("Income: $" + income);

const staffExpenses = Number(input("Staff expenses: "));
const otherExpenses = Number(input("Other Expenses: "));
const netIncome = income - staffExpenses - otherExpenses;
console.log("Net income: $" + netIncome);
