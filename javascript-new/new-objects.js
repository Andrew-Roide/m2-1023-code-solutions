const anObject = new Object();
console.log('value of anObject:', anObject);
console.log('typeof anObject:', typeof anObject);

const anArray = new Object([]);
console.log('value of anArray:', anArray);
console.log('typeof anArray:', typeof anArray);

const aFunction = new Function();
console.log('value of aFunction:', aFunction);
console.log('typeof aFunction:', typeof aFunction);

const aString = new Object('');
console.log('value of aString:', aString);
console.log('typeof aString:', typeof aString);

const aNumber = new Object(0);
console.log('value of aNumber:', aNumber);
console.log('typeof aNumber:', typeof aNumber);

const aBoolean = new Object(false);
console.log('value of aBoolean:', aBoolean);
console.log('typeof aBoolean:', typeof aBoolean);
