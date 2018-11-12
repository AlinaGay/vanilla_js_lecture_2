var addMethod = 'add',

    getMethod = 'get';

var collection = {

    items: [],

    [addMethod](...items) {

        this.items.push(...items);

    },

    [getMethod](index) {

        return this.items[index];

    }

};

collection[addMethod]('C', 'Java', 'PHP');

console.log(collection[getMethod](1)); // => 'Java'