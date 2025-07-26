let x=10;
let y=function()
{
    console.log("This is a named function");
    return x;
}
let z=y();
console.log("Value of z is "+z);

let funName=function()
{
    console.log("named function");
}
funName();
//annonymous function
let addition=function(a,b)
{
    let c=a+b;
    return c;
}
console.log(addition(10,20));


//arrow function
const funcName2=(a,b) => a+b;
    console.log(funcName2(4,3));


const greet= name=>`Hello, ${name}`;
console.log(greet("shefali"));