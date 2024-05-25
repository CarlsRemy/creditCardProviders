const { cardDetails, Providers } = require('./Providers.js')
/**
 * @param {Providers} provider
 * @param {string} cardNumber
 * @returns {boolean}
*/
function validateCardByProvider(provider, cardNumber) {
	cardNumber = cardNumber?.replace(/\D/g,'')
	if(!Object.keys(Providers).includes(provider)){
		throw new Error("El Provider debe ser uno de los siguientes: visa, mastercard, amex, discover, dinnerclub");
	}
	if ((cardNumber?.length ?? 0) < 12) {
		return false;
	}
	return cardDetails[provider]?.pattern.test(cardNumber)
}
exports.validateCardByProvider = validateCardByProvider;
/**
 * @param {string} cardNumber 
 * @returns {string}
 */
function detectCardType(cardNumber) {
	cardNumber = cardNumber?.replace(/\D/g,'')
	if ((cardNumber?.length ?? 0) < 1) {
		return 'unknown';
	}

	if ((cardNumber?.length ?? 0) < 12) {
		return 'unknown';
	}

	if (cardNumber.slice(0,1) == "2") {
	  let cardNumber_ =	parent(cardNumber.slice(0,6));    
		if (cardNumber_ >= 222100 && cardNumber_ <= 272099) {
			return 'mastercard';
		}
		return 'unknown';
	}

	for (let card in cardDetails) {
		if (cardDetails[card].pattern2.test(cardNumber)){
			return card;
		} 
	}
	return 'unknown';
}
exports.detectCardType = detectCardType;
/**
 * @param {string} cardNumber
 * @returns {string}
*/
function getCardType(cardNumber) {
	cardNumber = cardNumber?.replace(/\D/g,'')
	if ((cardNumber?.length ?? 0) < 12) {
		return 'unknown';
	}
	for (const cardType in cardDetails) {
		if (cardDetails[cardType].pattern.test(cardNumber)) {
			return cardType;
		}
	}
	return 'unknown';
}
exports.getCardType = getCardType;
/**
 * @param {string} cardNumber
 * @param {boolean} luhnCheck 
 * @returns {{type: string, validLengths: number[], pinLength: number, luhnCheck: boolean}}
*/
function getCardInfo(cardNumber, luhnCheck = true) {
	cardNumber = cardNumber?.replace(/\D/g,'')
	const cardType = getCardType(cardNumber);
	if (cardType === 'unknown') {
		return {
			type: 'unknown',
			validLengths: [],
			pinLength: null,
			luhnCheck: false
		};
	}
	return {
		type: cardType,
		validLengths: cardDetails[cardType].length,
		pinLength: cardDetails[cardType].pinLength,
		luhnCheck: luhnCheck ? validCheckDigit(cardNumber) : false
	};
}
exports.getCardInfo = getCardInfo;
/**
 * @param {string} cardNumber
 * @returns {boolean} luhnCheck 
*/
function validCheckDigit(cardNumber){
	cardNumber = cardNumber?.replace(/\D/g,'')
	if ((cardNumber?.length ?? 0) < 12) {
		return false;
	}
	let sum = 0;
	let isEven = false; 

	for (let i = cardNumber.length -1; i >= 0; i--) {
		let digit = parseInt(cardNumber.charAt(i), 10)
		if (isEven) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}
		sum += digit;
		isEven = !isEven;
	}
	return (sum % 10) === 0;
}
/**
 * @module creditcardproviders
 * @fileoverview Librería creditcardproviders - librería de JS diseñada para identificar el proveedor o tipo de tarjeta de crédito basándose en el número de la tarjeta.
 * @description Esta librería es ideal para desarrolladores que necesitan simular transacciones, validar sistemas de pago, o realizar pruebas de integración, CardTestLib simplifica la generación de números de tarjetas de crédito conformes al algoritmo de Luhn.
 * @author Carlos I. Ynfante R. <https://github.com/CarlsRemy>
 * @license MIT
 * @copyright Carlos I. Ynfante R.
 * @version 0.2.0
*/
exports.validCheckDigit = validCheckDigit;
exports.Providers = Providers;
module.exports = {
	validateCardByProvider,
	detectCardType,
	getCardInfo,
	getCardType,
	validCheckDigit,
	Providers
}