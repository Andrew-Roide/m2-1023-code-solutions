const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order');
values.forEach((array) => console.log(array));

console.log('Reversed');
values.forEach((array, i) => {
  console.log(values[values.length - i - 1]);
});

/*
forEach() does not return anything in a function. It is mainly used for iterating over an array.
the element parameter in a forEach(e) loop represents the value of the individual element that
the loop is currently iterating over. It directly corresponds to the value of the element in the array.
eg const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
for each iteration of the element parameter, first iteration is 10, second iteration is 1, third is 22, ect.. giving 10, 1, 22, 23, 41, 5, 18, 7, 80, 9

the second paramter will be the index of the current element being processed in the array.
need to access the current index by index["number"];
values[values.length - i - 1] :
for each iteration, i will be the first index of an array. [0];
values.length is the total number of items in the array: 10. 10-[0]-1 = 9. values[9] for the first iteration which is 9 in array.
values.length will still be 10 but the index will move to the next index.
10-[1]-1 = 8. values[8] for the second iteration which is 80 in array;
10-[2]-1 = 7 which is 7 in array, ect..
*/
