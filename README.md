## String Utilities Basic

A collection of basic string manipulation functions written in JavaScript. These functions provide a variety of utilities for validating, formatting, and transforming strings.

## Functions Overview

| Function Name                                | Description                                                                                   |
|----------------------------------------------|-----------------------------------------------------------------------------------------------|
| `basicValidation`                            | Validates if the input is a string.                                                          |
| `removeAllWhiteSpacesExceptOnesInBetween`    | Removes all unnecessary whitespace characters, except for single spaces between words.        |
| `removeNonAlphaNumericExceptSpacesInBetween` | Removes all non-alphanumeric characters except spaces.                                        |
| `capitalizeString`                           | Capitalizes the first letter of each word in the string.                                       |
| `countWordsInString`                         | Counts the number of words in a string.                                                       |
| `reverseString`                              | Reverses the entire string.                                                                   |
| `reverseWordsInString`                       | Reverses the order of words in the string.                                                    |
| `truncateString`                             | Truncates the string to a specified length and appends "..." if truncated.                      |
| `snakeString`                                | Converts the string to snake_case.                                                            |
| `kebabString`                                | Converts the string to kebab-case.                                                            |
| `camelString`                                | Converts the string to camelCase.                                                             |
| `isCamelCase`, `isSnakeCase`, `isKebabCase` | Boolean functions to check if a string is in camelCase, snake_case, or kebab-case, respectively.|
| `delJsComments`                              | Deletes JavaScript comments from a string.                                                     |
| `getJsComments`                              | Retrieves JavaScript comments from a string.                                                   |
| `hasJsComments`                              | Checks if a string has JavaScript comments.                                                    |
| `countJsComments`                            | Counts the number of JavaScript comments in a string.                                           |
| `delCssComments`                             | Deletes CSS comments from a string.                                                            |
| `getCssComments`                             | Retrieves CSS comments from a string.                                                          |
| `hasCssComments`                             | Checks if a string has CSS comments.                                                           |
| `countCssComments`                           | Counts the number of CSS comments in a string.                                                 |
| `urlValidation`                              | Validates URLs according to a specified pattern.                                                |
| `getQueryParams`                             | Extracts query parameters from a URL string.                                                     |
| `getQueryString`                             | Extracts the query string from a URL string.                                                    |

**Note:** Digits are included in snake_case, kebab-case, and camelCase.

## Usage

To use these functions in your project, require the module and call the desired function:

```javascript
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
    camelString,
    isCamelCase,
    isSnakeCase,
    isKebabCase,
    delJsComments,
    getJsComments,
    hasJsComments,
    countJsComments,
    delCssComments,
    getCssComments,
    hasCssComments,
    countCssComments,
    urlValidation,
    getQueryParams,
    getQueryString
} = require('string-utils-basic');

// Example usage:

console.log(capitalizeString("hello world"));

// Outputs: "Hello World"

```

## Installation

```javascript
git clone https://github.com/your-username/string-utils-basic.git
cd string-utils-basic
npm install
```

# Running Tests 

```javascript
npm test
```

# Project By

Apoorv Shrivastava

# Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

# License

This project is licensed under the MIT License.

This summary provides a clear overview of the functionality provided by your string utility functions, along with instructions on how to use, install, and test them.
