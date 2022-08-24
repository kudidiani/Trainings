let amount = 25; // I have 25 UAH
let cookiePrice = 7; 
let candyPrice = 8;
// Can i buy both: cookie and candy?
let rest = amount - cookiePrice; // the rest after buying cookie
console.log('Rest is: ', rest);

const hasEnoughMoney = rest >= candyPrice; // const hasEnoughMoney = true/false
console.log('has enough money for candy: ', hasEnoughMoney);

if (hasEnoughMoney) {
    console.log('I have enough money')
} else{
    console.log('I do not have enough money')
}