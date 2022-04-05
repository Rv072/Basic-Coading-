// Question.1 ✔
// Write a function to convert a "number" into a proper Number.
// -it should handle empty value & return 0
// -handle NaN & return 0 if NaN
// -test all possible ways to implement this think atlest 5 ways.

/**
 * Algo...
 * start
 * step.1- we create a function
 * step.2- use a conditionl statment and first we will check
 * wheather a number is falsy value or not
 * step.3 check if is it NaN or not
 * step.4 if input is in number string convert it to a proper number
 * step.4 call the function
 * stop
 */
/**Falsy Values are= 0, null,undefined,NaN,""(Empty string),false */

/* solution.1=============*/

function convertString(num) {
  if (!num || isNaN(num)) {
    return 0;
  }
  return parseInt(num);
  return +num;
  return ~~num;
}
console.log(convertString(false));

/*Solution.2=========== */

function convertIntoString(num1) {
  if (num1 === 0) {
    return 0;
  } else if (num1 === "") {
    return 0;
  } else if (num1 === null) {
    return 0;
  } else if (num1 === undefined) {
    return 0;
  } else if (isNaN(num1)) {
    return 0;
  } else {
    // return +num1;
    return parseFloat(num1);
  }
}
console.log(convertIntoString("099"));

/*solution.3============* BEST APPROCHx.✔✔✔*/

function convertInistring(num3) {
  return !num3 || isNaN(num3) ? 0 : parseInt(num3);
}
console.log(convertInistring("ravi"));

/*==============================XXX========================== */
