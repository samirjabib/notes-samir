//Dado dos numeros, devolver cuantos numeros IMPARES ahi entre ellos


const oddNumberCounter = (firstNumber, lastNumber) => { 
    let counter = 0 

    while(firstNumber < lastNumber){ //usamos un ciclo while para establecer la condicion de iteracion
        if(firstNumber % 2 !== 0){ // verificamos si el residuo del numero es diferente 0 en caso de ser asi sumamos al contador
            counter++
        }

        firstNumber++;
    }    
    return counter;
}


console.log(oddNumberCounter(1,100))