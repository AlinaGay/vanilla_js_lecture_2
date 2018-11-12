//hard to read code
let multiply = (a, b) => b === undefined ? b => a * b : a * b;

let double = multiply(2);

console.log(double(3)); // => 6

console.log(multiply(2, 3)); // => 6

//well to read code
    function multiply(a, b) {
        if (b === undefined) {
            return function(b) { return a * b; }
        }
        return a * b;
    }
let double = multiply(2);
console.log(double(3)); // => 6
console.log(multiply(2, 3)); // => 6