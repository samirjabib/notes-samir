//Given an array of integers, find the sum of its elements.

const array = [1, 2, 3, 4, 10, 11]


const sumArray = ( array ) => {

    let sum = 0;

    for (var value of array){
        sum += value;
    }

    return sum
}

console.log(sumArray(array))