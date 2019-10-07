const seleniumInfra = require(`./seleniumInfra`)
const  seleniumInfra = new seleniumInfra()//MOFA3 

class Product {
    constructor(URL) {
        seleniumInfra.getURL(URL)
    }
     
    async pressDown(cakeBeforeArr, cakeAfterArr) {
            try{
​
        await seleniumInfra.clickElement("id", "arrow-down")
​
        let leftUP = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[1]/th[1]/div/h3")
​
        let rightUp = await seleniumInfra.getTextFromElement("xpath" ,"//*[@id='productsTable']/tbody/tr[1]/th[2]/div/h3")
​
        let leftDown = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[2]/th[1]/div/h3")
​
        let rightDown = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[2]/th[2]/div/h3")
​
​
        if (cakeBeforeArr[0] == leftUP && cakeBeforeArr[1] == rightUp && cakeAfterArr[0] == leftDown && cakeAfterArr[1] == rightDown) {
            console.log("button down is work")
        }
        else {
            console.log("lior make demage")
        }
​
        await seleniumInfra.close()
    }
    catch(error) {
        console.error(  "got error in pressdown func "+ error)
    }
    }
    
​
​
    async pressUP( cakeAfterArr,cakeBeforeArr,) {
        try{
        await seleniumInfra.clickElement("id", "arrow-up")
​
        let leftUp = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[1]/th[1]/div/h3")
​
        let rightUp = await seleniumInfra.getTextFromElement("xpath" ,"//*[@id='productsTable']/tbody/tr[1]/th[2]/div/h3")
​
        let leftDown = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[2]/th[1]/div/h3")
​
        let rightDown = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[2]/th[2]/div/h3")
​
​
        if (cakeAfterArr[0] == leftDown&& cakeAfterArr[1] == rightDown && cakeBeforeArr[0] == leftUp && cakeBeforeArr[1] == rightUp) {
            console.log("button up is work")
        }
        else {
            console.log("lior make demage")
        }
​
        await seleniumInfra.close()
​
    }
​
        catch(error) {
            console.error( "got erro in press up func " +error)
        }
​
​
​
​
​
​
}}
​
​