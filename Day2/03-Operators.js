let x=10;
x+=5;
console.log("Addition "+x);

x-=5;
console.log("Subtraction "+x);

x*=5;
console.log("Multiply "+x);

x/=5;
console.log("Divide "+x);

//Postfix increment and decrement
let y=10;
console.log(y++); // prints 10, then increments y to 11
console.log(y); // prints 11
console.log(++y); //prints 12, then increments y to 12
console.log(y);//prints 12

//postfix decrement
let z=10;
console.log(z--); // prints 10, then decrements y to 9
console.log(z); // prints 9
console.log(--z); //prints 8, then decrements y to 8
console.log(z);//prints 8


//strict equality and loose equality
console.log(1==="1"); //false different datatypes
console.log(1=="1");//true
console.log("chrome"==="Chrome");//differentcase so false 
console.log("chrome"=="Chrome");//false
console.log(1==true);// true
console.log(1===true);//false


