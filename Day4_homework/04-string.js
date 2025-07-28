var string2="Hello World"
var space_index;
var string1=" ";
var count=0;
for(let i=0;i<string2.length;i++)
{
    if(string2.charAt(i)===" ")
    {
         space_index=i;
    }
}
//console.log(space_index);
for(let i=space_index+1;i<string2.length;i++)
{
    string1=string1+string2.charAt(i);
    count++;

}

console.log(string1);
console.log(count);

//OR
var string3="Hello World"
const splitword=string3.split(" ")
console.log(splitword[splitword.length-1]);
let count1 = splitword[splitword.length-1].length;
console.log(count1);

let s = " fly me to the moon";
let splitword2=s.split(" ")
console.log(splitword2[splitword2.length-1]);
let count2 = splitword2[splitword2.length-1].length;
console.log(count2);

function isPalindrome(s1,s2)
{
    let result ="";
    for(let i=s1.length; i>=0;i--)
    {
         result=result+s1.slice(i,i+1)
    }
    //console.log(result);
    if(s2===result)
    {
        console.log("it is an anagram")
    }
    else
    {
         console.log("it is not an anagram")
    }
}

isPalindrome('dod','dod')

function isAnagram(s3,s4)
{
  
    const st3 = s3.replace(/\s+/g, '').toLowerCase();
     const st4 = s4.replace(/\s+/g, '').toLowerCase();

     
    const sortedStr1 = st3.split('').sort().join('');
    const sortedStr2 = st4.split('').sort().join('');

        return sortedStr1 === sortedStr2;
    

}
console.log(isAnagram("silent","listen"));
console.log(isAnagram('hello', 'world'));