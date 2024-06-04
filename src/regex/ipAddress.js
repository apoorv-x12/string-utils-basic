const { basicValidation } = require('../index');

const check = {
    "Give valid IP address": 1,
    "": 1
}

const ipAddressPattern = /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/gi;

const ipAddressValidation = (string) => {
    const stringChecked = basicValidation(string);
    if (stringChecked !== "Give valid string" && stringChecked !== "") {
        return ipAddressPattern;
    }
    return stringChecked;
}

const hasIpAddress = (string) => {
    const pattern = ipAddressValidation(string);
    return pattern in check ?
        (pattern === "" ? false : pattern) :
        pattern.test(string);
}

const getIpAddresses = (string) => {
    const pattern = ipAddressValidation(string);
    return pattern in check ?
        pattern :
        string.match(pattern)===null?[]:string.match(pattern);
}

const delIpAddresses = (string) => {
    const pattern = ipAddressValidation(string);
    return pattern in check ?
        pattern :
        string.replace(pattern, '').replace(/\n\s*\n/g, '\n\n');
}

const countIpAddresses = (string) => {
    const pattern = ipAddressValidation(string);
    return pattern in check ?
        (pattern === "" ? 0 : pattern) :
        (string.match(pattern) === null ? 0 : string.match(pattern).length);
}

module.exports = { hasIpAddress, getIpAddresses, delIpAddresses, countIpAddresses, ipAddressValidation }


// console.log(countIpAddresses(`192.168.0.1
// 255.255.256.0
// Invalid IP
// `))
