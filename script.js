let amount = 18; // I have 10 UAH
let cookiePrice = 7; 
let candyPrice = 8;
// Can i buy both: cookie and candy?
let rest = amount - cookiePrice; // the rest after buying cookie
if (rest >= candyPrice) {
    document.write('I have enough money')
} else{
    document.write('I do not have enough money')
}