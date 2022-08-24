// let amount = 25; // I have 25 UAH
// let cookiePrice = 7; 
// let candyPrice = 8;
// // Can i buy both: cookie and candy?
// let rest = amount - cookiePrice; // the rest after buying cookie
// console.log('Rest is: ', rest);

// const hasEnoughMoney = rest >= candyPrice; // const hasEnoughMoney = true/false
// console.log('has enough money for candy: ', hasEnoughMoney);

// if (hasEnoughMoney) {
//     console.log('I have enough money')
// } else{
//     console.log('I do not have enough money')
// }

// let x = true;
// // console.log(typeof(x));
// const type = typeof(x); // ... typeof x; without()
// console.log(type);

// let num1 = 10 ** 2; // 10 to the power of 2
// console.log(num1);
// let num2 = 10 % 3; // num2 = 1 -> 10/3 = 3 and 1 rest
// console.log('The rest of the 10/3 operation is:', num2);
// /*if we want to find out the last digit in a number,
//  we calculate the remainder of dividing by 10 */
//  let x;
//  x = 249;
//  let num3 = x % 10;
//  console.log('The last digital in number', x, ' is:', num3);
//  /*if we want to find out if the number is odd, or even, we should calculate 
//  the rest of the division of the number on 2. If the rest is 0 the number is even, 
//  visa verse if the rest is 1 this is an odd number*/
//  let y;
//  y = 655;
//  let num4 = y % 2;
//  console.log(num4);

//  let figure = 'rectangle';
//  console.log('calculate the area of a', figure);
//  let a = 5;
//  let b = 9;
//  let rectangleArea = a*b;
//  console.log('The area of the',figure, 'is:',rectangleArea);

// const myName = 'Diana';
// let myAge = 19;
// myAge = myAge + 1;//21
// let message = myName + ' is ' + myAge; // concatenation

// let message2 = `${myName} 
// is ${myAge + 3}`;  /*Diana
//                      is 23 */
// /*  Back quotes for  put `${} ... ` number in string and saves formatting 
// it is called interpolation */
// console.log(message);
// console.log(message2);

// const myAge = 17;
// const hasAccess = myAge >= 18; /* hasAccess true or false 
//                                   or vice versa !(myAge >= 18)  !=NOT*/
// console.log(hasAccess);
// if(hasAccess){ // if hasAccess true
//     console.log('Access granted')
// }
// else{ // if hasAccess false 
//     console.log(' Access denied')

// };

// console.log('Access only for people with costumes')
// clientCostume = false;
// access = clientCostume === true;// === equally 
// if (access){
//     console.log('Welcome!');
// }
// else {
//     console.log('Not today!')
// }

// console.log('World community');
// let country = 'Russia';
// let worldAccess = country !== 'Russia'; //!== not equally
// if (worldAccess) { // (!worldAccess) vice verse   ! equally NOT
//     console.log('Good country!');
// }
// else {
//     console.log('Fuch russia');
// };

//want to buy alcohol
let cashInWallet = 50;
let age = 25;

let price = 40
const ageLimit = 18; 

const enoughMoneyToBuy = cashInWallet >= price;// you can buy if you have enough money
const allowedToBuyAlkohol = age >= ageLimit; // you can buy Alcohol if you are older than 18
/* OR && 
if we have several conditions and ALL of them are required*/
const canBuy = enoughMoneyToBuy && allowedToBuyAlkohol /* you can make a purchase of alcohol 
if you have enough money AND (&&) if you are older than 18 */
console.log(canBuy);