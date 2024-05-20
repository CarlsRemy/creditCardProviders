//test
const { expect } = require('chai')
const { describe, it } = require("mocha");
const { validateCardByProvider, Providers } = require('../src/creditCard.js');


describe('validateCardByProvider', function () {
	it('Se espera true para una Tarjeta Visa (12 Carracteres)', function () {
		const info = validateCardByProvider(Providers.visa, '412345678901');
		expect(info).to.deep.equal(true);
	});

	it('Se espera true para una Tarjeta Visa (16 Carracteres)', function () {
		const info = validateCardByProvider(Providers.visa, '4123456789012345');
		expect(info).to.deep.equal(true);
	});

	[1, 2, 3, 4, 5].forEach((num) => {
		it(`Se espera true para una Tarjeta MasterCard serie 5${num}`, function () {
			const info = validateCardByProvider(Providers.mastercard, `5${num}12345678901234`);
			expect(info).to.deep.equal(true);
		});
	});

	it(`Se espera true para una Tarjeta Amex serie 34`, function () {
		const info = validateCardByProvider(Providers.amex, `341234567890123`);
		expect(info).to.deep.equal(true);
	});

	it(`Se espera true para una Tarjeta Amex serie 37`, function () {
		const info = validateCardByProvider(Providers.amex, `371234567890123`);
		expect(info).to.deep.equal(true);
	});

	it(`Se espera true para una Tarjeta discover serie 6011`, function () {
		const info = validateCardByProvider(Providers.discover, `6011023456789012`);
		expect(info).to.deep.equal(true);
	});

	it(`Se espera true para una Tarjeta discover serie 65`, function () {
		const info = validateCardByProvider(Providers.discover, `6510123456789012`);
		expect(info).to.deep.equal(true);
	});

	[4, 5, 6, 7, 8, 9].forEach((num) => {
		it(`Se espera true para una Tarjeta discover serie 64${num}`, function () {
			const info = validateCardByProvider(Providers.discover, `64${num}1023456789012`);
			expect(info).to.deep.equal(true);
		});
	});

	[0, 1, 2, 3, 4, 5].forEach((num) => {
		it(`Se espera true para una Tarjeta dinnerclub serie 30${num}, 14 Carracteres`, function () {
			const info = validateCardByProvider(Providers.dinnerclub, `30${num}01234567890`);
			expect(info).to.deep.equal(true);
		});

		it(`Se espera true para una Tarjeta dinnerclub serie 30${num}, 16 Carracteres`, function () {
			const info = validateCardByProvider(Providers.dinnerclub, `30${num}0123456789012`);
			expect(info).to.deep.equal(true);
		});

		it(`Se espera true para una Tarjeta dinnerclub serie 30${num}, 19 Carracteres`, function () {
			const info = validateCardByProvider(Providers.dinnerclub, `30${num}0123456789012345`);
			expect(info).to.deep.equal(true);
		});
	});

	[6, 8, 9].forEach((num) => {
		it(`Se espera true para una Tarjeta dinnerclub serie 3${num}, 14 Carracteres`, function () {
			const info = validateCardByProvider(Providers.dinnerclub, `3${num}012345678901`);
			expect(info).to.deep.equal(true);
		});

		it(`Se espera true para una Tarjeta dinnerclub serie 3${num}, 16 Carracteres`, function () {
			const info = validateCardByProvider(Providers.dinnerclub, `3${num}01234567890123`);
			expect(info).to.deep.equal(true);
		});

		it(`Se espera true para una Tarjeta dinnerclub serie 3${num}, 19 Carracteres`, function () {
			const info = validateCardByProvider(Providers.dinnerclub, `3${num}01234567890123456`);
			expect(info).to.deep.equal(true);
		});
	});

	it('se espera false para una tarjeta Tarjeta MasterCard serie 56', function () {
		const info = validateCardByProvider(Providers.mastercard, '5612345678901234');
		expect(info).to.deep.equal(false);
	});

	it('se espera false para una Tarjeta MasterCard serie 51 pero de 17 Carracteres', function () {
		const info = validateCardByProvider(Providers.mastercard, '51123456789012345');
		expect(info).to.deep.equal(false);
	});

	it('se espera false para el numero de Tarjetas no reconocidas', function () {
		const info = validateCardByProvider(Providers.mastercard, '9111111111111111');
		expect(info).to.deep.equal(false);
	});

	it('se espera false para una Tarjeta MasterCard que se le paso formato Amex', function () {
		const info = validateCardByProvider(Providers.mastercard, '341234567890123');
		expect(info).to.deep.equal(false);
	});
});