/**Q.Remove duplicate Character from string */
/**Algo
 * Start
 * Step.1-Create fuunction
 * Step.1.1-create a Empty obj
 * Step.2-Splited the string
 * Step.3-run a loop upto the length
 *Step.4-Check for the condition if a particullay key exists or not by hasOwnProperty
 *Step.5-return result
 */

function removeDuplicate(str) {
  let obj = {};
  let newStr = "";
  let splitedStr = str.split("");
  //   console.log(splitedStr);
  for (i = 0; i <= splitedStr.length; i++) {
    // console.log(splitedStr);
    if (!obj.hasOwnProperty(splitedStr[i])) {
      obj[splitedStr[i]] = "0";
      newStr = newStr + [splitedStr[i]];
      //   newStr = Object.keys(obj);
      //   console.log(newStr.join(""));
    }
  }
  return newStr;
}
console.log(removeDuplicate("hellhaaaozxyzxy"));
