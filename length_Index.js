function getlength(str){
    console.log("String is: "+str);
    console.log("Length of the string is: "+str.length);
}
getlength("Hello World");


function findIndexOf(str,target){
    console.log("String is: "+str);
    console.log("Index :"+str.lastIndexOf(target));
}
findIndexOf("Hello World World World","World");

//direct length of string
const abs="vipin my fiend"; 
console.log("vipin my friend is of length :"+abs.length);


//code for element between two index
function elementBetweenIndex(str,startIndex,endIndex){
    console.log("String is: "+str);
    console.log("Element between index "+startIndex+" and "+endIndex+" is: "+str.substring(startIndex,endIndex));//substring ki jagha slice bhi use krte h  
}
elementBetweenIndex("HelloWorld",2,6);

//direct to slice the string
let a="vipin".slice(1,4);
console.log("element between index 1 and 4 is :"+a);
const value="priyanshu saraswat";
let ans=value.slice(1);//riyanshu saraswat
let ans0=value.substring(1,5);//riya
let ans1=value.substr(1,5);//riyan
console.log("slice :"+ans);
console.log("substring :"+ans0);
console.log("substr :"+ans1);