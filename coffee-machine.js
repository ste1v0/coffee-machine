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

while (true) {

  let action = prompt('Write action (buy, fill, take, remaining, exit):');

  if (action === 'exit') {
    break;
  }

  if (action === 'remaining') {
    alert(`The coffee machine has:
  ${machine["water"]} ml of water
  ${machine["milk"]} ml of milk
  ${machine["coffee"]} g of coffee beans
  ${machine["cups"]} disposable cups
  ${machine["balance"]} of money`);
  continue;
  }

  if (action === 'take') {
    alert(`I gave you ${machine["balance"]}`);
    machine.balance = 0;
    continue;
  } 
  
  if (action === 'fill') {
    let addWater = +prompt('Write how many ml of water you want to add:');
    let addMilk = +prompt('Write how many ml of milk you want to add:');
    let addCoffee = +prompt('Write how many grams of coffee beans you want to add:');
    let addCups = +prompt('Write how many disposable coffee cups you want to add:');
    
    machine.water = machine.water + addWater;
    machine.milk = machine.milk + addMilk;
    machine.coffee = machine.coffee + addCoffee;
    machine.cups = machine.cups + addCups;
    continue;
  } 
  
  if (action === 'buy') {
    
    let drink = +prompt('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:');
    
    if (drink === 1) { 
    
    if (machine.water >= espresso.water) {
      if (machine.coffee >= espresso.coffee) {
        if (machine.cups > 0) {
          alert('I have enough resources, making you a coffee!');
        } else {
          alert('Sorry, not enough cups!');
          continue;
        }
      } else {
        alert('Sorry, not enough coffee beans!');
        continue;
      }
    } else {
      alert('Sorry, not enough water!');
      continue;
    }    

  machine.water = machine.water - espresso.water;
  machine.coffee = machine.coffee - espresso.coffee;
  machine.balance = machine.balance + 4;
  machine.cups = machine.cups - 1;
  continue;
  }
     if (drink === 2) {
      
      if (machine.water >= latte.water) {
        if (machine.milk >= latte.milk) {
          if (machine.coffee >= latte.coffee) {
            if (machine.cups > 0) {
              alert('I have enough resources, making you a coffee!');
            } else {
              alert('Sorry, not enough cups!');
              continue;
            }
          } else {
            alert('Sorry, not enough coffee beans!');
            continue;
          }
        } else {
          alert('Sorry, not enough milk!');
          continue;
        }
      } else {
        alert('Sorry, not enough water!');
        continue;
      }

      
  machine.water = machine.water - latte.water;
  machine.milk = machine.milk - latte.milk;
  machine.coffee = machine.coffee - latte.coffee;
  machine.balance = machine.balance + 7;
  machine.cups = machine.cups - 1;
  continue;
} 
    
    if (drink === 3) {
      
      if (machine.water >= cappuccino.water) {
        if (machine.milk >= cappuccino.milk) {
          if (machine.coffee >= cappuccino.coffee) {
            if (machine.cups > 0) {
              alert('I have enough resources, making you a coffee!');
            } else {
              alert('Sorry, not enough cups!');
              continue;
            }
          } else {
            alert('Sorry, not enough coffee beans!');
            continue;
          }
        } else {
          alert('Sorry, not enough milk!');
          continue;
        }
      } else {
        alert('Sorry, not enough water!');
        continue;
      }
  machine.water = machine.water - cappuccino.water;
  machine.milk = machine.milk - cappuccino.milk;
  machine.coffee = machine.coffee - cappuccino.coffee;
  machine.balance = machine.balance + 6;
  machine.cups = machine.cups - 1;
  continue;
  } 
}
}
