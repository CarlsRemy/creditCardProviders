const cardDetails = {
	visa: { // [4]
		pattern: /^4[0-9]{11}(?:[0-9]{4})?$/,
		pattern2: /^4/,
		length: [12, 16],
		pinLength: 3
	},
	mastercard: { // [[51-55], [222100-272099]]
		pattern: /(?^5[1-5][0-9]{14}$|^2(?:2[2-9][1-9]|[3-6][0-9]{2}|7[0-1][0-9]|720)[0-9]{12}$)/,
		pattern2: /^5[1-5]/,
		length: [16],
		pinLength: 3
	},
	amex: { // [34, 37],
		pattern:  /^3[47][0-9]{13}$/,
		pattern2: /^3[47]/,
		length: [15],
		pinLength: 4
	},
	discover: { // [6011, [644, 649], 65],
		pattern: /^6(?:011|4[4-9][0-9]|5[0-9]{2})[0-9]{12}$/,
		pattern2: /^6(?:011|4[4-9][0-9]|5[0-9])/,
		length: [16],
		pinLength: 3
	},
	dinnerclub: { // [[300, 305], 36, 38, 39],
		pattern: /^3(?:0[0-5]|[689][0-9])[0-9]{11}(?:[0-9]{2}|[0-9]{5})?$/,
		pattern2: /^3(?:0[0-5]|[689])/,
		length: [14, 16, 19],
		pinLength: 3
	},
};

/**
 * @enum {string} Providers
 */
const Providers = Object.freeze({
  visa: 'visa',
  mastercard: 'mastercard',
  amex: 'amex',
	discover: 'discover',
	dinnerclub: 'dinnerclub',
});

exports.cardDetails = cardDetails;
exports.Providers = Providers;
module.exports = { cardDetails , Providers};