/* BIG O NOTATION
Time Complexity and Space complexity
*/

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
// console.log(t1);
addUpTo(1000000000);
var t2 = performance.now();
// console.log(t2);

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
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

//Almost everytthing that you do in programming involves some kind of algorithm!
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
          char = char.toLowerCase()
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
// function same(arr1, arr2){
//   if(arr1.length !== arr2.length){
//       return false;
//   }
//   let frequencyCounter1 = {}
//   let frequencyCounter2 = {}
//   for(let val of arr1){
//       frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//   }
//   for(let val of arr2){
//       frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
//   }
//   // console.log(frequencyCounter1);
//   // console.log(frequencyCounter2);
//   for(let key in frequencyCounter1){
//       if(!(key ** 2 in frequencyCounter2)){
//           return false
//       }
//       if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//           return false
//       }
//   }
//   return true
// }

// console.log(same([1,2,3,2,5], [9,1,4,4,11]))
//===================================================

//Big O Time complexity - O(n) linear
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
// console.log(validAnagram('hello', 'olleh')) //false
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
  while(left<right) {
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


//big o - time - O(n), space - O(n)
function countUniqueValues(arr){
let pushedArray = [];

for(var i = 0; i < arr.length; i++) {
  let pointer1 = arr[i];
  let pointer2 = arr[i+1];
  if(pointer1 !== pointer2){
    pushedArray.push(pointer1);
    // console.log(pushedArray);

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
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10 because 2+8=10
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17 because 2+5+2+7=17
// console.log(maxSubarraySum([4,2,1,6],1)) // 6 because 6=6
// console.log(maxSubarraySum([],4)) //null

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
//Divide and conquer - this pattern involves diviring a data set into smaller chunks and then repeating a process with a subset of data. this pattern can tremendously decrease time complexity

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
  // console.log(split1);
  // console.log(split2)
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
  console.log(argList)
  //loop the array to see if the current index is the same as 
  for(var i = 0; i < argList.length; i++) {
    console.log(argList[i], argList[i + 1])
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
// console.log(averagePair([1,2,3], 2.5)) //true (2+3 /2 = 2.5)
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) //true


//------------------------------------------------------------------------------
// =======

//alternate solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){ //0 < 2
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
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
    }else {
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
//given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecuvitve elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100,300] is not.

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
     console.log(total)
  }
  let currentTotal = total; //300
  console.log(currentTotal)
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

// console.log([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// console.log([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray

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
// function factorial(num) {
//   let total = 1;
//   for(let i = num; i > 1; i--) {
//     total *= i
//   }
//   return total;
// }

// console.log(factorial(3))

//writing factorial recursively
// function factorial(num){
//   if(num === 1) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(5))

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

collectOddValues([1,2,3,4,5])

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


collectOddValues([1,2,3,4,5])
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
function factorial(num) {
  //base case
  if(num === 0) return 1;
  return num * factorial(num - 1)
}

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
    empty *= input[0]

    help(input.slice(1))
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
console.log(str)

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
  console.log(stringCopy);

  let copy = string.split('')
  console.log(copy)

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

console.log(palindrome)
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

//objective - implement bubble sory, selection sort, and insertion sort

//javascript has a sort method, but it does not always work 100%
// ['steel', 'colt','data structures','algorithms'].sort();
//['algorithms','colt','data structures','steele']
// [6,4,15,10].sort();
//[10,15,4,6] // WRONG

function sortNumbers (num1, num2) {
  return num1 - num2
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

// console.log(selectionSort([5,4,3,2,1]))
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
//continue to the next element and if it is in the incorrect order, iterate thorugh the sorted portion (i.e. the left side) to place the element in the correct place.

function insertionSort(array){
  for(var i = 1; i < array.length; i++){
    var currentVal = arr[i]
    for(var j = i - 1; j >= 0; j--) {
      if(array[i] < array[j-1] && array[i] > array[j-2]) {
        let temp = array[i];
        array[i] = array[j-1]
        array[j-1] = temp;
      }
    }
  }
  return array;
}

console.log(insertionSort([5,1,3,2,4]))

//time complexity - worst case O(n squared)