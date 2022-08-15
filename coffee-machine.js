let machine = {
  "water": 400,
  "milk": 540,
  "coffee": 120,
  "balance": 550,
  "cups": 9
};

let espresso = {
  "water": 250,
  "coffee": 16,
  "price": 4
};

let latte = {
  "water": 350,
  "milk": 75,
  "coffee": 20,
  "price": 7
};

let cappuccino = {
  "water": 200,
  "milk": 100,
  "coffee": 12,
  "price": 6
};

console.log(`The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money`);

let action = prompt('Write action (buy, fill, take):');

if (action === 'take') {
  console.log(`I gave you ${machine["balance"]}`);
  machine.balance = 0;
  console.log(`The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
${machine["balance"]} of money`);
} else if (action === 'fill') {
  let addWater = +prompt('Write how many ml of water you want to add:');
  let addMilk = +prompt('Write how many ml of milk you want to add:');
  let addCoffee = +prompt('Write how many grams of coffee beans you want to add:');
  let addCups = +prompt('Write how many disposable coffee cups you want to add:');
  
  machine.water = machine["water"] + addWater;
  machine.milk = machine["milk"] + addMilk;
  machine.coffee = machine["coffee"] + addCoffee;
  machine.cups = machine["cups"] + addCups;
  
  console.log(`The coffee machine has:
${machine["water"]} ml of water
${machine["milk"]} ml of milk
${machine["coffee"]} g of coffee beans
${machine["cups"]} disposable cups
${machine["balance"]} of money`);
} else if (action === 'buy') {
  let drink = +prompt('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:');
  
  if (drink === 1) { 
machine.water = machine["water"] - 250;
machine.coffee = machine["coffee"] - 16;
machine.balance = machine["balance"] + 4;
machine.cups = machine["cups"] - 1;

console.log(`The coffee machine has:
${machine["water"]} ml of water
${machine["milk"]} ml of milk
${machine["coffee"]} g of coffee beans
${machine["cups"]} disposable cups
${machine["balance"]} of money`);

  } else if (drink === 2) {
machine.water = machine["water"] - 350;
machine.milk = machine["milk"] - 75;
machine.coffee = machine["coffee"] - 20;
machine.balance = machine["balance"] + 7;
machine.cups = machine["cups"] - 1;

console.log(`The coffee machine has:
${machine["water"]} ml of water
${machine["milk"]} ml of milk
${machine["coffee"]} g of coffee beans
${machine["cups"]} disposable cups
${machine["balance"]} of money`);
  } else {
machine.water = machine["water"] - 200;
machine.milk = machine["milk"] - 100;
machine.coffee = machine["coffee"] - 12;
machine.balance = machine["balance"] + 6;
machine.cups = machine["cups"] - 1;

console.log(`The coffee machine has:
${machine["water"]} ml of water
${machine["milk"]} ml of milk
${machine["coffee"]} g of coffee beans
${machine["cups"]} disposable cups
${machine["balance"]} of money`);
  }
}