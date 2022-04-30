//2. - Remove Duplicate characters from array of element and find the count of an elements using set object

/**Algo
 * Start
 * Step.1-Create a function
 * Step.2-Set the element of array(it will remove the duplicate value)
 * Step.3-find the size form (.size) method of set(or count the charter)
 * Step.4Stop
 */

function findCount(arr) {
  const mySet = new Set(arr);
  console.log(mySet);
  return mySet.size;
}
console.log(findCount(["a", "b", "a", "c", "d", "b"]));

//4. - String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.
