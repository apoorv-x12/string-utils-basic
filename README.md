String Utilities Basic \n
A collection of basic string manipulation functions written in JavaScript. These functions provide a variety of utilities for validating, formatting, and transforming strings.

Functions Overview

1. basicValidation
Validates if the input is a string.

Returns "Give valid string" if the input is not a string.
Returns an empty string if the input is an empty string.
Returns "ok" for valid string inputs.

2. removeAllWhiteSpacesExceptOnesInBetween
Removes all unnecessary whitespace characters, except for single spaces between words.

Returns "Give valid string" or an empty string if the validation fails.
Trims and reduces multiple spaces to a single space.

3. removeNonAlphaNumericExceptSpacesInBetween
Removes all non-alphanumeric characters except spaces.

Returns "Give valid string" or an empty string if the validation fails.
Utilizes removeAllWhiteSpacesExceptOnesInBetween to clean up the string.

4. capitalizeString
Capitalizes the first letter of each word in the string.

Returns "Give valid string" or an empty string if the validation fails.

5. countWordsInString
Counts the number of words in a string.

Returns "Give valid string" if the input is invalid.
Returns 0 for an empty string.
Utilizes removeAllWhiteSpacesExceptOnesInBetween to ensure proper word counting.

6. reverseString
Reverses the entire string.

Returns "Give valid string" or an empty string if the validation fails.

7. reverseWordsInString
Reverses the order of words in the string.

Returns "Give valid string" or an empty string if the validation fails.

8. truncateString
Truncates the string to a specified length and appends "..." if truncated.

Returns "Give valid string" or an empty string if the validation fails.

Default truncation length is 20.

9. snakeString
Converts the string to snake_case.

Returns "Give valid string" or an empty string if the validation fails.
Utilizes removeNonAlphaNumericExceptSpacesInBetween for cleaning the string.

10. kebabString
Converts the string to kebab-case.

Returns "Give valid string" or an empty string if the validation fails.
Utilizes removeNonAlphaNumericExceptSpacesInBetween for cleaning the string.

11. camelString
Converts the string to camelCase.

Returns "Give valid string" or an empty string if the validation fails.
Utilizes removeNonAlphaNumericExceptSpacesInBetween for cleaning the string.
Converts the first word to lowercase and capitalizes subsequent words.

Usage
To use these functions in your project, require the module and call the desired function:

const {
    basicValidation,
    removeAllWhiteSpacesExceptOnesInBetween,
    removeNonAlphaNumericExceptSpacesInBetween,
    capitalizeString,
    countWordsInString,
    reverseString,
    reverseWordsInString,
    truncateString,
    snakeString,
    kebabString,
    camelString
} = require('./path/to/your/module');

// Example usage:
console.log(capitalizeString("hello world")); // Outputs: "Hello World"

Installation
Clone the repository:

git clone https://github.com/your-username/string-utils-basic.git

Navigate to the project directory:
cd string-utils-basic

Install the dependencies:\n
npm install

Running Tests
Run the tests to ensure everything is working correctly:\n
npm test

Contributing
Feel free to submit issues or pull requests if you have suggestions or improvements.

License
This project is licensed under the MIT License.

This summary provides a clear overview of the functionality provided by your string utility functions, along with instructions on how to use, install, and test them.
