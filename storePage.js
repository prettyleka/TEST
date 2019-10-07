const seleniumInfra = require(`./seleniumInfra`)
const SeleniumInfra = new seleniumInfra()
class storepage {

    constructor(URL) {
        SeleniumInfra.getURL(URL)
    }
    async checkCurrentday() {
        try {
            // lines 14-16 to know which  day today 
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let date = new Date();
            let dayName = days[date.getDay()];

            // line 19 crat a web element array with class "today"
            let webElementArr = await SeleniumInfra.findElementListBy("className", "today")
            let webElementDay

            // loop to the array that i found inline 19 and get the text for each i 
            // if statment : check that the text of the web element is equal to today and chek if its bold by css value = 700 
            for (let i = 0; i < webElementArr.length; i++) {
                webElementDay = await SeleniumInfra.getTextFromElement(null, null, webElementArr[i])
                if ((webElementDay == dayName) && (await webElementArr[i].getCssValue("font-weight") == 700)) {
                    console.log(`yes the ${webElementDay} in bold `);
                }
            }
        } catch (error) {
            console.log("got error in search checkCurrentday  " + error)

        }
    }


}
 module.exports = storepage


