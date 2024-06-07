const { hasEmoji, getEmojis, delEmojis, countEmojis, emojiValidation } = require('../../src/manipulation/emoji');

describe('Emoji Validation Functions', () => {
  test('hasEmoji: should return false for a string with no emojis', () => {
    expect(hasEmoji('This is a test')).toBe(false);
  });

  test('hasEmoji: should return true for a string with emojis', () => {
    expect(hasEmoji('This is a test 😊')).toBe(true);
  });

  test('getEmojis: should return an empty array for a string with no emojis', () => {
    expect(getEmojis('This is a test')).toEqual([]);
  });

  test('getEmojis: should return an array of emojis for a string with emojis', () => {
    expect(getEmojis('This is a test 😊👍')).toEqual(['😊', '👍']);
  });

  test('delEmojis: should return the same string for a string with no emojis', () => {
    expect(delEmojis('This is a test')).toBe('This is a test');
  });

  test('delEmojis: should return a string with emojis removed', () => {
    expect(delEmojis('This is a test 😊👍')).toBe('This is a test ');
  });

  test('countEmojis: should return 0 for a string with no emojis', () => {
    expect(countEmojis('This is a test')).toBe(0);
  });

  test('countEmojis: should return the correct number of emojis in a string', () => {
    expect(countEmojis('This is a test 😊👍')).toBe(2);
  });
});
