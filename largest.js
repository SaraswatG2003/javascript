function findBiggestElement(arr) {
    if (arr.length == 0) {
      return null; 
    }
  
    let biggest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= biggest) {
        biggest = arr[i];
      }
    }
    return biggest;
  }
  const numbers = [1,22,45,12,3,67,89,10,23,56,78,90,34,56,78,90 ];
  const biggestNumber = findBiggestElement(numbers);
  console.log("The biggest element in the array is:"+biggestNumber);