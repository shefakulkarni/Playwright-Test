function findNumberType(number)
{
if(number>0)
{
    console.log("Positive value");

}
else if(number===0){
         console.log("0 value");
    }
    else if(number<0){
         console.log("Negative value");
    }
    else{
        console.log("Check Your value");
    }


}
findNumberType(100);

//switch case
function findNumberType1(number)
{
    switch (true) {
        case (number > 0):
            console.log("Positive value");
            break;
        case (number === 0):
            console.log("0 value");
            break;
        case (number < 0):
            console.log("Negative value");
            break;
        default:
            console.log("Check Your value");
    }
}
findNumberType(-1);

let Day="Sunday"
function dayOfWeek(Day)
{
 
    switch (true) {
        case (Day === "Monday"):
            console.log("Start Of Week");
            break;
        case (Day === "Friday"):
            console.log("Weekend is near");
            break;
        default:
            console.log("Wohoo!! Sunday");
    }
}
dayOfWeek("Sunday");