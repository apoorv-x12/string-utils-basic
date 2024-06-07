const { basicValidation } = require('../index');

const check = {
    "Give valid string": 1,
    "": 1
};

const datePattern = /\d{4}[-/]\d{2}[-/]\d{2}|(?:\d{1,2}[-/])?\d{1,2}[-/]\d{2,4}|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2}(?:st|nd|rd|th)?,\s+\d{4}/;

const dateValidation = (string) => {
    const stringCheck = basicValidation(string);
    if (stringCheck in check)
         return stringCheck === "" ? false : stringCheck;
    return datePattern.test(string);
}
// console.log(dateValidation("2020/01/01"))

module.exports = { dateValidation }