const {basicValidation} = require('../index')

const check = {
  "Give valid string": 1,
  "": 1
}

const urlValidation = (string) => { 

    const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string") 
        return stringCheck
    else if (stringCheck==="") 
        return false
    else {
        const pattern=/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(:[0-9]{1,5})?(\/[\w.-]*)*\/?(\?[;&a-z\d%_.~+=-]*)?(\#[\w-]*)?$/i
        return pattern.test(string)
    }
}

const getQueryParams = (string) => {
 const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck===""? {} : stringCheck

    const ans={'isUrlProper':false,qparams:{}}

    if (urlValidation(string)=== true) 
        ans['isUrlProper']=true

    const regex=/([^=&?]+)=([^&]+)/g
    const ar=string.match(regex)
    if (ar===null)
        return ans

    ar.forEach((x)=>{
        const a=x.split('=')
        ans.qparams={...ans.qparams,[a[0]]:a[1]}
    })

    return ans
}

const getQueryString = (string) => {    
const stringCheck = basicValidation(string)

    if (stringCheck==="Give valid string" || stringCheck==="") 
        return stringCheck===""? "" : stringCheck

    const ans={'isUrlProper':false,queryString:''}

    if (urlValidation(string)=== true) 
        ans['isUrlProper']=true

    const regex=/[\?&](\w+)=(\w+)/g
    const ar=string.match(regex)
    if (ar===null)
        return ans
    
    ans.queryString=ar.join('')
    
    return ans
}

module.exports = {urlValidation,getQueryParams,getQueryString}