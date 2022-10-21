/* Que es el polyfill 

    Es una funcionalidad que deberia tener el navegador pero por un tema 
    de que no ha sido implementado, el polyfill suple esa carencia de codigo.


    Y para nosotros es completamente transparente


*/

const arr = [1,2,3,4,5]

// Simulate browser incompatibility
Array.prototype.forEach = null


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