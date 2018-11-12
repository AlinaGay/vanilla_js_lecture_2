var numberA = 'numberA',

    numberB = 'numberB';

var sumFunction = new Function(numberA, numberB, 'return numberA + numberB' );

console.log(sumFunction(10, 15)); // => 25