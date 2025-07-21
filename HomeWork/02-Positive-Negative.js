function isPositiveOrNegative(number)
{
    if(number > 0)
    {
        console.log("Positive Number");
    }
    else if(number === 0)
    {
        console.log("Number is 0");
    }
    else if(number < 0)
    {
        console.log("Negative Number");
    }
    else{
        console.log("Enter proper number");
    }
}
isPositiveOrNegative(15);