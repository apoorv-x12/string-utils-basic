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
      pattern : pattern.test(string)
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

module.exports = { hasJsComments, getJsComments, delJsComments, jsComments }

console.log(hasJsComments(`var sample    = 0;
var new       = 1;
var my_string = \"Hello World!\";

// This is a comment!

function do_stuff(){
	alert(my_string);//another comment
}

/* This is
 * a multiline
 * comment!
 */

var something;

/* programs/applications 16/*(4*2)=2 */

if(sample > new){
  do_stuff(/* arguments here */);
}

//

/**/
`))