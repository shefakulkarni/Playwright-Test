//task1
function userProfile(name)
{
    console.log(`Hello ${name}`)
}
userProfile("shefali");
//task2
const double=(a) => 
{
    console.log("Value of a"+a);

}
double(3.7);
//task3
 let alert= function()
 {
    setTimeout(()=>{
    console.log("This message is delayed by 2 seconds");
    },2000)
 }
 alert();


 //task4
 function getUserdata(msg,callBack)
 {
    setTimeout(()=>{
    console.log("This message is delayed by 2 seconds "+msg);
    },2000)
    callBack();
 }
 function callBack()
 {
    console.log("call back function");
 }

 getUserdata("New msg",callBack);
