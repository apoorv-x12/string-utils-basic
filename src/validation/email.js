const { basicValidation } = require('../index');

const check = {
    "Give valid string": 1,
    "": 1
};

const emailPattern = /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})/g;

const emailValidation = (string) => {
    const stringChecked = basicValidation(string);
    if (stringChecked !== "Give valid string" && stringChecked !== "") {
        return emailPattern;
    }
    return stringChecked;
};

const hasEmail = (string) => {
    const pattern = emailValidation(string);
    return pattern in check ?
        (pattern === "" ? false : pattern) 
        :
        pattern.test(string);
};

const getEmails = (string) => {
    const pattern = emailValidation(string);
    return pattern in check ?
        pattern ? pattern : [] 
        :
        string.match(pattern) === null ? [] : string.match(pattern);
};

const delEmails = (string) => {
    const pattern = emailValidation(string);
    return pattern in check ?
        pattern :
        string.replace(pattern, '').replace(/\n\s*\n/g, '\n\n');
};

const countEmails = (string) => {
    const pattern = emailValidation(string);
    return pattern in check ?
        (pattern === "" ? 0 : pattern) :
        (string.match(pattern) === null ? 0 : string.match(pattern).length);
};

module.exports = { hasEmail, getEmails, delEmails, countEmails, emailValidation };

// console.log(delEmails("my email is as.Xw@example.com and 9F5Xw@example.com is my email"))