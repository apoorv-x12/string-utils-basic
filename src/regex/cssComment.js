const {basicValidation} = require('../index')

const check = {
  "Give valid string": 1,
  "": 1
}

const cssComments = (string) => {

    const stringChecked = basicValidation(string)

    if (stringChecked === "Give valid string" || stringChecked === "") 
        return stringChecked
    
    return /(\/\*)(.|\r|\n)*?(\*\/)/g 
}

const hasCssComments = (string) => {
      
    const pattern=cssComments(string)
  
      return pattern in check 
      ? 
      pattern===""? false: pattern 
      : pattern.test(string)
}

const getCssComments = (string) => {
      
    const pattern=cssComments(string)
  
      return pattern in check 
      ?
      pattern : string.match(pattern)   
}

const delCssComments = (string) => {
    
  const pattern=cssComments(string)
    
    return pattern in check 
      ?
      pattern : string.replace(pattern, '').replace(/\n\s*\n/g, '\n\n')
}

const countCssComments = (string) => {
    
  const pattern=cssComments(string)
    
    return pattern in check 
      ?
      pattern===""? 0: pattern
      : 
      string.match(pattern)===null? 0: string.match(pattern).length
}

module.exports = { cssComments, hasCssComments, getCssComments, delCssComments, countCssComments }

// console.log(countCssComments(`var sample    = 0;
// var new       = 1;
// var my_string = \"Hello World!\";

// // This is a comment!

// function do_stuff(){
// 	alert(my_string);//another comment
// }

// /* This is
//  * a multiline
//  * comment!
//  */

// var something;

// /* programs/applications 16/*(4*2)=2 */

// if(sample > new){
//   do_stuff(/* arguments here */);
// }

// //

// /**/
// `))