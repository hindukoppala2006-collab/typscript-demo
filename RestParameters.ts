// Rest parameters allow a function to accept an indefinite number of arguments as an array

function restParameterUse(...num : number[]): number{
    if(num.length === 0) return 0;

    return num.reduce((accumulator, current) => accumulator * current, 1);
}
console.log(restParameterUse(3, 4, 5));
console.log(restParameterUse(2,4));