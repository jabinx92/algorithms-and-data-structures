
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  
  // var t1 = performance.now();
  // console.log(t1);
  console.log(addUpTo(1000000000));