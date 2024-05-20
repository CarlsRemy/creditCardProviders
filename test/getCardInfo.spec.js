// test.ts
const  {expect} = require('chai')
const { describe, it } = require("mocha");
const { getCardInfo } = require('../src/creditCard.js');


describe('getCardInfo', function() {
	it('Se espera informacion de una Tarjeta Visa (12 Carracteres)', function() {
		const info = getCardInfo('412345678901');
		expect(info).to.deep.equal({
			type: 'visa',
			validLengths: [12, 16],
			pinLength: 3
		});
	});

	it('Se espera informacion de una Tarjeta Visa (16 Carracteres)', function() {
		const info = getCardInfo('4123456789012345');
		expect(info).to.deep.equal({
			type: 'visa',
			validLengths: [12, 16],
			pinLength: 3
		});
	});
	
	[1,2,3,4,5].forEach((num)=> {
		it(`Se espera informacion de una Tarjeta MasterCard serie 5${num}`, function() {	
			const info = getCardInfo(`5${num}12345678901234`);
			expect(info).to.deep.equal({
				type: 'mastercard',
				validLengths: [16],
				pinLength: 3
			});
		});
	});

	it(`Se espera informacion de una Tarjeta Amex serie 34`, function() {	
		const info = getCardInfo(`341234567890123`);
		expect(info).to.deep.equal({
			type: 'amex',
			validLengths: [15],
			pinLength: 4
		});
	});
	
	it(`Se espera informacion de una Tarjeta Amex serie 37`, function() {	
		const info = getCardInfo(`371234567890123`);
		expect(info).to.deep.equal({
			type: 'amex',
			validLengths: [15],
			pinLength: 4
		});
	});

	it(`Se espera informacion de una Tarjeta discover serie 6011`, function() {	
		const info = getCardInfo(`6011023456789012`);
		expect(info).to.deep.equal({
			type: 'discover',
			validLengths: [16],
			pinLength: 3
		});
	});

	it(`Se espera informacion de una Tarjeta discover serie 65`, function() {	
		const info = getCardInfo(`6510123456789012`);
		expect(info).to.deep.equal({
			type: 'discover',
			validLengths: [16],
			pinLength: 3
		});
	});

	[4,5,6,7,8,9].forEach((num)=> {
		it(`Se espera informacion de una Tarjeta discover serie 64${num}`, function() {	
			const info = getCardInfo(`64${num}1023456789012`);
			expect(info).to.deep.equal({
				type: 'discover',
				validLengths: [16],
				pinLength: 3
			});
		});
	});

	[0, 1, 2, 3 ,4, 5].forEach((num)=> {
		it(`Se espera informacion de una Tarjeta dinnerclub serie 30${num}, 14 Carracteres`, function() {	
			const info = getCardInfo(`30${num}01234567890`);
			expect(info).to.deep.equal({
				type: 'dinnerclub',
				validLengths: [14, 16, 19],
				pinLength: 3
			});
		});

		it(`Se espera informacion de una Tarjeta dinnerclub serie 30${num}, 16 Carracteres`, function() {	
			const info = getCardInfo(`30${num}0123456789012`);
			expect(info).to.deep.equal({
				type: 'dinnerclub',
				validLengths: [14, 16, 19],
				pinLength: 3
			});
		});

		it(`Se espera informacion de una Tarjeta dinnerclub serie 30${num}, 19 Carracteres`, function() {	
			const info = getCardInfo(`30${num}0123456789012345`);
			expect(info).to.deep.equal({
				type: 'dinnerclub',
				validLengths: [14, 16, 19],
				pinLength: 3
			});
		});
	});

	[6, 8, 9].forEach((num)=> {
		it(`Se espera informacion de una Tarjeta dinnerclub serie 3${num}, 14 Carracteres`, function() {	
			const info = getCardInfo(`3${num}012345678901`);
			expect(info).to.deep.equal({
				type: 'dinnerclub',
				validLengths: [14, 16, 19],
				pinLength: 3
			});
		});

		it(`Se espera informacion de una Tarjeta dinnerclub serie 3${num}, 16 Carracteres`, function() {	
			const info = getCardInfo(`3${num}01234567890123`);
			expect(info).to.deep.equal({
				type: 'dinnerclub',
				validLengths: [14, 16, 19],
				pinLength: 3
			});
		});

		it(`Se espera informacion de una Tarjeta dinnerclub serie 3${num}, 19 Carracteres`, function() {	
			const info = getCardInfo(`3${num}01234567890123456`);
			expect(info).to.deep.equal({
				type: 'dinnerclub',
				validLengths: [14, 16, 19],
				pinLength: 3
			});
		});
	});
	
	it('se espera "unknown" para una Tarjeta MasterCard serie 56', function() {
		const info = getCardInfo('5612345678901234');
		expect(info).to.deep.equal({
			type: 'unknown',
			validLengths: [],
			pinLength: null
		});
	});

	it('se espera "unknown" para una Tarjeta MasterCard serie 51 pero de 17 Carracteres', function() {
		const info = getCardInfo('51123456789012345');
		expect(info).to.deep.equal({
			type: 'unknown',
			validLengths: [],
			pinLength: null
		});
	});

	it('se espera "unknown" para el numero de Tarjetas no reconocidas', function() {
		const info = getCardInfo('9111111111111111');
		expect(info).to.deep.equal({
			type: 'unknown',
			validLengths: [],
			pinLength: null
		});
	});
});9