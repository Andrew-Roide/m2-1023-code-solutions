function ExampleConstructor() {}

console.log(
  'the protoype of exampleConstructor:',
  ExampleConstructor.prototype
);
console.log('the typeof exampleConstructor:', typeof ExampleConstructor);

const newConstructor = new ExampleConstructor();
console.log('the value of newConstructor:', newConstructor);

const instanceOfConstructor = newConstructor instanceof ExampleConstructor;
console.log('the value of instanceOfConstructor:', instanceOfConstructor);
