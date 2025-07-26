let firstName="Shefali"
let username="Prasad"

//literal way of representation--stack memory

let firstName1= new String("Shefali");
let userName1=new String("Prasad");
//object way of declarartion-Heap memeory

//String methods

//escape sequance
let testType='it\'s a regresssion Type';
console.log(testType);


let testType1='Hello This is a \"double quote\"';
console.log(testType1);

//concatenation
let testcaseId=123;
let testcaseName="Test case"

let result=testcaseId.toString().concat(testcaseName);
console.log(result);

//OR

let result2=testcaseName +" "+testcaseId+" "+"passed in last execution";
console.log(result2);

//template literal
let rollNo=24;
let result3=`My rollNo is ${ rollNo } `;
console.log(result3);

//slice
let string1="Playwright";
let result4=string1.slice(2,4);
let result5=string1.slice(-2,-4);
let result6=string1.slice(-4,-2);
let result7=string1.slice(4,2);
let result8=string1.slice(-4);
let result9=string1.slice(6);

console.log("4"+result4);
console.log("5"+result5);
console.log("6"+result6);
console.log("7"+result7);
console.log("8"+result8);
console.log("9"+result9);

console.log("Substring method");
//substring
 result4=string1.substring(2,4);
 result5=string1.substring(-2,-4);
 result6=string1.substring(-4,-2);
 result7=string1.substring(4,2);
 result8=string1.substring(-4);
 result9=string1.substring(6);

console.log("4"+result4);
console.log("5"+result5);
console.log("6"+result6);
console.log("7"+result7);
console.log("8"+result8);
console.log("9"+result9);

//String reversal
let string2="testLeaf";
let result10="";
for(let i=string2.length; i>=0;i--)
{
    result10=result10+string2.slice(i,i+1)
}
console.log("Reverse "+result10);


//length - starts with 1 - the length of courseName is 10
//index - starts with 0 - the index of "t" is 9


//charAt()

let courseName="Programming";
console.log(`The charAt of 2 of the string is ${courseName.charAt(2)}`);


//indexOf()

console.log(`The indexOf of a ${courseName.indexOf('a')}`);


