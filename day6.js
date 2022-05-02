// Q.3. - Remove Duplicate characters from array of element using filter

/* 
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.
filter syntax 
array.filter(function(currentValue, index, arr), thisValue)
*/
/**Algo
 * Start
 * Step.1-Take a variable and store string element in it
 * Step2-Use filter to filter out the duplicate data
 * Step.3-check the current index is eual to index of data
 * Ster.4- Return out the data
 */
/**Solution 1 */

let findDuplicate = ["r", "a", "v", "r", "a", "i"];

function myfun(arr1) {
  let filteredArr = arr1.filter((current, index, arr) => {
    // console.log("currnt:", current, "index:", index, "arr:", arr);
    return arr.indexOf(current) === index;
    // console.log(filteredArr);
  });
  return filteredArr;
}
console.log(myfun(findDuplicate));

/**Solution 2 */
/**Algo
 * Start
 * Step.1-Create a function
 * Step.2-Use filter to Find duplicate value without index of
 * Step.3-Create a extra obj
 * Step.4-check if obj has property or not
 * Step.5-save in a string and concat with current item
 * return newStr
 */

// let findDuplicate = ["r", "a", "v", "r", "a", "i", "z", "x"];
function myfun(arr1) {
  const obj = {};
  let newStr = "";
  arr1.filter((item) => {
    // console.log("Current :", item);
    if (!obj.hasOwnProperty(item)) {
      obj[item] = "0";
      newStr = newStr + [item];
    }
  });
  return newStr;
}
console.log(myfun(findDuplicate));
