const array = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function arraySum( array ) {

    let sum = 0

    for(let i = 0; i < array.length ; i++){
        sum += array[i]
    }

    return sum
}

console.log(arraySum(array))