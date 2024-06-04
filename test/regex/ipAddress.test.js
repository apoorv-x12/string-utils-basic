const { hasIpAddress, getIpAddresses, delIpAddresses, countIpAddresses, ipAddressValidation } = require('../../src/regex/ipAddress');

describe('ipAddressValidation', () => {
  test('returns ipAddressPattern when basicValidation returns a non-empty string', () => {
    const string = 'some string';
    const result = ipAddressValidation(string);
    expect(result).toEqual(/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/gi);
  });

  test('returns "Give valid string" when basicValidation returns "Give valid string"', () => {
    const string =[];
    const result = ipAddressValidation(string);
    expect(result).toBe('Give valid string');
  });

  test('returns an empty string when basicValidation returns an empty string', () => {
    const string = '';
    const result = ipAddressValidation(string);
    expect(result).toBe('');
  });
});

///////////////////////////////////////////////////////////////////////////
describe('hasIpAddress', () => {
  test('returns true when a valid IP address is passed', () => {
    const result = hasIpAddress('192.168.0.1');
    expect(result).toBe(true);
  });

  test('returns false when an invalid IP address is passed', () => {
    const result = hasIpAddress('256.256.256.256');
    expect(result).toBe(false);
  });

  test('returns false when an empty string is passed', () => {
    const result = hasIpAddress('');
    expect(result).toBe(false);
  });

  test('returns true when a string containing atleast 1 IP characters is passed', () => {
    const result = hasIpAddress('192.168.0.1 abc');
    expect(result).toBe(true);
  });

  test('returns false when a string without any IP address is passed', () => {
    const result = hasIpAddress('abcdefghijkl');
    expect(result).toBe(false);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////
describe('getIpAddresses', () => {
  test('returns an array of IP addresses when the input string contains valid IP addresses', () => {
    const result = getIpAddresses('192.168.0.1 10.0.0.1');
    expect(result).toEqual(['192.168.0.1', '10.0.0.1']);
  });

  test('returns an empty array when the input string does not contain any valid IP addresses', () => {
    const result = getIpAddresses('abcdefghijkl');
    expect(result).toEqual([]);
  });

  test('returns the correct IP address pattern when the input string is an empty string', () => {
    const result = getIpAddresses('');
    expect(result).toBe("");
  });

  test('returns the correct IP address pattern when the input string is not a valid string', () => {
    const result = getIpAddresses('abcdefghijkl');
    expect(result).toEqual([]);
  });
});
///////////////////////////////////////////////////////////////////////////////
describe('delIpAddresses', () => {
  test('returns the input string when it does not contain any IP addresses', () => {
    const result = delIpAddresses('abcdefghijkl');
    expect(result).toBe('abcdefghijkl');
  });

  test('returns the input string with all IP addresses removed when it contains valid IP addresses', () => {
    const result = delIpAddresses('192.168.0.1 10.0.0.1');
    expect(result).toBe(' ');
  });

  test('returns the input string with all IP addresses intact when it contains invalid IP addresses', () => {
    const result = delIpAddresses('256.256.256.256');
    expect(result).toBe('256.256.256.256');
  });

  test('returns the input string with all IP addresses removed when it contains a mix of valid and invalid IP addresses', () => {
    const result = delIpAddresses('192.168.0.1 256.256.256.256');
    expect(result).toBe(' 256.256.256.256');
  });

  test('returns the input string with all IP addresses removed when it contains multiple lines with IP addresses', () => {
    const result = delIpAddresses('192.168.0.1\n10.0.0.1\n256.256.256.256');
    expect(result).toBe('\n\n256.256.256.256');
  });

  test('returns the input string with all IP addresses removed when it contains multiple lines with IP addresses and other characters', () => {
    const result = delIpAddresses('192.168.0.1\nabcdef\n10.0.0.1\n256.256.256.256');
    expect(result).toBe('\nabcdef\n\n256.256.256.256');
  });
});
/////////////////////////////////////////////////////////////////////////////
describe('countIpAddresses', () => {
  test('returns 0 when the input string does not contain any IP addresses', () => {
    const result = countIpAddresses('abcdefghijkl');
    expect(result).toBe(0);
  });

  test('returns the correct count when the input string contains valid IP addresses', () => {
    const result = countIpAddresses('192.168.0.1 10.0.0.1');
    expect(result).toBe(2);
  });

  test('returns 0 when the input string contains invalid IP addresses', () => {
    const result = countIpAddresses('256.256.256.256');
    expect(result).toBe(0);
  });

  test('returns the correct count when the input string contains a mix of valid and invalid IP addresses', () => {
    const result = countIpAddresses('192.168.0.1 256.256.256.256');
    expect(result).toBe(1);
  });

  test('returns the correct count when the input string contains multiple lines with IP addresses', () => {
    const result = countIpAddresses('192.168.0.1\n10.0.0.1\n256.256.256.256');
    expect(result).toBe(2);
  });

  test('returns the correct count when the input string contains multiple lines with IP addresses and other characters', () => {
    const result = countIpAddresses('192.168.0.1\nabcdef\n10.0.0.1\n256.256.256.256');
    expect(result).toBe(2);
  });
});