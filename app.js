const sum = (a,b) =>{
    return a + b
}

console.log(sum(7,3))
//por buenas practicas seria:
//reemplazo valuInEuro por const se puede utilizar inclus el return y no el let
// const fromEuroToDollar = (valuInEuro) => {
//     let valuInDollar = valuInEuro * 1.07;
//     return valuInDollar;
// }

// const fromDollarToYen = (valuInEuro) => {
//     let valuInYen = valuInEuro * 156.5;
//     return valuInYen;
// }

// const fromYenToPound = (valuInEuro) =>{
//     let valuInPound = valuInEuro * 0.87;
//     return valuInPound;
// }
const  fromDollarToYen = (valueInDollars) =>{
    return valueInDollars / 1.07 * 156.5
}
const fromEuroToDollar = (valueInDollar) =>{
    return valueInDollar * 1.07
}
const fromYenToPound = (valueInYen) =>{
    
    return valueInYen / 156.5 * 0.87
}
module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}

