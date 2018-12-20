'use strict';
/*
    Input: [89, 30, 25, 32, 72]
            ji->             p
                
           [30, 89, 25, 32, 72]
                 j   i       p     

           [30, 25, 89, 32, 72]
                    j   i    p
           [30, 25, 32, 89, 72]
                        j   i p
           [30, 25, 32, 72, 89]
                            j
                            end-1 = j
                            return 4
                            [89]


    Output: [24, 30, 32, 72, 89]


*/
let count = 0;
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  count++;
  const middle = partition(array, start, end);
  // console.log('middle', middle);
  count++;
  array = quickSort(array, start, middle);
  count++;
  array = quickSort(array, middle + 1, end);
  // console.log('quickSort operation count: ', count);
  return array;
}

function partition(array, start, end) {
  //the last item in the array
  const pivot = array[end - 1];
  // console.log('before for loop', array);
  let j = start;
  for (let i = start; i < end - 1; i++) {
    // console.log('iteration through loop', array, 'i', i);

    if (array[i] <= pivot) {
      // console.log('swapped', 'i', i, 'j', j);
      swap(array, i, j);

      j++;

    }
  }
  // console.log('after loop before end swap', array);
  swap(array, end - 1, j);
  // console.log('after loop after end swap', array);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

const arr = [89, 30, 25, 32, 72];
const arr1 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
// console.log(arr1.length);
console.log(quickSort(arr));
console.log('quickSort count: ', count);




/*       Merge Sort        */
let count2 = 0;
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  count2++;
  left = mergeSort(left);
  count2++;
  right = mergeSort(right);
  count2++;
  return merge(left, right, array);
}

function merge(left, right, array) {
  let li = 0;
  let ri = 0;
  let oi = 0;
  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      array[oi] = left[li];
      oi ++;
      li ++;
    } else {
      array[oi] = right[ri];
      oi++;
      ri++;
    }
  }
  for (let i = li; i < left.length; i++) {
    array[oi] = left[li];
    oi++;
    li++;
  }
  for (let i = ri; i < right.length; i++) {
    array[oi] = right[ri];
    oi++;
    ri++;
  }
  return array;
}

console.log(mergeSort(arr));
console.log('mergeSort count: ', count2);