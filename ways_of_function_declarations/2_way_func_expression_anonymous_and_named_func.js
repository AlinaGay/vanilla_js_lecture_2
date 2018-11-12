var getTypeOne = function(val) { // anonymous func expression

    return typeof val;

};

var myFunc = function getTypeTwo(val) { // named func expression

    return typeof val;

};

console.log(getTypeOne.name); // => '’ (у функции нет имени)
console.log(myFunc.name); // => getTypeTwo (у функции есть имя getTypeTwo)

console.log(myFunc(5)); // => 'number'
console.log(typeof getTypeTwo === 'function'); // => false – переменная getTypeTwo не доступна из вне блока getTypeTwo