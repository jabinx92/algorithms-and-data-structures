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

console.log(same([1,2,3,2,5], [9,1,4,4,11]))
