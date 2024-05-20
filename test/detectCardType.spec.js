// test.ts
const { expect } = require('chai');
const { describe, it } = require("mocha");
const { detectCardType } = require('../src/creditCard.js');

describe('Card Validation Functions', function () {

  describe('detectCardType', function () {
    it('should return "visa" for a Visa card number', function () {
      expect(detectCardType('411')).to.equal('visa');
    });

    it('should return "mastercard" for a MasterCard number', function () {
      expect(detectCardType('550')).to.equal('mastercard');
    });

    it('should return "amex" for an American Express card number', function () {
      expect(detectCardType('34')).to.equal('amex');
    });

    it('should return "amex" for an American Express card number', function () {
      expect(detectCardType('37')).to.equal('amex');
    });

    it('should return "unknown" for an unrecognized card number', function () {
      expect(detectCardType('91')).to.equal('unknown');
    });
  });
});
