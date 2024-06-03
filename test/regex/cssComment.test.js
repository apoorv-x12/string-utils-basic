const {
    cssComments,
    getCssComments,
    hasCssComments,
    delCssComments,
    countCssComments
} = require('../../src/regex/cssComment');

test('cssComments returns "" when given an empty string', () => {
    expect(cssComments('')).toBe("");
});

test('cssComments returns "Give valid string" when given a non-string value', () => {
    expect(cssComments(123)).toBe('Give valid string');
});

test('cssComments returns a regular expression that matches multi-line comments', () => {
    const regex = cssComments('/* This is a multi-line comment */');
    expect(regex.test('/* This is a multi-line comment */')).toBe(true);
});

/////////////////////////////////////////////////////////////////////////////////////////////////

describe('hasCssComments', () => {
  it('should return false when given an empty string', () => {
    expect(hasCssComments('')).toBe(false);
  });

  it('should return false when given a string without comments', () => {
    expect(hasCssComments('var sample = 0;')).toBe(false);
  });

  it('should return true when given a string with multi-line comments', () => {
    expect(hasCssComments('var sample = 0; /* This is a comment */')).toBe(true);
  });

  it('cssComments returns "Give valid string" when given a non-string value', () => {
    expect(hasCssComments(123)).toBe('Give valid string');
  });

});

//////////////////////////////////////////////////////////////////////////////////////

describe('getCssComments', () => {
  it('should return an empty string when given an empty string', () => {
    expect(getCssComments('')).toBe('');
  });

  it('cssComments returns "Give valid string" when given a non-string value', () => {
    expect(getCssComments(123)).toBe('Give valid string');
  });

  it('should return the correct multi-line comment when given a string with a multi-line comment', () => {
    const string = 'var sample = 0; /* This is a comment */';
    const expected = ['/* This is a comment */'];
    expect(getCssComments(string)).toEqual(expected);
  });

  it('should return an array of all comments when given a string with multiple comments', () => {
    const string = 'var sample = 0; /* This is a comment */\nvar new = 1; /* Another comment */';
    const expected = ['/* This is a comment */', '/* Another comment */'];
    expect(getCssComments(string)).toEqual(expected);
  });
});

////////////////////////////////////////////////////////////////////////////////////////

describe('delCssComments', () => {
  it('should return an empty string when given an empty string', () => {
    expect(delCssComments('')).toBe('');
  });

  it('should return the input string when there are no CSS comments', () => {
    const input = 'var sample = 0;';
    expect(delCssComments(input)).toBe(input);
  });

  it('should remove multi-line comments from the input string', () => {
    const input = 'var sample = 0; /* This is a comment */';
    const expected = 'var sample = 0; ';
    expect(delCssComments(input)).toBe(expected);
  });

  it('should remove all comments from the input string', () => {
    const input = 'var sample = 0; /* This is a comment */\nvar new = 1; /* Another comment */';
    const expected = 'var sample = 0; \nvar new = 1; ';
    expect(delCssComments(input)).toBe(expected);
  });

  it('should handle a non-string input by returning the string "Give valid string"', () => {
    expect(delCssComments(123)).toBe('Give valid string');
  });

});

//////////////////////////////////////////////////////////////////////////////////////////

test('countCssComments returns 0 for an empty string', () => {
  expect(countCssComments('')).toBe(0);
});

test('countCssComments returns 0 for a string without comments', () => {
  expect(countCssComments('var sample = 0;')).toBe(0);
});

test('countCssComments returns "Give valid string" for a non-string input', () => {
  expect(countCssComments([])).toBe('Give valid string');
});

test('countCssComments returns the correct number of multi-line comments', () => {
  expect(countCssComments('/* This is a multi-line comment */\nvar sample = 0;')).toBe(1);
  expect(countCssComments('var sample = 0;\n/* This is another multi-line comment */')).toBe(1);
  expect(countCssComments('var sample = 0;\n/* This is a multi-line comment */\n/* This is another multi-line comment */')).toBe(2);
});

test('countCssComments returns the correct number of mixed comments', () => {
  expect(countCssComments('var sample = 0;\n/* This is a multi-line comment */\n/* This is another multi-line comment */ //jnnkn')).toBe(2);
});
