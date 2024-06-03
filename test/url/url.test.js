const { basicValidation, urlValidation, getQueryParams, getQueryString } = require('../../src/url/url');

describe('urlValidation', () => {
    test('returns "Give valid string" when given a non-string value', () => {
        expect(urlValidation(123)).toBe("Give valid string");
    });

    test('returns false when given an empty string', () => {
        expect(urlValidation("")).toBe(false);
    });

    test('returns true for a valid HTTP URL', () => {
        expect(urlValidation("http://example.com")).toBe(true);
    });

    test('returns true for a valid HTTPS URL with query parameters', () => {
        expect(urlValidation("https://example.com/path?name=value")).toBe(true);
    });

    test('returns false for an invalid URL', () => {
        expect(urlValidation("htp://example.com")).toBe(false);
    });

    test('returns false for a non-URL string', () => {
        expect(urlValidation("just a regular string")).toBe(false);
    });

    test('returns true for a valid URL with special characters', () => {
        expect(urlValidation("https://example.com/path?name=value&foo=bar#section")).toBe(true);
    });
});

describe('getQueryParams', () => {
    test('returns "Give valid string" when given a non-string value', () => {
        expect(getQueryParams(123)).toBe("Give valid string");
    });

    test('returns an empty object when given an empty string', () => {
        expect(getQueryParams("")).toEqual({});
    });

    test('returns isUrlProper as true and extracts query parameters correctly from a valid URL', () => {
        const expected = {
            isUrlProper: true,
            qparams: { name: "value", foo: "bar" }
        };
        expect(getQueryParams("https://example.com/path?name=value&foo=bar")).toEqual(expected);
    });

    test('returns isUrlProper as true for a URL without query parameters', () => {
        const expected = {
            isUrlProper: true,
            qparams: {}
        };
        expect(getQueryParams("https://example.com/path")).toEqual(expected);
    });

    test('returns isUrlProper as false and an empty qparams object for an invalid URL', () => {
        const expected = {
            isUrlProper: false,
            qparams: {}
        };
        expect(getQueryParams("htp://example.com")).toEqual(expected);
    });

    test('returns isUrlProper as false and an empty qparams object for a non-URL string', () => {
        const expected = {
            isUrlProper: false,
            qparams: {}
        };
        expect(getQueryParams("just a regular string")).toEqual(expected);
    });
});

describe('getQueryString', () => {
    test('returns "Give valid string" when given a non-string value', () => {
        expect(getQueryString(123)).toBe("Give valid string");
    });

    test('returns an empty string when given an empty string', () => {
        expect(getQueryString("")).toBe("");
    });

    test('returns isUrlProper as true and extracts the query string from a valid URL', () => {
        const expected = {
            isUrlProper: true,
            queryString: "?name=value&foo=bar"
        };
        expect(getQueryString("https://example.com/path?name=value&foo=bar")).toEqual(expected);
    });

    test('returns isUrlProper as true and an empty queryString for a URL without query parameters', () => {
        const expected = {
            isUrlProper: true,
            queryString: ""
        };
        expect(getQueryString("https://example.com/path")).toEqual(expected);
    });

    test('returns isUrlProper as false and an empty queryString for an invalid URL', () => {
        const expected = {
            isUrlProper: false,
            queryString: ""
        };
        expect(getQueryString("htp://example.com")).toEqual(expected);
    });

    test('returns isUrlProper as false and an empty queryString for a non-URL string', () => {
        const expected = {
            isUrlProper: false,
            queryString: ""
        };
        expect(getQueryString("just a regular string")).toEqual(expected);
    });
});
