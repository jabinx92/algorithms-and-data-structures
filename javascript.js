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
  facoriteNumbers: [1,2,3,4]
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
    //charCount("aaaa"); // {a:4}
    //charCount("hello"); // {h:1,e:1, l:2, o:1}
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
      if(correctIndex === -1) {
        return false;
      }
      console.log(arr2)
      arr2.splice(correctIndex, 1)
    }
    return true;
  }

  // same([1,2,3,2],[9,1,4,4]);

  // same([1,2,3], [4,1,9]) //true
  // same([1,2,3], [1,9]) //false
  // same([1,2,1], [4,4,1]) //false(must be same frequency)


//refactored using frequency counter(object) - O(n)
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

// console.log(same([1,2,3,2,5], [9,1,4,4,11]))

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

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10 because 2+8=10
// maxSubarraySum([1,2,5,2,8,1,5], 4) // 17 because 2+5+2+7=17
// maxSubarraySum([4,2,1,6],1) // 6 because 6=6
// maxSubarraySum([],4) //null

//refactor - 
function maxSubarraySum(arr,num) { //time complexity - O(n)
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
    console.log(maxSum) //3
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

console.log(sameFrequency(182,281)) //true
console.log(sameFrequency(34, 14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22, 222)) //false

//------------------------------------------------------------------------------

function areThereDuplicates(...list) {
  
}

areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,2) //true
areThereDuplicates('a','b','c','a') //true