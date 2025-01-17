function calculateArithmetic(a, b, arithemeticFinalFunction) {//call back function
    const ans = arithemeticFinalFunction(a, b);
    return ans;
  }


function sum(a,b){
    return a+b;
}
function mean(a,b){
    return (a+b)/2;
} 

const value = calculateArithmetic(2, 3, mean);
console.log(value);