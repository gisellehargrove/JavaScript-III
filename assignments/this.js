/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding. Until you start creating your own scopes 'this' will be bound to the window or global scope
* 2. Implicit binding is when 'this' is bound to the object you are calling that precedes the .
* 3. New binding is when 'this' is bound to the object that is created when a constructor instantiates a new object
* 4. Explicit binding is when you specifiy what you want 'this' to bind to by using the call and apply mehtods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function example() {
  console.log(this); //<- this would be bound to the window/global object
}

// Principle 2

// code example for Implicit Binding
const exampleObj = {
  showExample: function() {
    console.log(this); //<- this would be bound to the example object
  }
}

exampleObj.showExample() //<-bound to the example obj
// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding
jerry.speak.call(newman); newman.speak.apply(jerry);
