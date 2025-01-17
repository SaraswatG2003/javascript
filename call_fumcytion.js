function sum(num1, num2, fnToCall){
    let result= num1 + num2;
  return  fnToCall(result) ;
}
function displayResult(data){
    console.log("The sum of the two numbers is:" + data);
}

function displayResultPassive(data){
    console.log("The sum of the numbers is:" + data);
}
// you are allowed to call one function after this
// const ans = sum(2, 3); // error
const ans = sum(2, 3,displayResult); // callbacks
console.log(sum(2, 3,displayResult)); // undefined
sum(2, 3,displayResultPassive); 