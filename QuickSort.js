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

function quickSort(array, start = 0, end=array.length){ 
    if (start >= end) {
        return array;  
    }
    const middle = partition(array, start, end); 
    console.log('middle', middle); 
    array = quickSort(array, start, middle); 
    array = quickSort(array, middle + 1, end); 
    return array; 
}

function partition(array, start, end) { 
    //the last item in the array
    const pivot = array[end -1];
    console.log('before for loop', array); 
    let j = start; 
    for (let i=start; i < end-1; i++) { 
        console.log('iteration through loop', array, 'i', i); 

        if (array[i] <= pivot) { 
            console.log('swapped', 'i', i, 'j', j)
            swap(array, i, j); 
           
            j++; 
           
        }
    }
    console.log('after loop before end swap', array); 
    swap(array, end-1, j)
    console.log('after loop after end swap', array); 
    return j; 
}

function swap(array, i, j) { 
    const tmp = array[i]; 
    array[i] = array[j]
    array[j] = tmp; 
}

const arr = [89, 30, 25, 32, 72]; 
quickSort(arr)