
const { cardDetails, Providers } = require('./providers.js')


/**
 * @param {Providers} cardType
 * @param {string} number
 * @returns {boolean}
*/
function validateCardByProvider(cardType, number) {
	return cardDetails[cardType].pattern.test(number)
}
exports.validateCardByProvider = validateCardByProvider;
/**
 * @param {string} number 
 * @returns {string}
 */
function detectCardType(number) {
	for (let card in cardDetails) {
		if (cardDetails[card].pattern2.test(number)) return card;
	}
	return 'unknown';
}
exports.detectCardType = detectCardType;
/**
 * @param {string} number
 * @returns {string}
*/
function getCardType(number) {
	for (const cardType in cardDetails) {
		if (cardDetails[cardType].pattern.test(number)) {
			return cardType;
		}
	}
	return 'unknown';
}
exports.getCardType = getCardType;
/**
 * @param {string} number
 * @returns {{type: string, validLengths: number[], pinLength: number}}
*/
function getCardInfo(number) {
	const cardType = getCardType(number);

	if (cardType === 'unknown') {
		return {
			type: 'unknown',
			validLengths: [],
			pinLength: null
		};
	}
	return {
		type: cardType,
		validLengths: cardDetails[cardType].length,
		pinLength: cardDetails[cardType].pinLength
	};
}
exports.getCardInfo = getCardInfo;
exports.Providers = Providers;
module.exports = {
	validateCardByProvider,
	detectCardType,
	getCardInfo,
	getCardType,
	Providers
}