const {basicValidation} = require('../index')

const isKebabCase = (string) => {
    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck===""? false : stringCheck
    
    const kebabCaseRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

    return kebabCaseRegex.test(string);
}

const isCamelCase = (string) => {

    const stringCheck = basicValidation(string)
    if (stringCheck==="Give valid string" || stringCheck==="")
        return stringCheck===""? false : stringCheck
    
    const camelCaseRegex = /^[a-z]+(?:[A-Z0-9][a-z0-9]*)*$/;

    return camelCaseRegex.test(string);

}

const isSnakeCase = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="")
       return stringCheck===""? false : stringCheck

    const snakeCaseRegex = /^[a-z0-9]+(?:_[a-z0-9]+)*$/;

    return snakeCaseRegex.test(string);
}

module.exports = {
    isKebabCase ,
    isCamelCase ,
    isSnakeCase
}