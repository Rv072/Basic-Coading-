/**Q.3 Create a for loop that iterates up to 1000 while outputting "fizz" at multiples of 3,"buzz" att multiples of 5 and "fizzbuzz" at multiple of 3,5,15,30*/
/**Algo
 * Start
 * Step.1-Create a function
 * Step.2-Run a for loop upto the length
 * Step.3-Check for the condition if input is divisible by 15 return "fizz-buzz"
 * Step.4-Check for condition if input is divisible by 5 return "fizz"
 * Step.5-cCheck for condition if input is divisible by 3  return "buzz"
 * Stop
 */
function fizzBuzz(value) {
  for (let i = 0; i < value; i++) {
    if (i % 15 === 0) {
      console.log("Fizz-Buzz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("buzz");
    } else console.log(i);
  }
}
console.log(fizzBuzz(100));

/**Q.4-How to find the missing number in a given integer of given array of 1 to 100 */

/**Algo
 * Start
 * Step.1-Create a function
 * Step.2-Run a loop upto the length
 * step.3-Check for condition if next value is not greater then 1
 * Step.4-if value is greater than one retun the value -1
 * Stop
 */

/**Solution 1 */
function findMissing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return arr[i] - 1;
    }
  }
}

console.log(findMissing([1, 2, 3, 4, 5, 7]));

/**Solution 2 */

function findMissingNumber(arr) {
  var n = arr.length;
  var total = ((n + 2) * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    total -= arr[i];
  }
  return total;
}
console.log(findMissingNumber([1, 2, 3, 5]));
