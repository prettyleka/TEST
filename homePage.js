const seleniumInfra = require(`./seleniumInfra`)
const sele = new seleniumInfra()//MOFA3 

class homePage {
    constructor(URL) {
        sele.getURL(URL)
    }
    async search(word) {
        try {
            await sele.write(word, "id", "inputSearch")
            await sele.clickElement("id", "inputSearchSubmit")
            console.log("ckicked the search button ")
            if (sele.validURL(word.toLowerCase())) {
                console.log(` yes u r in the ${word} pagr `)
                return true
            } else {
                console.log(` fail: url ${word} not vaild `)
                return false
            }
        }
        catch (error) {
            console.log("got error in search method " + error)
        }
    }

    //============================================================================================================================================================================== 

//------------------------------------------------
async validAdvanceSearch(cakesArr = null , ratesArr = null , date = null , txt1= null  , txt2= null ){
    await sele.clickElement("id" , "myBtn")
    let stringResult = "You have searched the following:"
    let results , newDate
    if(cakesArr){ // Click 'checkbox' button for cakes
        for(let cakeType of cakesArr){ 
            await sele.clickElement("css" , `.cakeTypes[value='${cakeType}']`)
        }
        stringResult+= `\nCake type: ${cakesArr}`
    }
    if(ratesArr){ // Click 'checkbox' button for rates
        for(let cakeRate of ratesArr){
            await sele.clickElement("css" , `.cakeRates[value="${cakeRate}"]`)
        }
        stringResult+= `\nCake ratings: ${ratesArr}`
    }
    if(date){ // Insert date to Date input and change date format for comparing
        await sele.write(date , "xpath" , `//input[@type='date']`)
        let spl = date.includes(".")?date.split("."):date.includes("/")?date.split("/"):date.split("-")
        newDate = spl[2] + "-" + spl[1] + "-" + spl[0]
        stringResult+= `\nDate of upload: ${newDate}`
    }
    if(txt1){ // Insert text to first text input
        await sele.write(txt1 , "id" , "input1")
        stringResult+= `\nWeb pages that have all of these words: ${txt1}`
    }
    if(txt2){ // Insert text to second text input
        await sele.write(txt2 , "id" , "input2")
        stringResult+= `\nWeb pages that have this exact wording or phrase: ${txt2}`
    }
    await sele.clickElement("id" , "myBtnForm") // Click 'Search' Buttons
    results = await sele.getTextFromElement("className" , "searchedItem") // getText from search

    // console.log(results)
    // console.log(stringResult)
    if(results.split(' ').join('') == stringResult.split(' ').join('')){ // Compare between wanted and result search
        console.log("woohoo Well Done!!")
    }else{
        console.log("Nooooo!!!!!!!!")
    }
    await sele.clickElement("className" , "close")
} 



}









// let link = "https://cakes-automation-course.herokuapp.com/index.html"
// const hP = new homePage(link)
// let typeArr = ["Chocolate", "Cheese", "Mousse"]
// let ratingArr = ["0-3", "4", "5"]
// hP.searchAdv(typeArr, ratingArr, "15/10/2019", " cake", "mouseeee")



