function  gradeCalculation(score)
{
    var grade='pass';
    var grade2='fail';
    switch(true)
    {
        case (score>90):
        console.log("Great score "+score+","+grade);
        break;
        case (score>=80 && score<=90):
        console.log("Good score "+score+","+grade);
        break;
        case (score>=60 && score<=80):
        console.log("Can do better "+score+","+grade);
        break;
        case (score>=40 && score<=60):
        console.log("just passed "+score+","+grade);
        break;
        case (score<35):
        console.log("Fail "+score+","+grade2);
        break;        
        default:
         console.log("Score not valid");
         break;


    }
}
gradeCalculation(80);