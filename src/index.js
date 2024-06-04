
const basicValidation = (string) => {

     if(typeof string !== 'string'){
        return "Give valid string"
    }
     if (!string) 
        return "";
     return 'ok'
}

module.exports = { basicValidation }

const removeAllWhiteSpacesExceptOnesInBetween = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    return string.replace(/\s+/g,' ').trim();
}

const removeNonAlphaNumericExceptSpacesInBetween = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    return removeAllWhiteSpacesExceptOnesInBetween(string.replace(/[^a-zA-Z\d\s]/g,''));
}

const capitalizeString = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    return string.split(' ').map((word) => word===""? word: word[0].toUpperCase() + word.slice(1)).join(' ');
}

const countWordsInString = (string) => {
    
    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string") 
        return stringCheck
    else if (stringCheck==="")   
        return 0

    const word = removeAllWhiteSpacesExceptOnesInBetween(string)

    return word===""? 0: word.split(" ").length;
}

const reverseString = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    return string.split("").reverse().join("");
}

const reverseWordsInString = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    const wordsAndSpaces = string.match(/\S+|\s+/g) || [];

    return wordsAndSpaces.reverse().join("");
}

const truncateString = (string, num=20) => {
    
    const stringCheck = basicValidation(string)

    if (stringCheck === "Give valid string" || stringCheck==="") 
        return stringCheck

    return string.length<=num ? string : string.substring(0, 20) + "...";
}

// Import boolean functions
const {isCamelCase, isSnakeCase, isKebabCase} = require('./boolean/bool.js');

const snakeString = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    const filterString = string.replace(/[^a-zA-Z\d\s_]/g,'').replace(/\s+/g,' ').trim()
    if (filterString==="") return filterString

    return filterString.split(" ").map(word=>{
        if (isSnakeCase(word)) return word
        return word.toLowerCase()
    }).join("_");
    
}

const kebabString = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    const filterString = string.replace(/[^a-zA-Z\d\s-]/g,'').replace(/\s+/g,' ').trim()
    if (filterString==="") return filterString

    return filterString.split(" ").map(word=>{
        if (isKebabCase(word)) return word
        return word.toLowerCase()
    }).join("-");
}

const camelString = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    const filterString = string.replace(/[^a-zA-Z\d\s]/g,'').replace(/\s+/g,' ').trim()
    if (filterString==="") return filterString
    
    const changed = isCamelCase(filterString.split(" ")[0]) 
    const a = changed ? filterString.split(" ")[0] : filterString.split(" ")[0].toLowerCase()
    
    const b = filterString.split(" ").slice(1).map(word=>{
        return word[0].toUpperCase()+ word.slice(1).toLowerCase()    
    }).join('')
    
    return a+b
}

module.exports = { 

    ...module.exports,
    removeAllWhiteSpacesExceptOnesInBetween,
    removeNonAlphaNumericExceptSpacesInBetween,
    capitalizeString,
    countWordsInString,
    reverseString,
    reverseWordsInString,
    truncateString,
    snakeString,
    kebabString,
    camelString,
    isCamelCase,
    isSnakeCase,
    isKebabCase
}

const {delJsComments, getJsComments, hasJsComments,countJsComments} = require('./regex/jsComment.js');
module.exports = {...module.exports, delJsComments, getJsComments, hasJsComments,countJsComments}

const {delCssComments, getCssComments, hasCssComments,countCssComments} = require('./regex/cssComment.js');
module.exports = {...module.exports, delCssComments, getCssComments, hasCssComments,countCssComments}

const {urlValidation,getQueryParams,getQueryString}=require('./url/url.js');
module.exports = {...module.exports,urlValidation,getQueryParams,getQueryString}

const { hasIpAddress, getIpAddresses, delIpAddresses, countIpAddresses }= require('./regex/ipAddress.js');
module.exports = {...module.exports, hasIpAddress, getIpAddresses, delIpAddresses, countIpAddresses}

const  { hasEmail, getEmails, delEmails, countEmails} = require('./validation/email.js');
module.exports = {...module.exports, hasEmail, getEmails, delEmails, countEmails}