/* Que es el polyfill 

    Es una pieza de codigo de javascript que se usa para proporcionar o completar
    alguna funcionalidad que es compatible en un navegador pero ne otro no lo es. 


*/

const arr = [1,2,3,4,5]

// Simulate browser incompatibility
Array.prototype.forEach = null //Borramos el metodo forEach del prototipo de array



//Polyfill
if(!Array.prototype.forEach)
{
   Array.prototype.forEach = function(callbackFunction){
   
   for(let val of this)
        callbackFunction(val)
   }
}

arr.forEach((val) => {
    console.log(val * 2)
})