const {
    isCamelCase,
    isSnakeCase,
    isKebabCase
} = require('../../src/boolean/bool.js');

test('isKebabCase returns false when given an empty string', () => {
    expect(isKebabCase('')).toBe(false);
});

test('isKebabCase returns false when given a string with spaces', () => {
    expect(isKebabCase('hello world')).toBe(false);
});

test('isKebabCase returns false when given a string with uppercase letters', () => {
    expect(isKebabCase('helloWorld')).toBe(false);
});

test('isKebabCase returns false when given a string with numbers that are not at the start or after a hyphen', () => {
    expect(isKebabCase('hello123world')).toBe(true);
});

test('isKebabCase returns false when given a string with non-alphanumeric characters that are not hyphens', () => {
    expect(isKebabCase('hello!world')).toBe(false);
});

test('isKebabCase returns true when given a string that follows the kebab-case convention', () => {
    expect(isKebabCase('hello-wo2rld-hi')).toBe(true);
});

//////////////////////////////////////////////////////////////////////////////////
test('isCamelCase returns false when given an empty string', () => {
    expect(isCamelCase('')).toBe(false);
});

test('isCamelCase returns false when given a string with spaces', () => {
    expect(isCamelCase('hello world')).toBe(false);
});

test('isCamelCase returns true when given a string with uppercase letter at correct position', () => {
    expect(isCamelCase('helloWorld')).toBe(true);
});

test('isCamelCase returns true when given a string with numbers that are not at the start or after a hyphen', () => {
    expect(isCamelCase('hello123world')).toBe(true);
});

test('isCamelCase returns false when given a string with non-alphanumeric characters that are not hyphens', () => {
    expect(isCamelCase('hello!world')).toBe(false);
});

test('isCamelCase returns true when given a string that follows the camelCase convention', () => {
    expect(isCamelCase('helloWorld')).toBe(true);
});

test('isCamelCase returns true when given a string that follows the camelCase convention with numbers', () => {
    expect(isCamelCase('helloWorld123')).toBe(true);
});

test('isCamelCase returns false when given a string that follows the camelCase convention with hyphens', () => {
    expect(isCamelCase('helloWorld-123')).toBe(false);
});

//////////////////////////////////////////////////////////////////////////////////////
test('isSnakeCase returns "Give valid string" when given an invalid input', () => {
    expect(isSnakeCase(123)).toBe('Give valid string');
    expect(isSnakeCase(null)).toBe('Give valid string');
    expect(isSnakeCase(undefined)).toBe('Give valid string');
    expect(isSnakeCase([])).toBe('Give valid string');
    expect(isSnakeCase({})).toBe('Give valid string');
});

test('isSnakeCase returns false when given an empty string', () => {
    expect(isSnakeCase('')).toBe(false);
});

test('isSnakeCase returns true when given a string in snake case', () => {
    expect(isSnakeCase('hello_world')).toBe(true);
    expect(isSnakeCase('hello_world_123')).toBe(true);
});

test('isSnakeCase returns false when given a string not in snake case', () => {
    expect(isSnakeCase('HelloWorld')).toBe(false);
    expect(isSnakeCase('helloWorld')).toBe(false);
    expect(isSnakeCase('hello world')).toBe(false);
    expect(isSnakeCase('hello_world_')).toBe(false);
    expect(isSnakeCase('hello_world__123')).toBe(false);
    expect(isSnakeCase('123_hello_world')).toBe(true);
});