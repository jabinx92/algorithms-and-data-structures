//line 760

/* BIG O NOTATION
Time Complexity and Space complexity
*/

// import { formatWithOptions } from "util";

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// var t1 = performance.now();
// console.log(t1);
addUpTo(1000000000);
// var t2 = performance.now();
// console.log(t2);

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function addUpTo(n) {
  return n * (n + 1) / 2;
}


// var time1 = performance.now();
// console.log(addUpTo(1000000000));


// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//https://rithmschool.github.io/function-timer-demo/;

//time complexity
//simplify big 0
//0(1) - constant -flat line - ideal for constant run time (when you always have 3 operators 1 + 2 * 3)
//0(n) - linear (bottom left to top right) - when you have a for loop in a function
//0(n^2) - when you have a nested for loop inside a for loop - shoots up (quadratic)

//space complexity - amount of memory taken up/used
//most primitives(booleans,numbers,undefined, null) are constant space
//strings require 0(n) space (where n is the string length)
//reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

//function that takes array and for loops in space complexity and returns a number = 0(1) space

//function that takes an array and for loops and makes new array with numbers each doubled and returns a new array, space complexity = 0(n)


//Logarithm Complexity
// log2(8) = 3 -> 2^3 = 8
// 8 % 2 = 4 % 2 = 2 % 2 = 1 // answer is 3
//25 = 12.5 = 6.25 = 3.125 = 1.5625 // 4

//To analyze the performance of an algorithm, we use Big 0 Notation, it can give us a high level understanding of the time or space complexity of an algorithm

//The BIG 0 of objects
let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}

//When to use objects - 1. when you don't need order, 2. when you need fast access / insertion and removal

//Big O of objects | Insertion - O(1), Removal - O(1), Searching - O(n), Access - O(1) 

//BIG O of Object Methods | Object.keys - O(n), Object.values - O(n), Object.entries - O(n), hasOwnProperty - O(1)

//Arrays and BIG O - arrays are ORDERED
//use arrays when you need order
//when you need fast access, removal, insertion

let names  = ['Michael', 'Melissa', 'Andrea'];
//if you insert "Raj" to beginning of array you got to reindex the rest of the array. push and pop is quicker than shift and unshift



//ALGORITHMS AND PROBLEM SOLVING PATTERNS - STEPS TO PROBLEM SOLVE
//What is an algorithm? - A process or set of steps to accompish a certain task

//Almost everytting that you do in programming involves some kind of algorithm!
//It is the FOUNDATION for being a successful problem solving and developer
//Algorithms come up in interviews

//How do you improve? - 1. Devise a plan for solving problems, 2. Master common problem solving patterns

//Problem solving

  //Understand the Problem
    //Write a function that takes two numbers and returns their sum.
    //1. Can I restate the problem in my own words?
      "implement addition"
    //2.what are the inputs that go into the problem?
      'ints? floats? what about string or very large number?'
    //3.what are the outputs that should come from the solution to the problem?
      'int?, float?, string?'
    //4. can the outputs be determined from the inputs? Do I have enough information to solve the problem?

    //. How should i label the important pieces of data that are a part of the problem?


  //Explore concrete examples
    //Start with simple examples, write 2 or 3 with input and output
    //Progress to more complex examples
    //Write a function which takes in a string and returns counts of each character in the string.
    // console.log(charCount("aaaa")); // {a:4}
    // console.log(charCount("hello")); // {h:1,e:1, l:2, o:1}
    'my phone number is 182763'
    'Hello hi' //uppercase? lowercase? spaces? string and number?
    //Explore examples with empty and invalid inputs (edge cases)
    //charCount("")

  //Break it down
    //comment out the steps you need to take, show your interviewer what you are implying
    //write a function which takes in a string and returns counts of each character in the string.

      function charCount(str) {
        // make object to return at end
        var obj = {};
        //loop over string, for each character...
        for (var char of str) {
          char = char.toLowerCase();
          //if the char is a number/letter AND is a key in object, add one to count
          if(/[a-z0-9]/.test(char)) {
            //if char is a number/letter and is not in object, add it and set value to 1
            obj[char] = ++obj[char] || 1;
          }
        }
          //if character is something else (space, period, etc.) dont do anything
        //return object at end
        return obj;
      }

      // charCodeAt(0);
  //Solve/ simplify
      //if you cant solve it, solve a simpler problem
        //find the core difficulty and temporarily ignore it, write a simplified solution, then solve it
      
  //Look back and refactor
    //can you check the result? can you derive the result differently? can you understand it at a glance? can you use the result or method for some other problem? can you improve the performance of your solution? can you think of other ways to refactor? how have other people solved this problem?

//Understand the problem - ask the interviewer. Explore concrete examples. Break it down.


//How do you improve? 1. Devise a plan for solving problems 2. Master common problem solving patterns (freq counter, multi pointers, sliding window, divide and conquer)
  //Frequency counters - this pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

  //Write a function called same, which accepts two arrays, the function should return true if every value in the array has it's corresponding value sqaured in the second array. the frequency of values must be the same.

  function same(arr1, arr2){
    if(arr1.length !== arr2.length) {
      return false;
    }
    for(var i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      console.log(correctIndex)
      if(correctIndex === -1) {
        return false;
      }
      console.log(arr2)
      arr2.splice(correctIndex, 1)
    }
    return true;
  }

  // console.log(same([1,2,3,2],[9,1,4,4])); //true

  // same([1,2,3], [4,1,9]) //true
  // same([1,2,3], [1,9]) //false
  // same([1,2,1], [4,4,1]) //false(must be same frequency)

//===================================================
//refactored using frequency counter(object) - O(n)
function sameAgain(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val]++ || 1)
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val]++ || 1)        
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
    if(!(key * key in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key * key] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}

// console.log(sameAgain([1,2,3,2,5], [9,1,4,4,11]))
// console.log(sameAgain([1,2,3,2,5], [1,4,9,25,4]))

//===================================================

// //Big O Time complexity - O(n) linear
function validAnagram(word1, word2){
// add whatever parameters you deem necessary - good luck!
let object1 = {};
let object2 = {};
if (word1.length !== word2.length) {
  return false;
}

for(let i = 0; i < word1.length; i++) {
  let letter = word1[i];
  object1[letter] = object1[letter] + 1 || 1;
}
console.log(object1)

for(let i = 0; i < word2.length; i++) {
  let letter = word2[i];
  object2[letter] = object2[letter] + 1 || 1;
}
console.log(object2)

for(let key in object1) {
  console.log(object1[key])
  console.log('-------------')

  if(object1[key] !== object2[key]) {
    return false;
  }
}

return true;
}
// console.log(validAnagram('', '')) //true
// console.log(validAnagram('hello', 'olleh')) //true
// console.log(validAnagram('abc', 'wada')) //false

//-------------------------------------------------------------------

//multiple pointers
//creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition - very efficient for solving problems with minimal space complexity as well

//write a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist.

//multiple pointers example. big o - time complexity - O(n^2) - space - o(1)
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}


// console.log(sumZero([-4,-3,-2,-1,0,1,2,5])) //[-2,2]
sumZero([-3,-2,-1,1,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) //undefined
sumZero([1,2,3]) //undefined

//the problem with this example is that if you have an array with 10000 numbers, the nested for loop will be a lot.

//refactored
function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
} // time complexity - O(n) | space complexity - O(1)

// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))


//big O - time - O(n), space - O(n)
function countUniqueValues(arr){
let pushedArray = [];

for(var i = 0; i < arr.length; i++) {
  let pointer1 = arr[i];
  let pointer2 = arr[i+1];
  if(pointer1 !== pointer2){
    pushedArray.push(pointer1);
    console.log(pushedArray);

  }

}
return pushedArray.length;
}

// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
// console.log(countUniqueValues([1,1,1,1,1,2]))

//-----------------------------------------------------------
//sliding window - creating a window which can either be an array or number from one position to another. depending on a certain condition, the window either increases or closes(and a new window is created) - sliding window is very useful for keeping track of a subset of data in an array/string etc.

//ex - write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

//big o | time complexity = O(n^2)
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    let temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10 because 2+8=10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17 because 2+5+2+8=17
console.log(maxSubarraySum([4,2,1,6],1)) // 6 because 6=6
console.log(maxSubarraySum([],4)) //null

//refactor - 
function maxSubarraySum(arr,num) { //time complexity - O(n)
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
    // console.log(maxSum) //3
  }
  tempSum = maxSum; 
  for (let i = num; i < arr.length; i++) { 
    tempSum = tempSum - arr[i - num]  + arr[i]; //7
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))
// console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10 because 2+8=10

//============================================================
//Divide and conquer - this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. this pattern can tremendously decrease time complexity

//example - given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is lcoated. if the value is not found, return -1.


//linear search | time complexity = O(n)
function search(arr, val){
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
}
search([1,2,3,4,5,6], 4) // 3
search([1,2,3,4,5,6], 6) // 5
search([1,2,3,4,5,6], 11) // -1

//refactor
//binary search - lets say you have an array of 1000 numbers, you want to find a specific number but you dont want to use for loop to iterate through whole array, rather you use binary search to cut the array in half and if number is in that half then good, else let go of the cut-in-half-array, then repeat til you find the number.



//--------------------------------------------------------------
//frequency counter- same frequency
//write a function called sameFrequency. given two positive integers, find out if the two numbers have the same frequency of digits. Your solution must have O(N) time complexity.

function sameFrequency(num1, num2){
  if(num1.toString().length !== num2.toString().length) return false;

  let split1 = num1.toString().split('').sort()
  let split2 = num2.toString().split('').sort()
  console.log(split1);
  console.log(split2)
  for(var i = 0; i < split1.length; i++) {
    if(split1[i] !== split2[i]) {
      return false;
    }
    // return true;
  }
    
  // let obj1 = {};
  // let obj2 = {};
  // console.log(split1)
  // console.log(split2)
  
  // for(let val of split1) {
  //   obj1[val] = (obj1[val] || 0) + 1
  // }

  // for(let val of split2) {
  //   obj2[val] = (obj2[val] || 0) + 1
  // }
  // console.log(obj1);
  // console.log(obj2);

  // for(let key in obj1) {
  //   if(!(key in obj2)) {
  //     return false;
  //   }
  //   console.log(obj2[key])
  //   console.log(obj1[key])
  //   if(obj2[key] !== obj1[key]) {
  //     return false;
  //   }
  // }
  return true;
}

// console.log(sameFrequency(182,281)) //true
// console.log(sameFrequency(34, 14)) //false
// console.log(sameFrequency(3589578, 5879385)) //true
// console.log(sameFrequency(22, 222)) //false

//------------------------------------------------------------------------------

function areThereDuplicates(...args) {
  //put arguments into an array
  let argList = [...args].sort();
  // console.log(argList)
  //loop the array to see if the current index is the same as 
  for(var i = 0; i < argList.length; i++) {
    // console.log(argList[i], argList[i + 1])
    if (argList[i] === argList[i + 1]){
      return true;
    }
  }
  return false;
}

// console.log(areThereDuplicates(1,2,3)) //false
// console.log(areThereDuplicates(1,2,2)) //true
// console.log(areThereDuplicates('a','b','c','a')) //true

//------------------------------------------------------------------------------

//multiple pointers - averagePair
function averagePair(arr, num){
  // add whatever parameters you deem necessary - good luck!
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] / 2 === num) {
        return true;
      }
    }
  }
  return false;
}
console.log(averagePair([1,2,3], 2.5)) //true (2+3 /2 = 2.5)
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) //true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 18)) //true


//------------------------------------------------------------------------------
// =======

//alternate solution
function avgPair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){ //0 < 2
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return ([arr[start],arr[end]] + ' ' +true);
    else if(avg < num) start++
    else end--;
  }
  return false;
}

// console.log(avgPair([1,2,3], 2.5)) //true (2+3 /2 = 2.5)
// console.log(avgPair([1,3,3,5,6,7,10,12,19], 8)) //true
// console.log(avgPair([1,3,3,5,6,7,10,12,19], 3)) //true

//---------------------------------------------------------
//multiple pointers -isSubsequence
//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check wther the charcters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  if(str1.length == 0 || str2.length == 0) {
    return false;
  }
  
  let str1Ptr = 0; //4
  let str2Ptr = 0; //5
  let substring = "";
  
  while(str1Ptr < str1.length && str2Ptr < str2.length) {
    if(str2[str2Ptr] == str1[str1Ptr]) {
      substring = substring.concat(str2[str2Ptr]); //sing
      str2Ptr++;
      str1Ptr++;
    } else {
      str2Ptr++;
    }
  }
  
  return substring == str1;
}

// console.log(isSubsequence('hello','hello world')); //true
// console.log(isSubsequence('sing','sting')); //true
// console.log(isSubsequence('abc','abracadabra')); //true
// console.log(isSubsequence('abc','acb')); //false (order matters)

//======================================================

//sliding window - maxSubarraySum
//given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100,300] is not.

//Constraints:
//Time Complexity - O(N)
//Space Complexity - O(1)

// function maxSubarraySum1(arr, num) {
//   //if num is greater than array length, return null
//   if (num > arr.length) {
//     return null;
//   }

//   //create a storage number
//   var num;
//   var num2;

//   //loop over array
//   for(var i = 0; i < arr.length; i++) {
//     num2 = arr.slice(i, 2)
//     console.log(num2);
//     var final = num2.reduce(x, y => {
//       return x + y;
//     })
//     console.log(final);

  
//   }
    
//   //return emptyNumber
//   return emptyNumber;
// }

//=============================ANSWER
function maxSubarraySum(arr, num){
  if (arr.length < num) return null;

  let total = 0;
  for (let i=0; i<num; i++){
     total += arr[i]; //100 + 200 = 300
    //  console.log(total)
  }
  let currentTotal = total; //300
  // console.log(currentTotal)
  for (let i = num; i < arr.length; i++) {
     currentTotal += arr[i] - arr[i-num];
     total = Math.max(total, currentTotal);
  }
  return total;
}

// console.log(maxSubarraySum([100,200,300,400], 2)) //700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) //39

//======================================================
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray

//====================================================================================

//sliding window - findLongestSubstring
//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbbbbbb')) // 1

function nthLargest(arr, num) {
  arr.sort().reverse();
  return arr[num - 1];
}

// console.log(nthLargest([5,7,2,3,4,1,6], 4))

//================================================================
//RECURSION


function countDown(num) {
  if(num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(5);


function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num-1);
}


// console.log(sumRange(3));

//sumRange(3)
  //return 3 + sumRange(2)
                //return 2 + sumRange(1)
                              // return 1
// all return to 6

//writing factorial iteratively
function factorial(num) {
  let total = 1;
  for(let i = num; i > 1; i--) {
    total *= i
  }
  return total;
}

// console.log(factorial(3))

//writing factorial recursively
function factorial(num){
  if(num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5))

//common pitfalls - no base case, or base case is wrong will result in ininite call stack size exceeded

//returning the wrong thing 'return num * factorial(num - 1);

//stack overflow - maximum call stack exceeded

//helper method recursion


function collectOddValues(arr){
    
  let result = [];

  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }
      
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      
      helper(helperInput.slice(1))
  }
  
  helper(arr)

  return result;
}

// console.log(collectOddValues([1,2,3,4,5]))

//pure recursion
function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}


// console.log(collectOddValues([1,2,3,4,5]))
// [1].concat[collectOddValues([2,3,4,5])
//               [].collectOddValues([3,4,5])
//                     [3].collectOddValues([4,5])
//                           [].collectOddValues([5])
//                                 [5].collectOddValues([])
//                                       []

//pure recursion tip - for arrays, use methods like slice,  the spread operator, and concat that make copies of arrays so you do not mutate them
//remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
//to make copies of objects use Object.assign, or the spread operator

//power - write a function called power which accepts a base and an exponent. the function should return the power of the base to the exponent. this function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents

function power (num1, num2) {
  if(num2 === 0) return 1
  return num1 * power(num1, num2 - 1)
}

// console.log(power(2,0)) // 1
//return 1
// console.log(power(2,2)) // 4
//return 2 * power(2, 1)
            // 2 * power(2, 0)
                    //1
// console.log(power(2,4)) // 16
//return 2 * power(2, 3)
              //2 * power(2, 2)
                      //2 * power(2, 1)
                            //2 * power(2, 0)
                                  //1


//=======================================
// function factorial(num) {
//   //base case
//   if(num === 0) return 1;
//   return num * factorial(num - 1)
// }

// console.log(factorial(1)) //1
// console.log(factorial(2)) //2
// console.log(factorial(4)) //24
// console.log(factorial(7)) //5040

//=============================================
//productOfArray
//write a function called productOfArray which takes in an array of numbers and returns the product of them all


function productOfArray (arr) {
  let empty = 1;
  //helper function

  function help(input){
    //base case
    if(input.length === 0) {
      return;
    }
    empty *= input[0];

    help(input.slice(1));
  }
  help(arr)

  return empty;
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60


//================================================

function recursiveRange(num){
  if(num === 0) return 0;

  return num + recursiveRange(num - 1)
}

// console.log(recursiveRange(6)) // 21

//=================================================
function fib(num) {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}

// console.log(fib(4)) // 3
//3 + 2
//2 + 1
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465

//reverse - write a recursive function called reverse which accepts a string and returns a new string in reverse

function reverse(str) {
//create empty string to add characters
let emptyString = '';

//make string into splitted array
str = str.split('')
// console.log(str)

  //helper function
  function helper(insert) {
    //base case
    if(insert.length === 0) return;

    //add into emptystring last character
    emptyString += insert[insert.length - 1]

    //pop last element in array
    insert.pop();

    //rerun helper function
    helper(insert)
  }

//run recursion
helper(str)

//return complete emptyString
return emptyString;
}

// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'

//=============================================================================
//write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same forward and backward). Otherwise it returns false.

function isPalindrome(string) {
  let palindrome = '';
  let stringCopy = string;
  // console.log(stringCopy);

  let copy = string.split('')
  // console.log(copy)

  //helper function
  function helper(input) {

    //base case
    if(input.length === 0) {
      return;
    }
    palindrome += input[input.length - 1];
    input.pop();
    helper(input)
  }

helper(copy)

// console.log(palindrome)
  if(palindrome === stringCopy){
    return true;
  } else {
    return false;
  }
}

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false

//===============================================================
//someRecursive
//write a recursive function called someRecursive which accepts an array and a callback.  the function returns true if a single value in the array returns true when passed to the callback. otherwise it returns false;

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
// console.log(isOdd(1))

function someRecursive(arr, callback){
  let emptyArray = [];

  //helper function
  function helper (input1, input2) {
    if(input1.length === 0) return;
    if(input2(input1[0]) === true){
      emptyArray.push(true)
    } else {
      emptyArray.push(false)
    }
    input1.shift()
    helper(input1, input2)
  }
helper(arr, callback)

  if(emptyArray.includes(true)) {
    return true;
  } else {
    return false;
  };
}

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false


//=============================================================
//capitalizeFirst - write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  let emptyArray = [];
  
  //helper function
  function helper(input) {
    //base case
    if(arr.length === 0) return;
    emptyArray.push(input[0].charAt(0).toUpperCase() + input[0].slice(1))
    input.shift();
    helper(input)
  }
  helper(arr)
  
  return emptyArray;
}

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco', 'Banana']


//===============================================================
//flatten - write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened

function flatten(array){
  var flatArray = [];
  array.forEach(function(value){
    if(Array.isArray(value)) {
      flatArray = flatArray.concat(flatten(value))
    } else {
      flatArray.push(value)
    }
  });
  return flatArray;
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
//===================================================================
function nestedEvenSum (obj) {
  let emptyNumber = 0;//global

  //helper function for closure
  function helper(ob){
    for(var key in ob) {
      if(ob[key] % 2 === 0){
        emptyNumber += ob[key]
      } else if(typeof ob[key] === 'object'){
        helper(ob[key])
      } 
    }
  } 
  helper(obj)
  return emptyNumber;
}



var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10
// console.log(nestedEvenSum(obj2)); // 10


//===========================================================================
function capitalizeWords (array) {
  let emptyArray = [];

  //helper function
  function helper(arr) {
    //base case
    if(arr.length === 0) return;
    emptyArray.push(arr[0].toUpperCase());
    arr.shift();
    helper(arr);
  }
  helper(array);
  return emptyArray;
}

let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

//===========================================================================
//stringify numbers = write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. recursion would be a great way to solve this!

function stringifyNumbers(obj1) {
  let newObj = {}
  function helper(obj2){
    for(var key in obj2) {
        newObj[key] = obj2[key]
    }
  }
  helper(obj1)

  function secondHelper(obj3){
    for(var key in obj3) {
      if(typeof obj3[key] === 'number'){
        obj3[key] = `${obj3[key]}`
      } else {
        secondHelper(obj3[key])
      }
    }
  }
  secondHelper(newObj)

  return newObj
}

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// console.log(obj)
// console.log(stringifyNumbers(obj))
// console.log(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
//=====================================================
//collectStrings - write a function that takes in an object and if the property is a string, add it into an empty array.

function collectStrings(input){
  let array = [];

  function helper(collection){
    for(var key in collection) {
      if(typeof collection[key] === 'string'){
        array.push(collection[key])
      } else {
        helper(collection[key])
      }
    }
  }
  helper(obj)
  return array
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

// console.log(collectStrings(obj)) // ["foo", "bar", "baz"])

//=================================================================
//search - you can use indexOf(); if found return index number, else return -1. includes(), find(), findIndex()

//linear search
// var pets = ['cat','dog','bird'];
// console.log(pets.indexOf('dog'))
// console.log(pets.includes('dog'))
// console.log(pets.find(x => x === 'dog'))
// console.log(pets.findIndex(x => x === 'dog'))

//linear search pseudocode
//write a function that accepts an array and  value
//loop through the array and check if the current array element is equal to the value
//if it is, return the index at which the element is found
//if the value is never found, return -1

//big o? time complexity - O(N) because as array gets longer, the longer it takes to search. space complexity - O(1)
function linearSearch(array, value) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] === value) return i
  }
  return -1;
}

// console.log(linearSearch([1,2,3,4], 2))

//linear search BIG O - best case is O(1), worst case is O(n), average is also O(n)

//intro to binary search - only works on sorted arrays
//binary search is a much faster form of search
//rather than eliminate half of the remaining elements at a time
//binary search only works on sorted arrays!

//binary search psuedocode
//write a function that accepts a sorted array and a value
//create a left pointer at the start of the array, and a right pointer at the end of the array
//while the left pointer comes before the right pointer
  //create a  pointer in the middle
  //if you find the value you want, return the index
  //if the value is too small, move the left pointer up
  //if the value is too large, move the right pointer down
//if you never find the value, return -1

// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
      return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

// console.log(binarySearch([1,2,3,4,9,15,21,55], 21))
// [1,2,3,4,9,15,21,55]  // 21
//  L     M          R
// [1,2,3,4,9,15,21,55]  // 21
//          L  M     R
// [1,2,3,4,9,15,21,55]  // 21
//               LM  R

// console.log(binarySearch([1,2,3,4,5], 2)) // 1
// console.log(binarySearch([1,2,3,4,5], 3)) // 2
// console.log(binarySearch([1,2,3,4,5], 5)) // 4
// console.log(binarySearch([1,2,3,4,5], 6)) // -1

//big 0 - best case is O(1), worst and average case is O(log N)

//O(log n) is really good, it is close to O(1) which is constant which is the best, log n is just slightly above O(1). Binary search is mostly O(log n) because you are constantly cutting time in half from an array, as opposed to searching the whole array. Only if it is sorted can you use binary search. Lets say you have an array with 15 elements. That array gets chopped in half within the while loop to try and find the middle point. If numbers don't match the array gets chopped and chopped again. O(log n) is near constant and it is really good. 


//Naive string search
//Suppose you want to count the number of times a smaller string appears in a longer string
//a straightforward approach involves checking pairs of characters individually

function naiveSearch(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
         if(short[j] !== long[i+j]) break;
         if(j === short.length - 1) count++;
      }
  }
  return count;
}

// console.log(naiveSearch("lorie loled", "lol")) //1
// console.log(naiveSearch('wowzomgwwzomg', 'omg')) //2

//===========================================================
//elementary sorting algorithms - important and challenging topic.
//sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
//sorting numbers from smallest to largest
//sorting names alphabetically
//sorting movies based on release year
//sorting movies based on revenue

function sort(arr){
  return arr
}

// sort([23,45,6,12,13]) //[6,12,13,23,45]

//why do we need to learn sort algorithm?
  //sorting is an incredibly common  task, so its good to know how it works
  //there are many different ways to sort things, and different techniques have their own advantages and disadvantages

//objective - implement bubble sort, selection sort, and insertion sort

//javascript has a sort method, but it does not always work 100%
// ['steel', 'colt','data structures','algorithms'].sort();
//['algorithms','colt','data structures','steele']
// [6,4,15,10].sort();
//[10,15,4,6] // WRONG

function sortNumbers (num1, num2) {
  return num1 - num2;
}
// console.log([6,4,15,10].sort(sortNumbers));
// console.log([6,4,15,10].sort(sortNumbers).reverse());

function sortString (word1, word2) {
  return word1.length - word2.length
}
// console.log(['steel', 'colt','data structures','algorithms'].sort(sortString));
// console.log(['steel', 'colt','data structures','algorithms'].sort(sortString).reverse());


//bubble sort - a sorting algorithm where the largest values bubble up to the top

//[5,3,4,1,2]
//[3,5,4,1,2]
//[3,4,5,1,2]
//[3,4,1,5,2]
//[3,4,1,2,5]
//[3,4,1,2,5]
//[3,1,4,2,5]
//[3,1,2,4,5]
//[1,3,2,4,5]
//[1,2,3,4,5]

function swap(arr, idx1, idx2) { // [1,2,3] , 0, 1
  var temp = arr[idx1]; // 1
  arr[idx1] = arr[idx2]; // 2
  arr[idx2] = temp; // 1
  // console.log(arr)
}

// console.log(swap([1,2,3], 0, 1))

//bubble sort psuedocode
/* start looping from with a variable called i in the end of the array towards the beginning
- start an inner loop with a variable called j from the beginning until i - 1
- if arr[j] is greater than arr[j+1], swap those two values!
- return the sorted array
*/

function bubbleSort(arr) {
  let swapped = false;
  for(var i = arr.length; i > 0; i--) {
    for(var j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if(!swapped) break;
  }
  return arr;
}

// console.log(bubbleSort([1,32,2,34,12])) //[1,2,12,32,34]
// console.log(bubbleSort([99,88,777,66,5,44,333,2,11]))

//==============================================================================
//selection sort
//similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
//[5,3,4,1,2] //compace 5,3 = 3 is smaller
//[5,3,4,1,2] //compace 5,4 = 3 is still smaller
//[5,3,4,1,2] //compace 5,1 = 1 is smaller
//[5,3,4,1,2] //compace 5,2 = 1 is smaller
//[1,3,4,5,2] //1 is now placed in the beginning

//selection sort psuedocode
//store the first element as the smallest value you've seen so far.
//compare this item to the next item in the array until you find a smaller number
//if a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array. if the 'min' is not the value (index) you initially began with, swap the two values.
//repeat this with the next element until the array is sorted


//big o complexity = O(N sqaured)
function selectionSort (array) {
  let swapped = false;
  for(var i  = 0; i < array.length; i++) {
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if(!swapped) break;
  }
  return array;
}

// console.log(selectionSort([5,4,3,2,1,1,-2]))
// console.log(selectionSort([99,1,888,22,7,33,64,345]))


//=========================================================
//insertion sort
//builds up the sort by gradually creating a larger left half which is always sorted
//[5,3,4,1,2] looking 3, it goes before 5
//[3,5,4,1,2] looking at 4, it goes after 3
//[3,4,5,1,2] looking at 1, it goes in beginning
//[1,3,4,5,2] looking at 2, it goes after 1
//[1,2,3,4,5] complete

//start by picking the second element in the array
//now comapre the second element with the one before it and swap if necessary
//continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

// console.log(insertionSort([2,1,9,76,4]))

//time complexity - worst case O(n squared)

//============================================================================
//intermediate sorting algorithms
//DONT BE INTIMDATED IF YOU CANT DO IT FIRST TRY, THESE ARE CHALLENGING! DONT WORRY DONT WORRY

//Objectives - understand the limitations of the sorting algorithsm

//Merge Sort - a combo of two things - merging and sorting
//exploits the fact that arrays of 0 or 1 element are always sorted
//works by decomposing an  array into smaller arrays of 0 or 1 elements, the nbuilding up a newly sorted array

//merge sort
//create an empty array, take a look at the smallest values in each input array
//while there are still values we havent looked at...
  //if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  //if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move onto the next value in the second array
  //once we exhaust one array, push in all remainaing values from the other array.

function merge(arr1, arr2){
  let emptyArray = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]) {
      emptyArray.push(arr1[i]);
      i++;
    } else {
      emptyArray.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    emptyArray.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    emptyArray.push(arr2[j]);
    j++;
  }
  return emptyArray;
}

// console.log(merge([1,10,50],[2,14,99,100]))
// console.log(merge([],[2,14,99,100]))
// console.log(merge([100],[2,14,99]))

//mergeSort pseudocode
//break up the array into halves until you have arrays that are empty or have one element - hint slice
//once you have smaller sorted arrays, merge those arrays with other arrays until you are back at the full length of the array(use the merge function above that is already written)
//once the array has been merged back together, return the merged (and sorted!) array

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let low = mergeSort(arr.slice(0, mid));
  let high = mergeSort(arr.slice(mid))
  return merge(low, high)
}

// console.log(mergeSort([10,24,76,72,1,9]))
// console.log(mergeSort([10,24,76,73]));
// console.log(mergeSort([5,1,1,2,0,0]));

//quick sort
//pivot helper - in order to implement merge sort, its useful to first implement a function responsible arranging elements in an array on either side of a pivor
//given an array, this helper function should designate an element as the pivot 
//it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
//the order of the elemts on either side of the pivot doesn't matter!
//the helper should do this in place, that is,it should not create a new array
//when complete, the helper should return the index of the pivot

//picking a pivot
//the runtime of the quick sort depends in part on how one selects the pivot
//ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
//for simplicity, we will always pick the first element(we'll talk about consequences of this later)

//pivot pseudocode
//itl help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
//grab the pivot from the start of the array
//store the current pivot index in a varaiable(this will keep track of where the pivot should end up)
//loop through the array from the start until the end
  //if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
//swap the starting element (the pivot) with the pivot index


function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
// quickSort([100,-3,2,4,6,9,1,2,5,3,23])

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2

// function getDigit(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// }

// console.log(Math.pow(10, 0))
// console.log(getDigit(12345, 0)) // 5
// console.log(getDigit(12345, 1)) // 4


// function digitCount(num) {
//   let temp = `${num}`
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// console.log(digitCount(222))
// console.log(digitCount(22))
// console.log(digitCount(2))

// function mostDigits(nums){
//   let maxDigits = 0;
//   for(var i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }
//   return maxDigits;
// }

// console.log(mostDigits([23,567,89,90]));

//radix sort pseudocode
/*
define a function accepts list of numbers
figure out how many digits the largest number has
loop from k = 0 up to this largest number of digits
for each iteration of the loop: create buckets for each digit ( 0-9) and place each number in the corresponding bucket based on its kth digit
replace our existing array with values in our buckets starting with 0 and going up to 9
return list at the end!
 */

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// console.log(radixSort([23,345,5467,12,2345,9852]));

//==========================================================
//==========================================================
//==========================================================
/*DATA STRUCTURES - binary search trees, queues, singly linked lists, binary heaps, hash tables, etc

what do they do? data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

why so many data structures? well different data structures excel at different things. some are highly specialized, while others (like arrays) are more generally used

why care? - the more time you spend as a developer, the more likely you'll need to use one of these data structures

You have already worked with many of them unknowingly

You need to know data structures to pass job interviews

There is no 'BEST' data structure

working with map or location data? like google maps, (trying to write code for cheapest and nearest gas station)

need an ordered list with fast inserts/removals at the beginning and end? use linked list

google.com uses tree

scheduler app - binary heap

THERE IS A LOT TO LEARN
*/

/*
ES2015 class syntax
What is a class? It is a blueprint for creating objects with pre-defined properties and methods

why learn it? we will implement a ton of data structures as classes

Data structures - the class keyword

*/

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  //full name to calculate average = instance methods
  fullName() { 
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
  markLate() {
    this.tardies += 1;
    if(this.tardies >= 3) {
      return `YOU ARE EXPELLED!`;
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a,b){return a+b})
    return sum/this.scores.length;
  }

  //class method
  static enrollStudents(){
    return "ENROLLING STUDENTS!"
  }
  //can only be ran by Students.enrollStudents();
}

let firstStudent = new Student("Colt", "Steele", 4);
let secondStudent = new Student("Blue", "Steele", 2);
// console.log(firstStudent)

//class methods - not that common 
//we will be using the constructor and instance methods quite a bit!

//How we will be using classes
/*
class DataStructure() {
  constructor() {
    //what default properties should it have?
  }
  someInstanceMethod(){
    //what should each object created from this class be able to do?
  }
}
*/

//One gotcha with 'this' - inside all of our instance methods and constructor, the keyword 'this' refers to the object created from that class (also known as an instance)

//recap - classes are blueprints that when created make objects known as instances
//classes are created with the new keyword
//the constructor function is a special function that gets run when the class is instantiated
//instance methods can be added to classes similar to methods in objects
//class methods can be added used thing static keyword.

//====================================================================
//singly linked list
/* define what  singly linked list is, compare and contrast linked list with arrays, implement insertion, removal and traversal methods on singly linked lists.

linked list
a data structure that contains a head, tail, and length property. linked lists consist of nodes, and each node has a value and a pointer to another node or null.

an array is like a skyscraper with an elevator, you can go to any floor/number
a linked list like a skyscraper with only stairs, you can only use the stairs to go up
*/

//piece of data - val
//reference to next ndoe - next


//below is bad example because you have to constantly type .next
// var first  = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

/*
this function should accept a value
-create a new node using the value passed to the function
-if there is no head propert on the list, set the head and tail to be the newly created node
-otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
-increment the length by one
*/
// class Node{
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkedList{
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val){
//     var newNode = new Node(val);
//     if(!this.head){
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode
//     }
//     this.length++
//     return this;
//   }
//   pop(){
//     if(!this.head) return undefined 
//     var current = this.head;
//     var newTail = current;
//     while(current.next){
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if(this.length === 0){
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//   shift(){
//     if(!this.head) return undefined;
//     var currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     if(this.length === 0) {
//       this.tail = null;
//     }
//     return currentHead;
//   }
//   unshift(val){
//     var newNode = new Node(val);
//     if(!this.head){
//       this.head = newNode;
//       this.tail =  this.head;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(val){
//     let number = 0;
//     let current = this.head
//     if(val < 0 || val >= this.length) return null;
//     while(number !== val){
//       current = current.next;
//       number++;
//     }
//     return current;
//   }
//   set(index, val){
//     let change = this.get(index)
//     if(change){
//       change.val = val;
//       console.log(change)
//       return true;
//     } else {
//       return false;
//     }
//   }
//   insert(index, val){
//     if(index < 0 || index > this.length) return false;
//     if(index === this.length) return this.push(val);
//     if(index === 0) return this.unshift(val);

//     var newNode = new Node(val);
//     var prev = this.get(index - 1)
//     var temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }
//   remove(index){
//     if(index < 0 || index > this.length) return undefined;
//     if(index === this.length - 1) return this.pop();
//     if(index === 0) return this.shift();
//     var previousNode = this.get(index - 1);
//     var removed = previousNode.next;
//     previousNode.next = removed.next;
//     this.length--;
//     return removed;
//   }
//   reverse(){
//     var node = this.head;
//     this.head = this.tail;
//     var next;
//     var prev = null;
//     for(var i = 0; i < this.length; i++){
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
// }



// var list = new LinkedList();
// console.log(list.push('hello'))
// console.log(list.push('bye'))
// console.log(list.push('goodnight'))
// console.log(list.push('goodmorning'))
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.unshift(1));
// console.log(list.unshift(2));
// console.log(list.get(0))
// console.log(list.get(1))
// console.log(list.set(1, 'byeagain'))
// console.log(list.get(1))
// console.log(list.insert(2, 'inserted'))
// console.log(list.insert(2, 'tactical insertion'))
// console.log(list.insert(2, 'tactical insertioasdasdan'))
// console.log(list);

////linked list review

//data structure - doubly linked list - construct a doubly linked list = compare and contrast double and singly linked lists - implement basic operations on a doubly linked list
//doubly linked list is almost identical to singly linked lists, except every node has anothe rpointer, to the previous node!
//it takes more memory === more flexibility, almost always a tradeoff!

// class Node{
//   constructor(val){
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList{
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val){
//     var newNode = new Node(val);
//     if(this.length === 0){
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop(){
//     if(!this.length === 0) return undefined;
//     var current = this.tail;
//     if(this.length === 1){
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = current.prev;
//       this.tail.next = null;
//       current.prev = null;
//     }
//     this.length--;
//     return current;
//   }
//   shift(){
//     if(this.length === 0) return undefined;
//     var oldHead = this.head;
//     if(this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = oldHead.next;
//       this.head.prev = null;
//     }
//     this.length--;
//     return oldHead;
//   }
//   unshift(val){
//     var newNode = new Node(val);
//     if(this.length === 0){
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(index){
//     if(index < 0 || index >= this.length) return null;
//     let count, next = this.head;
//     if(index <= this.length / 2){
//       count = 0;
//       while(index !== count){
//         next = next.next;
//         count++;
//       } 
//     } else {
//       count = this.length - 1;
//       next = this.tail;
//       while(index !== count){
//         next = next.prev;
//         count--;
//       }
//       }
//       return next;
//     }
//   set(value, idx){
//     let index = this.get(idx);
//     if(index){
//       index.val = value;
//       return true;
//     }
//     return false;
//   }
//   insert(index,value) {
//     if(index < 0 || index >= this.length) return false;
//     if(index === 0) return this.unshift(value);
//     if(index === this.length) return this.push(value);

//     var newNode = new Node(value);
//     var prev = this.get(index - 1);
//     var temp = prev.next;

//     prev.next = newNode, newNode.prev = prev;
//     newNode.next = temp, temp.prev = newNode;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if(index < 0 || index >= this.length) return undefined;
//     if(index === 0) return this.shift();
//     if(index === this.length - 1) return this.pop();

//     var removedNode = this.get(index);
//     removedNode.prev.next = removedNode.next;
//     removedNode.next.prev = removedNode.prev;
//     removedNode.next = null;
//     removedNode.prev = null;
//     this.length--;
//     return removedNode;
//   }
// }


// var first = new DoublyLinkedList();
// console.log(first.push('please'));
// console.log(first.push('excuse'));
// console.log(first.push('my'));
// console.log(first.push('dear'));
// console.log(first.push('aunt'));
// console.log(first.push('sally'));
// console.log(first.push('she'));
// console.log(first.push('is'));
// console.log(first.push('an'));
// console.log(first.push('engineer'));
// console.log(first.pop());
// console.log(first.shift());
// console.log(first.unshift('unshifted'));
// console.log(first.get(5));
// console.log(first.set('hello', 4))
// console.log(first.set('hello', -1))
// console.log(first.insert(4, 'TRACTICAL INSERTION'));
// console.log(first);

//==============================================================
/*
define what a stack is. understand use cases for a stack. implement operations on a stack data structure.

LIFO - last in first out - recursion call stack
where are stacks used - managing function invocations
undo / redo
ctrl + z removes the latest mistake
routing(the history object) is treated like a stack!
*/

// function factorial(x){
//   //edge case
//   if(x === 0) return 1;
//   return x * factorial(x - 1);
// }

// console.log(factorial(4));


//stack - LIFO - here is array implementation of stack
// var stack = [];
// stack.push(5).push(10).push(15).push(20);
//push and pop is better than shift and unshift because you dont have to reindex everything, unlike shift and unshift


//using stack in a linked list

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(value) {
//     var newNode = new Node(value);
//     if(!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       var temp = this.head;
//       this.head = newNode;
//       newNode.next = temp;
//     }
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     if(!this.head) return null;
//     var removed = this.head;
//     if(this.head === this.last) {
//       this.last = null;
//     }
//     this.head = this.head.next;
//     this.length--;
//     return removed.value;
//   }
// }

// var list = new LinkedList();
// console.log(list.push(5));
// console.log(list.push(10));
// console.log(list.push(15));
// console.log(list);
// console.log(list.pop());
// console.log(list);

//===========================================================
//queue - first in first out - when you go in store to get food and you get yours first.
//when blizzard servers are busy, you go into queue to join the game
//print queue - there are many ways to implement a queue - just remember FIRST IN FIRST OUT!

// var q = [];
// q.push("FIRST")
// q.push("SECOND")
// q.push("THIRD")
// console.log(q)
// q.shift();
// console.log(q);
// q.shift();
// console.log(q);
// q.shift();
// console.log(q);

// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   enqueue(value) {
//     var newNode = new Node(value);
//     if(!this.head){
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       let temp = this.tail;
//       temp.next = newNode;
//       this.tail = newNode;
//     }
//     return this.length++;
//   }
//   dequeue() {
//     if(!this.head) return null;
//     let removed = this.head;
//     if(this.first === this.last) {
//     this.last === null;
//     }
//     this.head = removed.next;
//     this.length--;
//     return removed;
//   }
// }

// var list = new LinkedList();
// console.log(list.enqueue(5));
// console.log(list);
// console.log(list.enqueue(10));
// console.log(list);

// list.enqueue(15);
// list.enqueue(20);
// console.log(list.dequeue())
// console.log(list)



// //fastest way - add to the end and move from the beginning, aka push and shift, enqueue and dequeue

//============================================================
// binary search trees
//why are linked lists different that TREES? well linked lists are linear(one node connects  to the other til it reaches the end), binary search trees are non-linear(they can have multiple paths going different ways).
//root - the top node in a tree
//child - node directly connected to another node when moving away from the root.
//parent - the converse notion of a child 
//siblings - node that shares the same parent
//leaf - a node with no children
//edge - the connection between one node and another

//uses for trees - used all the time - HTML DOM - google searchbar uses a tree, when you type a word, it will show you multiple selections, further narrowing your search
//network routing - not sure but dont worry
//abstact syntax  tree - coding tree structure(while loop has aa condition and body branch)
//artificial intelligence - machine learning uses a lot of trees
//if you made a tic tac toe game, artificial intelligence can teach the robot to learn all the best possible moves.
//folders in operating systems - folders have folders within folders


//kinds of trees we will look into
/*
tree - each node can have unlimited children nodes
binary tree - each node can have a max of 2 child nodes
binary search tree - special case of binary tree - numbers are sorted in particular way, if you look at the root, all numbers smaller are to the left, all numbers greater than the root are located to the right
  -every parent node has at most two children
  -every node to the left of a parent node is always less than the parent
  -every node to the right of a parent node is always greater than the parent
*/


class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }
  find(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
  }
  contains(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              return true;
          }
      }
      return false;
  }
  BFS(){
      var node = this.root,
          data = [],
          queue = [];
      queue.push(node);

      while(queue.length){
         node = queue.shift();
         data.push(node.value);
         if(node.left) queue.push(node.left);
         if(node.right) queue.push(node.right);
      }
      return data;
  }
  DFSPreOrder(){
      var data = [];
      function traverse(node){
          data.push(node.value);
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
  }
  DFSPostOrder(){
      var data = [];
      function traverse(node){
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
          data.push(node.value);
      }
      traverse(this.root);
      return data;
  }
  DFSInOrder(){
      var data = [];
      function traverse(node){
          if(node.left) traverse(node.left);
          data.push(node.value);
          if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
  }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();

//leetcode 3

//this will take too long - SOLUTION - insert function
// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right  = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
//this will take too long - SOLUTION - insert function

/*
inserting a node - steps - iteratively or recursively
-create a new node
-starting at the root
  -check if there is a root, if not - the root now becomes that new node!
  -if there is a root, check if the value of the new node is greater than or less than the value of the root
  -if it is greater
    -check to see if there is a node to the right
      -if there is, move to that node and repeat these steps
      -if there is not, add that node as the right property
  -if it is less
    -check to see if there is a node to the left
    -if there is not, add that node as the left property
*/

//============================================================================
/*
Tree Traversal - lets say you have a Tree structure but all the nodes are unordered and you want to find a value in a node.
There are two ways to sort through a unsorted tree.
  -Breadth-first search (work across the tree from left to right)
  -Depth-first search (in-order(bottom left to top node to bottom right) or pre-order(top node to bottom left to bottom right) or post order(bottom left to bottom right to top node))
*/

//Breadth-first search
  //create a queue (this can be an array) and  variable to store the values of nodes visited
  //place the root node in the queue
  //loop as long as there is anything in the queue
    //dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    //if there is a left property on the node dequeued - add it to the queue
    //if there is a right property on the node dequeued - add it to the queue

    //recap - trees are non-linear data structures that contain a root and child nodes
      //binary trees can have values of any type, but at most two children for each parent
      //binary search trees are more specific version of binary trees where every node to the left of a parent is less than it's value and evvery node to the right is greater
      //we can search through trees using BFS and DFS


//===================================================================
/* BINARY HEAPS
objectives - 
  - define what a binary heap is
  - compare and contrast min and max heaps
  - implement basic methods on heaps
  - understand where heaps are used in the real world and what other data structures can be constructed from heaps

  - what is a binary heap? - very  similar to a binary search tree, but with some different rules!
  - in a maxbinaryheap, parent nodes are always larger than child nodes. in a minbinaryheap, parent nodes are always smaller than child nodes

  example - 33
          18    41
        12  27 39 --there is no order, as long as top(parent node) is greater than the child nodes

max binary heap -
  -each parent has at most two nodes
  -the value of each parent node is always greater than its child nodes
  -in a max binary heap the parent is greater than the children, but there are no guarantees between sibling nodes
  -a binary heap is as compact as possible. all the children of each node are as full as they can be and left children are filled out first

  why are binary heaps important? binary heaps are used to implement priority queues, which are very commonly used data structures. they are also used quite a bit, with graph traversal algorithms
*/

// class MaxBinaryHeap {
//   constructor(){
//     this.values = [41,39,33,18,27,12];
//   }
//   insert(element){
//     this.values.push(element);
//     this.bubbleUp();
//   }
//   bubbleUp(){
//     let idx = this.values.length - 1;
//     const element = this.values[idx];
//     while(idx > 0){
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.values[parentIdx];
//       if(element <= parent) break;
//       this.values[parentIdx] = element;
//       this.values[idx] = element;
//       idx = parentIdx;
//     }
//   }
// }

// let heap = new MaxBinaryHeap();
// console.log(heap.insert(55));
// // [41,39,33,18,27,12,55]
// //  0   1  2  3  4  5  6

// // [41,39,33,18,27,12,55]
// // [41,39,55,18,27,12,33]
// // [55,39,41,18,27,12,33]
// // [55,39,41,18,27,12,33]

//====================================================================================================
/*
HASH TABLES
  -what is a hash table? - used to store key value pairs, somewhat like arrays
    -unlike arrays, hash tables are FAST for all the following operations: finding values, adding new values, and removing values!
    -why should i care? - nearly every programming language has some sort of hash table data structure - because of their speed, hash tables are very commonly used!
      -ex python has dictionaries, javascript has objects and maps, java, go, and scala have maps, ruby has hashes. 

HASH TABLE examples - imagine we want to store some colors, we could just you an array/ list: ["#ff69b4","#ee34b2"] - this is not good since we dont know what color those 2 items are
-It would be nice if instead of using indices to access the colors, we could use more human-readable keys. pink -> #ff69b4 | orange -> #ff4500 | cyan -> #00ffff
-colors["cyan"] is way better than colors[2]

More about HASH TABLES
-How can we get human-readability and computer readability? - computers don't know how to find an element at index pink!

The HASH part - to implement a hash table, we will be using an array. In order to look up values by key, we need a way to convert keys into valid array indices. A function that performs this task is called a hash function

[0,1,2]
index 0 = ['red','#eff233']
index 1 = ['blue','#qec567']
index 2 = ['green','#uok5432']

cryptographic hash function - crazy crypto code/algos/and data structures

basic hash function - function that takes data of its size
hash("hello!") returns -62445234892394889
hash("Hello!") returns -7663449394394394
hash("a") returns -123123433523232
hash("sdadadwdawda") returns -1235446463223

what makes a good hash? 
- it has to be FAST! (i.e) constant time
- doesnt cluster outputs at specific indices, but destributes uniformly
- deterministic (same input yields same output)

*BAD EXAMPLE but funny at same time XD*
function slowHash(key) {
  for (var i = 0; i < 10000; i++) {
    console.log("everyday i'm hashing");
  }
  return key[0].charCodeAt(0);
}

or

function randomHash(key) {
  return Math.floor(Math.random() * 1000)
}

Writing our first Hash function
hash("pink", 100) - pink will be in 0-99 indexes

"a".charCodeAt(0) - returns 97
"hi".charCodeAt(0) - returns 104
"hi".charCodeAt(1) - returns 105
"a".charCodeAt(0) - 96 = returns 105
"d".charCodeAt(0) - 96 = returns 4
"z".charCodeAt(0) - 96 = returns 26


let total = 0;
total += "hello".charCodeAt(0) - 96
8 
total += "hello".charCodeAt(1) - 96
13
total += "hello".charCodeAt(2) - 96
25
total += "hello".charCodeAt(3) - 96
37
total += "hello".charCodeAt(0) - 96
52

hash("hello", 11)

13 % 3  = 1
total
52

total % 11
8

10000003232 % 11  = 1
100000032322 % 11  = 0
100000032323 % 11  = 2
1000000323245 % 11  = 1

simple hash function example that works on strings only
*problems with function? only hashes strings and it is not constant time, it is linear in key length
function hash(key, arrayLen) {
  let total = 0;
  for( let char of key) {
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
hash('pink', 10); // 0
hash('orangered', 10) // 7
hash('cyan', 10) // 3


Improving our hash function
function hash(key, arrayLen) {
  let total = 0;
  for(let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

hash("hello",13) //7
hash("goodbye",13) //9
hash("hi",13) //10
hash("cyan",13) //5


===
Dealing with Collisions
Even with a large arraay and a great hash function, collisions are inevitable

There are many strategies for dealing with collisions, but we'll focus on two:
    1. Seperate Chaining - at each index in our array we store values using more sophisticated data structure (e.g. an array or a linked list)

    nested array for darkblue -> 4 and salmon -> 4
    0  1  2  3  4
                [["darkblue", "#00008b"], ["salmon", "#fa8072"]]

    2. Linear Probing - when we find a collision, we search through the array to find the next empty slot.

    unlike with separate chaining, this allows us to store a single key-value at each index.
    0  1  2  3  4
    darkblue -> 4
    salmon -> 4
    tomato -> 4
    darkblue at index 4 will be ["darkblue", "#00008b"]
    salmon at index 4 will see that there is already a value because darkblue is placed there, so salmon will be placed at index 5 ["salmon","#fa8072"]
    tomato at index 4 will see that there is already a value because darkblue is placed there, so it will check index 5 which there is already filled, so it will be placed at the next spot which is index 6 = ["tomato","#ff6347"]

HASH TABLE CLASS
SET 
  1. accepts a key and value
  2. hash the key
  3. stores the key-value pair in the hash table array via separate chaining

GET 
  1. accepts a key 
  2. hashes the key
  3. retrieves the key-value pair in the hash table
  4. if the key isn't found, returns undefined

KEYS
  1. loops through the hash table array and returns an array of keys in the table

VALUES
  1. loops through the hash table array and returns an array of values in the table
*/

class HashTable2 {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    // console.log(ht)
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
   values(){
    let valuesArr = [];
    for(var i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]) {
        for(var j = 0; j < this.keyMap[i].length; j++) {
          if(!valuesArr.includes(this.keyMap[i][j][1]))
          valuesArr.push(this.keyMap[i][j][1])
        }
      }
    }
    return valuesArr;
  }
  keys(){
    let keysArr = [];
    for(var i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]){
        for(var j = 0; j < this.keyMap[i].length; j++) {
          if(!keysArr.includes(this.keyMap[i][j][0]))
          keysArr.push(this.keyMap[i][j][0])
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable2(17);
// console.log(ht.set("maroon","#800000"));
// console.log(ht.set("yellow","#FFFF00"));
// console.log(ht.set("olive","#808000"));
// console.log(ht.set("salmon","#FA8072"));
// console.log(ht.set("lightcoral","#F08080"));
// console.log(ht.set("mediumvioletred","#C71585"));
// console.log(ht.set("plum","#DDA0DD"));
// console.log(ht.get('olive'));
// console.log(ht.get('salmon'));
// console.log(ht.values());
// console.log(ht.keys());

/*
BIG O NOTATION FOR HASH TABLES (Average cases) - I personally thought it was linear and quadratic but I was wrong
  Insert: O(1)
  Deletion: O(1)
  Access: O(1)

A good hash functions spreads its keys all around the array. A bad hash function spreads its keys only in one index

Recap of HASH TABLES
  - Hash  tables are collections of key-value pairs
  - Hash tables can find values quickly given a key
  - Hash tables can add new key-values quickly
  - Hash tables store data in a large array, and work by hashing the keys
  - A good hash should be fast, distribute keys uniformly, and be deterministic
  - Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
*/


//HASH function example from FreeCodeCamp
var hash = (string, max) => {
  var hash = 0;
  for(var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}


let HashTable = function() {

  let storage = [];
  const storageLimit = 14;
  
  this.print = function() {
    // console.log(storage)
  }

  this.add = function(key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

};


// console.log(hash('quincy', 10))

let hasher = new HashTable();
hasher.add('beau', 'person');
hasher.add('fido', 'dog');
hasher.add('rex', 'dinosour');
hasher.add('tux', 'penguin')
// console.log(hasher.lookup('tux'))
hasher.print();



//=======================================================================
/*
GRAPHS 

Objectives - explain what a graph is, compare and contrast different types of graphs and their uses cases in the real world, implement a graph using an adjacency list, traverse through a graph using BFS and DFS, compare and contrast graph traversal algorithms

What is a graph?
  A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. It is a collection of nodes and connections between those nodes ex- nodes abcde all connected together with different lines

uses for graphs
  - social networks - ex- a picture of a a persons facebook friends connections all linked together with lines and dots
  - location / mapping - when you get directions, there are many options with different nodes and google maps will try and give you the fastest route to get there
  - routing algorithms
  - visual hierarchy
  - file system optimizations
  - Everywhere!
  - "Recommendations" - "people also watched on youtube" - "you might also like" - "you may also like"
  - Halo and Borderlands have nodes that both of the games have in common - space, shooter, sci fi, guns  

Essential graph terms
  -Vertex - a node
  -Edge - connection between nodes
  -weighted/unweighted - values assigned to distances between vertices
  -directed/undirected - directions assigned to distanced between vertices. 
    -INSTAGRAM is directed and undirected - if you follow someone you see their content, they have to follow you to see your content
    -FACEBOOK is undirected - if you friend someone, both people see each others content

Storing Graphs: Adjacency Matrix - Representing a Graph
Storing Graphs: Adjacency List - using some sort of hash map

Adjacency List
  +Can take up less space (in sparse graphs)
  +Faster to iterate over all edges
  -Can be slower to lookup specific edge

Adjacency Matrix
  -Takes up more space(in sparse graphs)
  -Slower to iterate over all edges
  +Faster to lookup specific edge

Graph Traversal Uses
  -Peer to peer networking
  -web crawlers
  -finding "closest" matches/recommendations
  -shortest path problems
    -gps navigation
    -solving mazes
    -AI (shortest path to win the game)
*/



class Graph {
  constructor () {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if(!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(x => x !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(x => x !== v1);
  }
  removeVertex(name) {
    while(this.adjacencyList[name].length) {
      let popped = this.adjacencyList[name].pop();
      this.removeEdge(popped,name)
    }

    delete this.adjacencyList[name]
  }
  DFSIterative(vertex) {

    let results = [];
    let list = [];
    let visited = {};
    let popped;

    list.push(vertex);
    visited[vertex] = true;

   

    while(list.length) {
      popped = list.pop();
      results.push(popped)
      this.adjacencyList[popped].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          list.push(neighbor);
        }
      })
    }
    return results;
  }

  DFSRecursive(vertex) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if(!vertex) return null;
      if(!visited[vertex]){
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
          if(!visited[neighbor]){
            return dfs(neighbor)
          }
        })
      }
    })(vertex);

    return result;
  }
  BFS(vertex) {
    let queue = [vertex];
    let result = [];
    let visited = {vertex : true};
    
    while(queue.length) {
      let remove = queue.shift()
      result.push(remove);
      this.adjacencyList[remove].forEach(neighbor => {
        if(!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
      })
    }
    return result;
  }
}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
// console.log(g);
g.DFSRecursive("A");
g.DFSIterative("C");
//======================
var list = new Graph()
list.addVertex("china")
list.addVertex("japan")
list.addVertex("korea")
list.addVertex("australia")

list.addEdge("korea","japan")
list.addEdge("korea","china")
list.addEdge("japan","china")
list.addEdge("japan","australia")

// list.removeEdge("korea","china");
// list.removeVertex("korea");


// console.log(list.DFSRecursive("japan"));
// console.log(list);
// console.log(list.BFS("japan"));


// (function hello(arg){
//   console.log('immediately invoked function ' + arg)
// })('hhh');


/*=============================================================================
Dijkstra's("Dyke" + "Stras") Algorithm

Objectives
  -Understand the importance of Dijkstra's
    -What is it? One of the most famous and widely used algorithms around!
    -It finds the shortest path between two vertices on a graph
    -"What's the fastest way to get from point A to point B?"

  -Why is it useful?
    - GPS - finding the fastest route
    - network routing - finds open shortest path for data
    - biology - use dto model the spread of viruses among humans
    - airline tickets - finding cheapest route to your destination
    - biology - used to model the spread of viruses among humans
    - many other uses!

  -Who was Edsger Dijkstra? A smart dutch programmer who helped advance the field of computer science from an "art" to an academic discipline
  -Implement a weighted graph
  -Walk through the steps of Dijkstra's
  -Implement Diklstra's using a naive priority queue
  -Implement Dijkstra's using a binary heap priority queue
*/

//Let's write a weighted graph
// class WeightedGraph {
//   constructore () {
//     this.adjacencyList = {};
//   }
//   addVertex(vertex){
//     if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//   }
//   addEdge(vertex1, vertex2, weight){
//     this.adjacencyList[vertex1].push({node: vertex2, weight});
//     this.adjacencyList[vertex2].push({node: vertex1, weight});
//   }
// }

// var graph = new WeightedGraph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");


//Now on to Dijkstra's - FInd the shortest path from A to E

/* The Approach
    1. Everytime we look to visit a new node, we pick the node with the smallest knwon distance to visit first,
    2. Once we've moved to the node we're going to visit, we look at each of its neighbors
    3. For each neighboring node, we calculate the distance by summing the total edges that elad to the node we're checking from the starting node.
    4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.
*/

class WeightedGraph {
  constructor() {
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1,vertex2, weight){
      this.adjacencyList[vertex1].push({node:vertex2,weight});
      this.adjacencyList[vertex2].push({node:vertex1, weight});
  }
  Dijkstra(start, finish){
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = [] //to return at end
      let smallest;
      //build up initial state
      for(let vertex in this.adjacencyList){
          if(vertex === start){
              distances[vertex] = 0;
              nodes.enqueue(vertex, 0);
          } else {
              distances[vertex] = Infinity;
              nodes.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
      }
      // as long as there is something to visit
      while(nodes.values.length){
          smallest = nodes.dequeue().val;
          if(smallest === finish){
              //WE ARE DONE
              //BUILD UP PATH TO RETURN AT END
              while(previous[smallest]){
                  path.push(smallest);
                  smallest = previous[smallest];
              }
              break;
          } 
          if(smallest || distances[smallest] !== Infinity){
              for(let neighbor in this.adjacencyList[smallest]){
                  //find neighboring node
                  let nextNode = this.adjacencyList[smallest][neighbor];
                  //calculate new distance to neighboring node
                  let candidate = distances[smallest] + nextNode.weight;
                  let nextNeighbor = nextNode.node;
                  if(candidate < distances[nextNeighbor]){
                      //updating new smallest distance to neighbor
                      distances[nextNeighbor] = candidate;
                      //updating previous - How we got to neighbor
                      previous[nextNeighbor] = smallest;
                      //enqueue in priority queue with new priority
                      nodes.enqueue(nextNeighbor, candidate);
                  }
              }
          }
      }
      return path.concat(smallest).reverse();     
  }
}


class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }
  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
  }
  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild,rightChild;
          let swap = null;

          if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild.priority < element.priority) {
                  swap = leftChildIdx;
              }
          }
          if(rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
              if(
                  (swap === null && rightChild.priority < element.priority) || 
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                 swap = rightChildIdx;
              }
          }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}

class newNode {
  constructor(val, priority){
      this.val = val;
      this.priority = priority;
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");




//====================================================================================================
/* Dynamic Programming - a light introduction - there are literally whole books on this topic, this is just the introduction
Objective 
  -Define what dynamic programming is
  -Explain waht overlapping subproblems are
  -Understand what optimal substructure is
  -Solve more challenging problems using dynamic programming

Dynamic Programming - in general coming up with more optimal solutions
  -"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

Overlapping SupProblems
  -"a problem is said to have overlapping supbroblems if it can be broken down into subproblems which are reused several times"
  -EX - Fibonacci Sequence - "Every number is the sum of the two previous numbers" 1123581321345589

  -"mergesort from previous does not have overlapping subproblems, fibonacci has subproblems where the same functions are essentially ran at multiple times, mergesort has different numbers running in recursion each time"
  mergeSort([10,24,76,55])
  mergeSort([10,24]) mergeSort([76,55])
  mergeSort([10])mergeSort([24])mergeSort([76])mergeSort([55])

Optimal Substructure
  - A problem is said to have optimal substructure if an optimal solution can be constructured from optimal solutions of its subproblems - ex - shortest path from one node to another
*/

//time complexity of this fib recursion problem? - O(2^n). It is worse than O(n^2). So it takes a lot of time and it is a bad and slow algorithm. Essentially anything above fib(50) will crash your chrome browser, the time complexity is terrible.
function fib(number){
  if(number <= 2) return 1;
  return fib(number - 1) + fib(number - 2);
} // the problem with this is that the time complexity is O(2^N), which is really bad, there is way to optimize so its O(N). If you tried fib(50), chrome freezes

//what can we do to improve this example?
//we can do a do a function that has an array of fib numbers, and a for loop to iterate and add new fib numbers into array, and return the last element number of array.
//or we can run the recursive function again, but whilst doing so, we store numbers in an object so the function can look at the number and see if the number is stored, that way we dont have to constantly rerun recursive functions that hit near the base case(time would just take too long).

//Memoization - storing the results of expensive function calls and returning the cached result when the same inputs occur again
function fibMemoized(n, memo = [undefined, 1, 1]) {
  if(memo[n] !== undefined) return memo[n];
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
} // BIG O improves to linear O(n). As N is larger, the time it takes for our algorithm grows in proportion with N, so it is O(n)

// console.log(fibMemoized(50))


//Tabulation: a bottom up approach - storing the result of a previous result in a "table"(usually an array). Usually done using iteration. better space complexity can be achieved using tabulation
function fibTabulated(number) {
  if(number <= 2) return 1;
  let array = [0,1,1];
  for(var i = 3; i <= number; i++){
  array[i] = array[i - 1] + array[i - 2];
  }
  return array[number];
}

// console.log(fibTabulated(5))

//test 
         



function defibTabulated(number) {
  if(number <= 2) return 1;
  let array = [0,1,1];
  for(var i = 3; i <= number; i++){
  array[i] = array[i - 1] + array[i - 2];
  }
  return array[number];
}

// console.log(defibTabulated(5))

//start