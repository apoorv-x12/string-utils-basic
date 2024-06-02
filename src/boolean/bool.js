const {basicValidation,kebabString,camelString,snakeString} = require('../index')

const isKebabCase = (string) => {
    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck
    
    return kebabString(string)===string
}

const isCamelCase = (string) => {

    const stringCheck = basicValidation(string)
    if (stringCheck==="Give valid string" || stringCheck==="")
        return stringCheck

    return camelString(string)===string
}

const isSnakeCase = (string) => {

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="")
        return stringCheck

    return snakeString(string)===string
}

module.exports = {
    isKebabCase ,
    isCamelCase ,
    isSnakeCase
}