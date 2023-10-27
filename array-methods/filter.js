const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNumbers = numbers.filter((Array) => Array % 2 === 0);
console.log('even numbers', evenNumbers);

const filter = names.filter((Array) => !Array.toLowerCase().includes('d'));
console.log('no d', filter);

/*
filter() does return something, it iterats over an array and returns a shallow copy of a new array while
that contains only the elements that meet a specific condition in a function
the element parameter in filter(e) represents the value of the individual element that
the loop is currently iterating over. Can also take in an index i as second parameter
*/
