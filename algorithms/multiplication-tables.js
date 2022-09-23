//Crear Funcion que me retorne las tablas de multiplicar de un numero 



function multiplicationTables (num) {

    const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //1. Creamos el arreglo 

    const result = arrayNumbers.map( i => {  //Iteramos sobre cada numero del arreglo y 
                                            //devolvemos este multiplicado por el numero
        return `${i * num} \n`
    })
    
    const  table =  `table of ${num} \n ${result} `  //Almacenamos los datos


    return table //Los retornamos 
}

console.log(multiplicationTables(6))
    

