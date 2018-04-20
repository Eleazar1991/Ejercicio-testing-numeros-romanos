// fizzbuzz

// function fizzbuzz(numero){
//     return ''+numero;
// }

// module.exports=fizzbuzz;

export const romanNumbers = (value) => {
    var map = {
        1000:"M",
        500:"D",
        100:"C",
        50:"L",
        10:"X",
        9:"IX",
        5:"V",
        4:"IV",
        1:"I"
    }
    var romanNumber = ""
    return convertToRomanNumber(map,value,romanNumber)
}

function convertToRomanNumber(map,value,romanNumber){
    if(value>=1000){
        romanNumber+=map['1000']
        value-=1000;
        return convertToRomanNumber(map,value,romanNumber);
    }
    if(value>=500){
        romanNumber+=map['500']
        value-=500;
        return convertToRomanNumber(map,value,romanNumber);
    }
    if(value>=100){
        romanNumber+=map['100']
        value-=100;
        return convertToRomanNumber(map,value,romanNumber);
    }
    if(value>=50){
        romanNumber+=map['50']
        value-=50;
        return convertToRomanNumber(map,value,romanNumber);
    }
    if(value>=10){
        romanNumber+=map['10']
        value-=10;
        return convertToRomanNumber(map,value,romanNumber);
    }
    if(value>=5){
        romanNumber+=map['5']
        value-=5;
        return convertToRomanNumber(map,value,romanNumber);
    }
    if(value>=1){
        romanNumber+=map['1']
        value-=1;
        return convertToRomanNumber(map,value,romanNumber);
    }
    if(value==0){
        return romanNumber;
    }
    
}