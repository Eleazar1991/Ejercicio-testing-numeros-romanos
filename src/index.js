// fizzbuzz

// function fizzbuzz(numero){
//     return ''+numero;
// }

// module.exports=fizzbuzz;

export const fizzbuzz = (value) => {
    if (!(value % 3) && !(value % 5)) { //value==6
        return 'FIZZBUZZ'
    } else if (!(value % 5)) { //value==6
        return 'BUZZ'
    } else if (!(value % 3)) {
        return 'FIZZ'
    } else {
        return "" + value;
    }
}