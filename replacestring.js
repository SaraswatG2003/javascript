function replaceString(str, search, replace) {
  console.log("String is: " + str);
    console.log("Replaced string is: " + str.replace(search, replace));
} 
replaceString("Hello World", "World", "Vipin");


//direct replace string
const str="WorldHello World"; //agar search word multiple times h to first occurance hi replace hoga
console.log(str.replace("World","Vipin"));

//agar search word nhi h to same string return kr dega
const str1="Hello"; 
console.log(str1.replace("World","Vipin"));

//agar search word multiple times h to all occurance replace hoga
const value="hi,my,name,is,Priyanshu,Saraswat";
const words=value.replace(/,/g," ");
console.log(words); 

//string ko split krke array me convert krna
const value1="hi,my,name,is,Priyanshu,Saraswat";
const words1=value1.split(",");
console.log(words1);

//space hatana beginniiing or end se
const v="  Priyanshu Saraswat      ";
console.log(v);
console.log(v.trim());