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
console.log(t1);
addUpTo(1000000000);
var t2 = performance.now();
console.log(t2);

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//https://rithmschool.github.io/function-timer-demo/;


//example
function addUpto(n){
  let total = 0;
  for(let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo1(n) {
  return n * (n + 1) / 2;
}

