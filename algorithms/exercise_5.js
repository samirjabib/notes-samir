//Ejercicio ¿Cuanto es el X por ciento de X numero?

function calculatePercent(percent, num){

    const applyOperation = (num * (percent/100 )); //aplicamos la operacion matematica
    const result = `the ${percent}% of ${num} is ${applyOperation}`; //concatenamos el result con template strings
    

    return result // retornamos
}

console.log(calculatePercent(20,1255))