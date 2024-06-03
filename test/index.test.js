const { basicValidation,
        removeAllWhiteSpacesExceptOnesInBetween,
        removeNonAlphaNumericExceptSpacesInBetween,
        capitalizeString,
        countWordsInString,
        reverseString ,
        reverseWordsInString,
        truncateString,
        snakeString,
        kebabString,
        camelString } = require('../src/index');

test('basicValidation returns an empty string when given an empty string ', () => {
    expect(basicValidation('')).toBe('');    
});

test('basicValidation returns "Give valid string" when given a non-string or null or undefined', () => {
     expect(basicValidation(null)).toBe('Give valid string');
    expect(basicValidation(undefined)).toBe('Give valid string');
    expect(basicValidation(123)).toBe('Give valid string');
    expect(basicValidation(true)).toBe('Give valid string');
    expect(basicValidation([])).toBe('Give valid string');
    expect(basicValidation({})).toBe('Give valid string');
});

test('basicValidation returns "ok" when given a string', () => {
    expect(basicValidation('hello')).toBe('ok');
});

////////////////////////////////////////////////////////////////////////////////////////////////
test('removeAllWhiteSpacesExceptOnesInBetween removes all whitespace characters and trims the string', () => {
    expect(removeAllWhiteSpacesExceptOnesInBetween('   Hello World   ')).toBe('Hello World');
    expect(removeAllWhiteSpacesExceptOnesInBetween('Hello\nWorld')).toBe('Hello World');
    expect(removeAllWhiteSpacesExceptOnesInBetween('Hello   World   \n')).toBe('Hello World');
});

test('removeAllWhiteSpacesExceptOnesInBetween returns an empty string when given an empty string', () => {
    expect(removeAllWhiteSpacesExceptOnesInBetween('')).toBe('');
});

test('removeAllWhiteSpacesExceptOnesInBetween returns the same string when there are no whitespace characters', () => {
    expect(removeAllWhiteSpacesExceptOnesInBetween('HelloWorld')).toBe('HelloWorld');
});
////////////////////////////////////////////////////////////////////////////////////////////////

test('removeNonAlphaNumericExceptSpacesInBetween returns an empty string when given an empty string', () => {
    expect(removeNonAlphaNumericExceptSpacesInBetween('')).toBe('');
   
});

test('removeNonAlphaNumericExceptSpacesInBetween returns "Give valid string" when given a non-string  or null or undefined', () => {
    expect(removeNonAlphaNumericExceptSpacesInBetween(null)).toBe('Give valid string');
    expect(removeNonAlphaNumericExceptSpacesInBetween(undefined)).toBe('Give valid string');
    expect(removeNonAlphaNumericExceptSpacesInBetween(123)).toBe('Give valid string');
    expect(removeNonAlphaNumericExceptSpacesInBetween(true)).toBe('Give valid string');
    expect(removeNonAlphaNumericExceptSpacesInBetween([])).toBe('Give valid string');
    expect(removeNonAlphaNumericExceptSpacesInBetween({})).toBe('Give valid string');
});

test('removeNonAlphaNumericExceptSpacesInBetween returns the same string when there are no non-alphanumeric characters', () => {
    expect(removeNonAlphaNumericExceptSpacesInBetween('HelloWorld')).toBe('HelloWorld');
});

test('removeNonAlphaNumericExceptSpacesInBetween removes all non-alphanumeric characters from the string and returns the modified string', () => {
    expect(removeNonAlphaNumericExceptSpacesInBetween('Hello World!')).toBe('Hello World');
    expect(removeNonAlphaNumericExceptSpacesInBetween('He!23llo_World!')).toBe('He23lloWorld');
    expect(removeNonAlphaNumericExceptSpacesInBetween('Hello@World!')).toBe('HelloWorld');
});
////////////////////////////////////////////////////////////////////////////////////////////////

test('capitalizeString returns an empty string when given an empty string', () => {
    expect(capitalizeString('')).toBe('');
   
});

test('capitalizeString returns "Give valid string" when given a non-string or null or undefined', () => {
     expect(capitalizeString(null)).toBe('Give valid string');
    expect(capitalizeString(undefined)).toBe('Give valid string');
    expect(capitalizeString(123)).toBe('Give valid string');
    expect(capitalizeString(true)).toBe('Give valid string');
    expect(capitalizeString([])).toBe('Give valid string');
    expect(capitalizeString({})).toBe('Give valid string');
});

test('capitalizeString capitalizes the first letter of each word in the string', () => {
    expect(capitalizeString('hello world')).toBe('Hello World');
    expect(capitalizeString('hello world and goodbye')).toBe('Hello World And Goodbye');
    expect(capitalizeString('hello')).toBe('Hello');
});

test('capitalizeString does not change words that are already capitalized', () => {
    expect(capitalizeString('Hello World')).toBe('Hello World');
    expect(capitalizeString('Hello World And Goodbye')).toBe('Hello World And Goodbye');
    expect(capitalizeString('HELLO')).toBe('HELLO');
});

test('capitalizeString does not change words that are empty', () => {
    expect(capitalizeString('hello world and g1@oodbye ')).toBe('Hello World And G1@oodbye ');
});

////////////////////////////////////////////////////////////////////////////////////////////////

test('countWordsInString returns "Give valid string" when given an empty string', () => {
    expect(countWordsInString('')).toBe(0);
});

test('countWordsInString returns "Give valid string" when given a non-string value', () => {
    expect(countWordsInString(123)).toBe('Give valid string');
});

test('countWordsInString returns 0 when given a string with no words', () => {
    expect(countWordsInString('   ')).toBe(0);
});

test('countWordsInString returns the correct number of words when given a string with multiple words', () => {
    expect(countWordsInString('Hello World')).toBe(2);
    expect(countWordsInString('   Hello   World 1@Sada  ')).toBe(3);
});

////////////////////////////////////////////////////////////////////////////////////////////////
test('reverseString returns the reversed string when given a valid string', () => {
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('World')).toBe('dlroW');
});

test('reverseString returns the same string when given an empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverseString returns "Give valid string" when given a non-string input', () => {
    expect(reverseString(123)).toBe('Give valid string');
    expect(reverseString(null)).toBe('Give valid string');
    expect(reverseString(undefined)).toBe('Give valid string');
    expect(reverseString([])).toBe('Give valid string');
    expect(reverseString({})).toBe('Give valid string');
});

////////////////////////////////////////////////////////////////////////////////////////////////
describe('reverseWordsInString', () => {
    test('returns "Give valid string" when given a non-string value', () => {
        expect(reverseWordsInString(123)).toBe("Give valid string");
    });

    test('returns empty string when given an empty string', () => {
        expect(reverseWordsInString("")).toBe("");
    });

    test('reverses words in a regular string while preserving spaces', () => {
        expect(reverseWordsInString("This is a test")).toBe("test a is This");
    });

    test('handles strings with multiple spaces between words and preserves spaces', () => {
        expect(reverseWordsInString("Hello    World")).toBe("World    Hello");
    });

    test('handles strings with tabs and newlines, preserving them', () => {
        expect(reverseWordsInString("This is\ta test\nstring")).toBe("string\ntest a\tis This");
    });

    test('handles a single word', () => {
        expect(reverseWordsInString("SingleWord")).toBe("SingleWord");
    });

    test('trims leading and trailing spaces', () => {
        expect(reverseWordsInString("  Leading and trailing spaces  ")).toBe("  spaces trailing and Leading  ");
    });
});


////////////////////////////////////////////////////////////////////////////////////////////////
test('truncateString returns the original string if it is shorter than the specified length', () => {
    expect(truncateString('Hello', 10)).toBe('Hello');
});

test('truncateString returns the original string if it is equal to the specified length', () => {
    expect(truncateString('Hello', 5)).toBe('Hello');
});

test('truncateString returns the original string with an ellipsis if it is longer than the specified length', () => {
    expect(truncateString('Hello World', 10)).toBe('Hello World...');
});

test('truncateString returns "Give valid string" if the input is not a string', () => {
    expect(truncateString(123, 10)).toBe('Give valid string');
});

test('truncateString returns an empty string if the input is an empty string', () => {
    expect(truncateString('', 10)).toBe('');
});

test('truncateString returns an empty string if the input is an empty string and the specified length is 0', () => {
    expect(truncateString('', 0)).toBe('');
});

////////////////////////////////////////////////////////////////////////////////////////////////

test('snakeString returns "Give valid string" when given an invalid input', () => {
    expect(snakeString(123)).toBe('Give valid string');
    expect(snakeString(null)).toBe('Give valid string');
    expect(snakeString(undefined)).toBe('Give valid string');
    expect(snakeString([])).toBe('Give valid string');
    expect(snakeString({})).toBe('Give valid string');
});

test('snakeString returns an empty string when given an empty string', () => {
    expect(snakeString('')).toBe('');
});

test('snakeString converts a string with one word to snake case', () => {
    expect(snakeString('hello')).toBe('hello');
});

test('snakeString converts a string with multiple words to snake case', () => {
    expect(snakeString('hello world')).toBe('hello_world');
    expect(snakeString('  Hell!@ j World')).toBe('hell_j_world');
});

test('snakeString handles leading and trailing spaces in the input string correctly', () => {
    expect(snakeString('  h1ello world  ')).toBe('h1ello_world');
});

////////////////////////////////////////////////////////////////////////////////////////////////

test('kebabString returns "Give valid string" when given an invalid input', () => {
    expect(kebabString(123)).toBe('Give valid string');
    expect(kebabString(null)).toBe('Give valid string');
    expect(kebabString(undefined)).toBe('Give valid string');
    expect(kebabString([])).toBe('Give valid string');
    expect(kebabString({})).toBe('Give valid string');
});

test('kebabString returns an empty string when given an empty string', () => {
    expect(kebabString('')).toBe('');
});

test('kebabString returns the same string when given a string with one word', () => {
    expect(kebabString('hello')).toBe('hello');
});

test('kebabString returns the correct kebab-cased string when given a string with multiple words', () => {
    expect(kebabString('hello world')).toBe('hello-world');
    expect(kebabString('  Hell!@ j World')).toBe('hell-j-world');
});

test('kebabString handles leading and trailing spaces in the input string correctly', () => {
    expect(kebabString('  h1ello world  ')).toBe('h1ello-world');
});

////////////////////////////////////////////////////////////////////////////////////////////////
test('camelString returns "Give valid string" when given an invalid input', () => {
    expect(camelString(123)).toBe('Give valid string');
    expect(camelString(null)).toBe('Give valid string');
    expect(camelString(undefined)).toBe('Give valid string');
    expect(camelString([])).toBe('Give valid string');
    expect(camelString({})).toBe('Give valid string');
});

test('camelString returns an empty string when given an empty string', () => {
    expect(camelString('')).toBe('');
});

test('camelString converts a string with one word to camel case', () => {
    expect(camelString('hello')).toBe('hello');
});

test('camelString converts a string with multiple words to camel case', () => {
    expect(camelString('hello world')).toBe('helloWorld');
});

test('camelString handles leading and trailing spaces in the input string', () => {
    expect(camelString('  h1ello world  ')).toBe('h1elloWorld');
});
