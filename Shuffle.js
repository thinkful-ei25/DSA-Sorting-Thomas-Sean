

function Shuffle(array){
    // let outputArray = new Array(array.length).fill(null); 
    array.forEach(() => {
        let index1 = Math.floor(Math.random() * array.length); 
        let index2 = Math.floor(Math.random() * array.length); 
        let tmp1 = array[index1]; 
        let tmp2 = array[index2]; 
        array[index1] = tmp2; 
        array[index2] = tmp1; 
    });
    return array; 
}

const array = [1, 2, 3, 4, 5, 6]; 
let shuffled = Shuffle(array); 
console.log(shuffled); 