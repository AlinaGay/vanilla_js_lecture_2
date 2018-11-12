function* indexGenerator(){

    var index = 0;

    while(true) {

        yield index++;

    }

}

var g = indexGenerator();

console.log(g.next().value); // => 0

console.log(g.next().value); // => 1

console.log(g.next().value); // => 2


//ways of declaration generators

//1 func declaration
function* indexGenerator(){ /*…*/ };

//2 function expression

var indexGenerator = function* () { /*…*/ };

//3 short way

    var obj = {

        *indexGenerator() {

            var index = 0;

            while(true) {

                yield index++;

            } } }