const { hasEmail, getEmails, delEmails, countEmails, emailValidation } = require('../../src/validation/email');

describe('emailValidation', () => {
  test('should return emailPattern for valid string', () => {
    expect(emailValidation('hello@world.com')).toEqual(/(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})/g);
  });

  test('should return "Give valid string" for empty string', () => {
    expect(emailValidation('')).toBe('');
  });

  test('should return "Give valid string" for non-string input', () => {
    expect(emailValidation(123)).toBe('Give valid string');
  });
});

describe('hasEmail', () => {
  test('should return true for string with email', () => {
    expect(hasEmail('hello@world.com')).toBe(true);
  });

  test('should return false for string without email', () => {
    expect(hasEmail('hello world')).toBe(false);
  });

  test('should return false for empty string', () => {
    expect(hasEmail('')).toBe(false);
  });

  test(`should return 'Give valid string' for non-string input`, () => {
    expect(hasEmail(123)).toBe('Give valid string');
  });
});

describe('getEmails', () => {
  test('should return array of emails for string with multiple emails', () => {
    expect(getEmails('hello@world.com and foo@bar.com')).toEqual(['hello@world.com', 'foo@bar.com']);
  });

  test('should return array with one email for string with one email', () => {
    expect(getEmails('hello@world.com')).toEqual(['hello@world.com']);
  });

  test('should return empty array for string without email', () => {
    expect(getEmails('hello world')).toEqual([]);
  });

  test('should return empty array for empty string', () => {
    expect(getEmails('')).toEqual([]);
  });

  test('should return "Give valid string" array for non-string input', () => {
    expect(getEmails(123)).toEqual('Give valid string');
  });
});

describe('delEmails', () => {
  test('should remove emails from string', () => {
    expect(delEmails('hello@world.com and foo@bar.com')).toBe(' and ');
  });

  test('should return original string for string without email', () => {
    expect(delEmails('hello world')).toBe('hello world');
  });

  test('should return original string for empty string', () => {
    expect(delEmails('')).toBe('');
  });

  test('should return "Give valid string" string for non-string input', () => {
    expect(delEmails(123)).toBe('Give valid string');
  });
});

describe('countEmails', () => {
  test('should count emails in string', () => {
    expect(countEmails('hello@world.com and foo@bar.com')).toBe(2);
  });

  test('should return 0 for string without email', () => {
    expect(countEmails('hello world')).toBe(0);
  });  
});