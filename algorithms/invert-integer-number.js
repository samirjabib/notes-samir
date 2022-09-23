const invertIntegerNumber = ( number ) => {

    let invertedNumber = number.toString().split("").reverse().join("")

    let newNumber = Number(invertedNumber)


    return newNumber

}

console.log(invertIntegerNumber(52))


