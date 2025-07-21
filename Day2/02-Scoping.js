var genderType="Male"
function printGender()
{
    let colour="brown";
    if(genderType.startsWith("Female"))
    {
        var age=30;
        let colour="pink";
        console.log("shefa has her fav colour"+colour);

    }
    else{
        var age=32;
         console.log("Prasad has her fav colour"+colour);
    }
    console.log(age);
}
printGender();
console.log(genderType);

let x=10;
x+=5;
console.log(x);

x-=5;
console.log(x);

x*=5;
console.log(x);

x/=5;
console.log(x);