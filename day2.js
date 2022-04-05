// Q.2 Write  function which take a input and print the count upto that Number.
// 2.1- And if number is divisble by three escape the num
/**Algo
 * Start
 * Step.1-First We Create a function which take one parameter
 * Step.2- We run a for loop and intialize a variable with 1
 * Ster.3-Give a Condition upto where we want to print the number
 * Step.4-And after we will increment that number.
 * Step.5-After We will console that number.
 * Stop
 */

function myFun(num) {
  if (isNaN(num)) {
    return "IT WILL TAKE ONLY NUMBER";
  }
  for (let i = 0; i <= num; i++) {
    if (i % 3 !== 0) {
      console.log(i);
      continue;
    }
  }
}
console.log(myFun(15));

/*============================================== */

// Q.3 Write a function Which take a function and print reverese the number upto 1

function myFun(num) {
  if (isNaN(num) || !num) return "it will not run bhai";

  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}
console.log(myFun(8));

/*====================================== */

/*  Difference b/w map & filter*/

/*The map method is used to convert each item of an array, while the filter method is used to select certain items of an array

 * map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.
*/

let numbers = [15, 20, 10, 25];
const newArr = numbers.map(num);
function myFun(num) {
  return num * 10;
}
console.log(newArr());
