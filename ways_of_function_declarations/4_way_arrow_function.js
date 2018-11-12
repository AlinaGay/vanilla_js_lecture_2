var absValue = (number) => {

    if (number < 0) {

        return -number;

    }

    return number;

}

console.log(absValue(-10)); // => 10

console.log(absValue(5)); // => 5