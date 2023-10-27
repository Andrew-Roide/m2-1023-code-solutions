const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const newArray = prices.map((array) => {
  return {
    price: array,
    salePrice: array / 2,
  };
});
console.log('Price Objects', newArray);

const formatedPrice = prices.map((array) => `$${array.toFixed(2)}`);
console.log('Formated Prices', formatedPrice);
/*
map() does return something, it iterats over an array and returns a copy as a new array.
the element parameter in map(e) represents the value of the individual element that
the loop is currently iterating over. Can also take in an index i as second parameter

want to create a new object in the new array map() returns [{ price: original_number, salePrice: original_number / 2 }]

want to loop through elements
map((array)) will loop through the elements to access the element it's iterrating over. starting with the first element.
eg map((42.42)) thus creating
price: array(42.42) and salePrice : array(42.42) / 2);
map((10)) thus creating
price: array(10) and salePrice : array(10) / 2); ect...

toFixed() method of Number values formats a number using fixed-point notation with digits. The number of digits to appear after the decimal point
If the body has additional lines of processing, the braces are required — and so is the return keyword
*/
