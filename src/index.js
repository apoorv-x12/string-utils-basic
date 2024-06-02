
const basicValidation = (string) => {

     if(typeof string !== 'string'){
        return "Give valid string"
    }
     if (!string) 
        return "";
     return 'ok'
}

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

    return word===""? 0: removeAllWhiteSpacesExceptOnesInBetween(string).split(" ").length;
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

    return string.split(" ").reverse().join(" ");
}

const truncateString = (string, num=20) => {
    
    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    return string.length<=num ? string : string.substring(0, 20) + "...";
}

const snakeString = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    const filterString = removeNonAlphaNumericExceptSpacesInBetween(string)
    
    return filterString.split(" ").map(word=>word.toLowerCase()).join("_");
    
}

const kebabString = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    const filterString = removeNonAlphaNumericExceptSpacesInBetween(string)
    
    return filterString.split(" ").map(word=>word.toLowerCase()).join("-");
}

const camelString = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck

    const filterString = removeNonAlphaNumericExceptSpacesInBetween(string)

    const a = filterString.split(" ")[0].toLowerCase()
    console.log(a)
    const b = filterString.split(" ").slice(1).map(word=>word[0].toUpperCase()+ word.slice(1).toLowerCase()).join('')
    return a+b
}

module.exports = { 
    
    basicValidation,
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
  
}
const {delJsComments, getJsComments, hasJsComments} = require('./regex/jsComment.js');
module.exports = {...module.exports, delJsComments, getJsComments, hasJsComments}

// const {isCamelCase, isSnakeCase, isKebabCase} = require('./boolean/bool.js');
// module.exports = {...module.exports,isCamelCase, isSnakeCase, isKebabCase}

