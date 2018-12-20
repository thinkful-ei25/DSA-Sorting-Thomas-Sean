/*
    Input: [5, 7, 12, 9] Min:5, Max: 12 

    if (element === min){ 
        arr[0] = min
    }

    if (element === max) { 
        arr[arr.length] = max
    }

    12 - 5 = 7

    
    Min <-> Max
    70&
    0 <-> arr.length -1

    5 - 12
      7
      %15

    0 -3
    1
    
    

*/


function bucketSort(arr, min, max){ 
    let outArr = new Array(arr.length).fill(1); 
    arr.forEach(element => {
        let scaled = Math.ceil(scaleRanges(0, arr.length-1, min, max, element)); 
        outArr[scaled] = element; 
    });
    return outArr; 
}

function scaleRanges(lengthMin, lengthMax, numMin, numMax, element){
    let percent = (element - numMin) / (numMax - numMin); 

    return percent * (lengthMax - lengthMin) + lengthMin;  
}

let arr = [5, 7, 12, 9]; 
const arr1 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
const bucketSorted = bucketSort(arr, 5, 12); 
console.log('bucket sorted', bucketSorted); 