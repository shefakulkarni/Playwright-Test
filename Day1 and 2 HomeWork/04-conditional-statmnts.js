function launchBrowser (browserName)
{
    if(browserName==="chrome")
    {
       
        console.log("BrowserName:"+browserName);

    }
    else{
         console.log("BrowserName:"+browserName);
    }

}

function runTests(testType)
{
        switch(true)
        {
            case (testType==="smoke"):
                console.log("smoke");
                break;
            case (testType==="sanity"):
                 console.log("sanity"); 
                break;
            case (testType==="regression"):
                 console.log("regression"); 
                break;
            default :
                 console.log("smoke"); 
                break;

        }
}

launchBrowser("Chrome");
runTests("smoke")