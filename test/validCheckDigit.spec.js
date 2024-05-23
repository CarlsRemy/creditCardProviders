//test
const { expect } = require('chai')
const { describe, it } = require("mocha");
const { validCheckDigit } = require('../src/creditCard.js');


describe('validateCardByProvider', function () {
	it('Se espera true para 5384232091726624', function () {
		const info = validCheckDigit('5384232091726624');
		expect(info).to.deep.equal(true);
	});

	it('Se espera true para 4603397902120974', function () {
		const info = validCheckDigit('4603397902120974');
		expect(info).to.deep.equal(true);
	});

	it('Se espera true para 347421502794597', function () {
		const info = validCheckDigit('347421502794597');
		expect(info).to.deep.equal(true);
	});

	it('Se espera true para 6578262180674306', function () {
		const info = validCheckDigit('6578262180674306');
		expect(info).to.deep.equal(true);
	});

	it('Se espera true para 3049347614152231', function () {
		const info = validCheckDigit('3049347614152231');
		expect(info).to.deep.equal(true);
	});

	it('Se espera false para 3049347614152225', function () {
		const info = validCheckDigit('3049347614152225');
		expect(info).to.deep.equal(false);
	});
});