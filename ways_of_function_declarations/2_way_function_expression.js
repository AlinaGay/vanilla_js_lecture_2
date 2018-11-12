var count = function(array) { // Function expression

    return array.length;

}

var methods = {

    numbers: [1, 5, 8],

    sum: function() {

        return this.numbers.reduce(function(acc, num) { // Function expression

            return acc + num;

        } );

    }

}

console.log(count([5, 7, 8])); // => 3
console.log(methods.sum()); // => 14