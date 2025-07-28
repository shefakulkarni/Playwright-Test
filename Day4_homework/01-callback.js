 let browser = "Chrome";
function checkBrowserVersion(browserName,displayVersion)
{
    console.log("the browser is available "+browserName)

    displayVersion()

}
function displayVersion()
{
    

        setTimeout(() => {
        console.log("Browser has launched - 3.8.11" + browser);
        }, 2000);

}
    
checkBrowserVersion(browser,displayVersion);