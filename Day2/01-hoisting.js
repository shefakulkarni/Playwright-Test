var x=10;
console.log(x);//10

console.log(y);
var y=5;   //undefined

/*console.log(z);
let z=5;*/  //throws exception


/*console.log(z);
const z=5; //throws exception*/


console.log(newFunc());

function newFunc()
{
    
    let a = 10;
    const b = 19;
    return a + b; 


}


console.log(newFunc()); 
function newFunc() {
    console.log(a); // undefined (due to hoisting of 'var a')
    console.log(b); // ReferenceError: Cannot access 'b' before initialization

    var a = 10;
    const b = 19;

    return "Done";
}

