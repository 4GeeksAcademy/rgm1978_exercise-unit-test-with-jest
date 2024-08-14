const sum = (a,b) =>{
    return a + b
}

console.log(sum(7,3))

const fromEuroToDollar = function(valuInEuro) {
    let valuInDollar = valuInEuro * 1.07;
    return valuInDollar;
}

module.exports = {sum,fromEuroToDollar}

const fromDollarToYen = function(valuInEuro) {
    let valuInYen = valuInEuro * 156.5;
    return valuInYen;
}

module.exports = {sum,fromDollarToYen}

const fromYenToPound = function(valuInEuro) {
    let valuInDollar = valuInEuro * 0.87;
    return valuInPound;
}

module.exports = {sum,fromYenToPound}

