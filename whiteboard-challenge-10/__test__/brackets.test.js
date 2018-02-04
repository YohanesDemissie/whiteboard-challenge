'use strict';

const brackets = require('../curly-bracket/lib/solution-brackets.js');

describe('Solution Brackets Module', () => {
  describe('#Brackets', () => {
    let string = '{this}will{not}{work;as}{it}{should;}}}{{{}{}';

    it('should return null if braces do not match ', () => {
      expect(brackets.check(string)).toEqual(false);
    });
    let string2 = '{this}{will}{work}{as}{it}{should}';

    it('should return truth if the braces match', () => {
      expect(brackets.check(string2)).toEqual(true);
    });
    let string3 = [];
    it('should return flase if not a string', () => {
      expect(brackets.check(string3)).toBe(null);
    });
  });
});