'use strict';

let books = ['book', 'bad', 'girl', 'cat', 'ant', 'tree', 'thinkful', 'sorting', 'animal'];

function sortBooks(array) {
  if (array.length <= 1) {
    return array;
  }
  
  for (let i = 0; i < array.length -1; i++) {
    let index = 0;
    // console.log('1: ', array[i][index], '2: ', array[i+1][index]);
    // console.log(array[i+1][index]);
    while(array[i][index] === array[i+1][index]) {
      index++;
    }
    if(array[i][index] > array[i+1][index]) {
      swap(array, i, i+1);
      sortBooks(array);
    }
  }
  return array;
}


function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

console.log(sortBooks(books));