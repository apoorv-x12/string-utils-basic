const { dateValidation } = require('../../src/validation/date');

describe('dateValidation', () => {
  test('should return false for an empty string', () => {
    expect(dateValidation('')).toBe(false);
  });

  test('should return false for a string that does not match the date pattern', () => {
    expect(dateValidation('invalid date')).toBe(false);
  });

  test('should return true for a valid date string', () => {
    expect(dateValidation('2020/01/01')).toBe(true);
  });

  test('should return true for a valid date string with slashes', () => {
    expect(dateValidation('2020/01/01')).toBe(true);
  });

  test('should return true for a valid date string with dashes', () => {
    expect(dateValidation('2020-01-01')).toBe(true);
  });

  test('should return true for a valid date string with spaces', () => {
    expect(dateValidation('Jan 1, 2020')).toBe(true);
  });
});