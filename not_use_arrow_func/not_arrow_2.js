var Message = (text) => {

    this.text = text;

};

var helloMessage = new Message('Hello World!'); // "TypeError: Message is not a constructor»

//Decision: use constructor

var Message = function(text) {

    this.text = text;

};

var helloMessage = new Message('Hello World!');
console.log(helloMessage.text); // => 'Hello World!'
