const {basicValidation} = require('../index')

const check = {
  "Give valid string": 1,
  "": 1
}

const jsComments = (string) => {

    const stringChecked = basicValidation(string)

    if (stringChecked === "Give valid string" || stringChecked === "") 
        return stringChecked
    
    return /\/\*[\s\S]*?\*\/|\/\/.*/g 
}

const hasJsComments = (string) => {
      
    const pattern=jsComments(string)
  
      return pattern in check 
      ? 
      pattern===""? false: pattern 
      : pattern.test(string)
}

const getJsComments = (string) => {
      
    const pattern=jsComments(string)
  
      return pattern in check 
      ?
      pattern : string.match(pattern)   
}

const delJsComments = (string) => {
    
  const pattern=jsComments(string)
    
    return pattern in check 
      ?
      pattern : string.replace(pattern, '').replace(/\n\s*\n/g, '\n\n')
}

const countJsComments = (string) => {
    
  const pattern=jsComments(string)
    return pattern in check 
      ?
      pattern===""? 0: pattern
      :  string.match(pattern)===null? 0: string.match(pattern).length
}

module.exports = { hasJsComments, getJsComments, delJsComments, jsComments, countJsComments }

// console.log(countJsComments(`var sample    = 0
// `))