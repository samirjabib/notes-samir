
//Compare the triplets 

const alicia = [1, 2 , 3]

const bob = [3, 2 ,1]

function compareTriplets(a, b) {
    let aliciaPoints = 0;
    let bobPoints = 0;

    for(let i = 0; i < b.length ; i++){
        if(a[i] > b[i]){
            aliciaPoints++
        }
        if(a[i] < b[i]){
            bobPoints++
        }
    }
    return [aliciaPoints, bobPoints]
}


console.log(compareTriplets(alicia , bob))
