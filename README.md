# creditCardProviders
Esta libreria se centraría en identificar el proveedor o tipo de tarjeta de crédito basándose en el número de la tarjeta.

Esta librería es ideal para desarrolladores que necesitan validar o rápidamente identificar el provedor de la tarjeta, creditCardProviders simplifica la validacion de números de tarjetas de crédito conforme al algoritmo de Luhn  y Expreciones Regulares.

[![NPM Version](https://img.shields.io/npm/v/creditcardproviders.svg)](https://www.npmjs.com/package/creditcardproviders)

> [!IMPORTANT]  
> La informacion del formato de las tarjetas fue tomado de [credit-card-type](github.com/braintree/credit-card-type)
# Funciones Disponibles:

## getCardInfo(cardNumber: String, luhnCheck: Booleam): Object

Esta funcion nos devuelve un Objeto con la informacion de la Tarjeta.

```js
let card = getCardInfo("371234567890123")
console.log(card) // amex
//Tarjetas validas
{
	type: 'amex',
	validLengths: [15],
	pinLength: 4,
	luhnCheck: false
}
//Tarjeta Invalida 
{
	type: 'unknown',
	validLengths: [],
	pinLength: null,
	luhnCheck: false
}
```
## getCardType(cardNumber: String): String
Esta funcion nos devuelve un nombre de la Tarjeta si esta correspone a un formato correcto, de otra manera se retorna **"unknown"**
## validateCardByProvider(provider: Providers, cardNumber: String): Boolean

Esta funcion nos permie validar la tarjeta a un Provedor específico

```js
const { validateCardByProvider, Providers} = require('creditCardProviders');
let isVisa = validateCardByProvider(Providers.visa, "4123456789012345")
console.log(isVisa ? 'Es Visa' : 'No es Visa');
```
## validCheckDigit(cardNumber: String): Booleam
Esta funcion permite identificar si la tarjeta de credito cumple la validacion del algoritmo de luhn

## detectCardType(cardNumber: String): String

Esta funcion permite identificar con los primeros 4 digitos, el tipo de tarjeta, devolviendonos esta el nombre de la misma o **"unknown"** en caso de no ser una tarjeta reconocida.

```js
let card = detectCardType("371234567890123")
console.log(card) // amex
```

### Razones de uso:

#### 1. Identificación Rápida del Tipo de Tarjeta:

Al validar los primeros dígitos de una tarjeta, puedes rápidamente identificar qué tipo de tarjeta es (Visa, MasterCard, American Express, etc.). Esto es útil porque diferentes tarjetas pueden comenzar con números específicos (por ejemplo, Visa con 4, MasterCard con 51-55, etc.). Conocer el tipo de tarjeta de inmediato puede ayudar a aplicar las reglas y validaciones específicas para ese tipo de tarjeta.

#### 2. Mejorar la Experiencia del Usuario
Al identificar el tipo de tarjeta al comienzo de la entrada, puedes personalizar automáticamente la interfaz de usuario para el usuario final. Por ejemplo, puedes mostrar el logo del tipo de tarjeta tan pronto como los primeros dígitos sean ingresados, lo cual puede aumentar la confianza del usuario y mejorar su experiencia.

#### 3. Seguridad y Prevención de Fraude
Validar los primeros dígitos puede ayudar a detectar ciertos tipos de fraudes donde se introducen números aleatorios que no corresponden a ninguna entidad bancaria real. Si los dígitos no coinciden con ningún emisor conocido de tarjetas, la transacción puede ser detenida de inmediato.

#### 4. Simplificación del Procesamiento de Pagos
Diferentes tarjetas pueden requerir diferentes procesos de validación y transacción. Identificar el tipo de tarjeta desde el principio puede ayudar a dirigir la transacción al procesador adecuado sin demoras innecesarias.

## Tarjetas Soportadas

- visa
- mastercard
- amex (American Express)
- discover
- dinnerclub

> [!IMPORTANT]  
> Intalacion: **npm i creditcardproviders**