const {
    jsComments,
    getJsComments,
    hasJsComments,
    delJsComments,
    countJsComments
} = require('../../src/regex/jsComment');

test('jsComments returns "" when given an empty string', () => {
    expect(jsComments('')).toBe("");
});

test('jsComments returns "Give valid string" when given a non-string value', () => {
    expect(jsComments(123)).toBe('Give valid string');
});

test('jsComments returns a regular expression that matches single-line comments', () => {
    const regex = jsComments('// This is a single-line comment');
    expect(regex.test('// This is a single-line comment')).toBe(true);
});

test('jsComments returns a regular expression that matches multi-line comments', () => {
    const regex = jsComments('/* This is a multi-line comment */');
    expect(regex.test('/* This is a multi-line comment */')).toBe(true);
});
/////////////////////////////////////////////////////////////////////////////////////////////////

describe('hasJsComments', () => {
  it('should return "" when given an empty string', () => {
    expect(hasJsComments('')).toBe(false);
  });

  it('should return false when given a string without comments', () => {
    expect(hasJsComments('var sample = 0;')).toBe(false);
  });

  it('should return true when given a string with single-line comments', () => {
    expect(hasJsComments('var sample = 0; // This is a comment')).toBe(true);
  });

  it('should return true when given a string with multi-line comments', () => {
    expect(hasJsComments('var sample = 0; /* This is a comment */')).toBe(true);
  });

  it('jsComments returns "Give valid string" when given a non-string value', () => {
    expect(hasJsComments(123)).toBe('Give valid string');
  });

});

//////////////////////////////////////////////////////////////////////////////////////

describe('getJsComments', () => {
  it('should return an empty string when given an empty string', () => {
    expect(getJsComments('')).toBe('');
  });

  it('jsComments returns "Give valid string" when given a non-string value', () => {
    expect(getJsComments(123)).toBe('Give valid string');
  });

  it('should return the correct single-line comment when given a string with a single-line comment', () => {
    const string = 'var sample = 0; // This is a comment';
    const expected = ['// This is a comment'];
    expect(getJsComments(string)).toEqual(expected);
  });

  it('should return the correct multi-line comment when given a string with a multi-line comment', () => {
    const string = 'var sample = 0; /* This is a comment */';
    const expected = ['/* This is a comment */'];
    expect(getJsComments(string)).toEqual(expected);

  });

  it('should return an array of all comments when given a string with multiple comments', () => {
    const string = 'var sample = 0; // This is a comment\nvar new = 1; /* Another comment */';
    const expected = ['// This is a comment', '/* Another comment */'];
    expect(getJsComments(string)).toEqual(expected);
    
  });
});

////////////////////////////////////////////////////////////////////////////////////////

describe('delJsComments', () => {
  it('should return an empty string when given an empty string', () => {
    expect(delJsComments('')).toBe('');
  });

  it('should return the input string when there are no JavaScript comments', () => {
    const input = 'var sample = 0;';
    expect(delJsComments(input)).toBe(input);
  });

  it('should remove single-line comments from the input string', () => {
    const input = 'var sample = 0; // This is a comment';
    const expected = 'var sample = 0; ';
    expect(delJsComments(input)).toBe(expected);
  });

  it('should remove multi-line comments from the input string', () => {
    const input = 'var sample = 0; /* This is a comment */';
    const expected = 'var sample = 0; ';
    expect(delJsComments(input)).toBe(expected);
  });

  it('should remove all comments from the input string', () => {
    const input = 'var sample = 0; // This is a comment\nvar new = 1; /* Another comment */';
    const expected = 'var sample = 0; \nvar new = 1; ';
    expect(delJsComments(input)).toBe(expected);
  });

  it('should handle a non-string input by returning the string "Give valid string"', () => {
    expect(delJsComments(123)).toBe('Give valid string');
  });

});
//////////////////////////////////////////////////////////////////////////////////////////

test('countJsComments returns 0 for an empty string', () => {
  expect(countJsComments('')).toBe(0);
});

test('countJsComments returns 0 for a string without comments', () => {
  expect(countJsComments('var sample = 0;')).toBe(0);
});

test('countJsComments returns "Give valid string" for a non-string input', () => {
  expect(countJsComments([])).toBe('Give valid string');
});

test('countJsComments returns the correct number of single-line comments', () => {
  expect(countJsComments('// This is a single-line comment\nvar sample = 0;')).toBe(1);
  expect(countJsComments('var sample = 0;\n// This is another single-line comment')).toBe(1);
  expect(countJsComments('var sample = 0;\n// This is a single-line comment\n// This is another single-line comment')).toBe(2);
});

test('countJsComments returns the correct number of multi-line comments', () => {
  expect(countJsComments('/* This is a multi-line comment */\nvar sample = 0;')).toBe(1);
  expect(countJsComments('var sample = 0;\n/* This is another multi-line comment */')).toBe(1);
  expect(countJsComments('var sample = 0;\n/* This is a multi-line comment */\n/* This is another multi-line comment */')).toBe(2);
});

test('countJsComments returns the correct number of mixed comments', () => {
  expect(countJsComments('// This is a single-line comment\nvar sample = 0;\n/* This is a multi-line comment */')).toBe(2);
  expect(countJsComments('/* This is a multi-line comment */\nvar sample = 0;\n// This is a single-line comment')).toBe(2);
  expect(countJsComments('/* This is a multi-line comment */\nvar sample = 0;\n/* This is another multi-line comment */\n// This is a single-line comment')).toBe(3);
});