// 📦 Importing basic validation function from index file
const { basicValidation } = require('../index');

// 🔍 Check object to validate emoji patterns
const check = {
    "Give valid emoji pattern": 1,
    "": 1
}

// 😀 Regex pattern for matching emojis
const emojiPattern = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{1FB00}-\u{1FBFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{2300}-\u{23FF}]|[\u{2B50}-\u{2B55}]|[\u{3297}-\u{3299}]|[\u{1F004}]|[\u{1F0CF}]|[\u{1F1E6}-\u{1F1FF}]/gu;

// 📝 Function to validate emoji pattern within a string
const emojiValidation = (string) => {
    const stringChecked = basicValidation(string);
    if (stringChecked !== "Give valid string" && stringChecked !== "") {
        return emojiPattern;
    }
    return stringChecked;
}

// 🔍 Function to check if string contains an emoji
const hasEmoji = (string) => {
    const pattern = emojiValidation(string);
    return pattern in check ?
        (pattern === "" ? false : pattern) :
        pattern.test(string);
}

// 📋 Function to get all emojis from a string
const getEmojis = (string) => {
    const pattern = emojiValidation(string);
    return pattern in check ?
        pattern :
        string.match(pattern) === null ? [] : string.match(pattern);
}

// ❌ Function to delete emojis from a string
const delEmojis = (string) => {
    const pattern = emojiValidation(string);
    return pattern in check ?
        pattern :
        string.replace(pattern, '').replace(/\n\s*\n/g, '\n\n');
}

// 🔢 Function to count the number of emojis in a string
const countEmojis = (string) => {
    const pattern = emojiValidation(string);
    return pattern in check ?
        (pattern === "" ? 0 : pattern) :
        (string.match(pattern) === null ? 0 : string.match(pattern).length);
}

// 🌟 Exporting all functions
module.exports = { hasEmoji, getEmojis, delEmojis, countEmojis, emojiValidation }


// console.log(delEmojis(`Let's grab some coffee ☕ and talk about the project 🔧💡.`))
