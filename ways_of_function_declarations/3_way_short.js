var collection = {

    items: [],

    add(...items){ // short (without key word 'function' and colon)

        this.items.push(...items);

},

getVal: function(index) { // usual method

    return this.items[index];

}

};

collection.add('C', 'Java', 'PHP');

console.log(collection.getVal(1)); // => 'Java'